import { DocumentDriveServer, IBaseDocumentDriveServer } from "document-drive";
import {
    module as DocumentModelLib,
} from 'document-model/document-model';
import {
    utils as DocumentDriveUtils,
    reducer,
    actions,
    DocumentDriveDocument
} from 'document-model-libs/document-drive';
import * as DocumentModelsLibs from 'document-model-libs/document-models';
// update below import to the correct document model
// import { AccountTransactionsDocument, actions as accActions, reducer as accReducer, CreateTransactionInput } from '../../document-models/account-transactions';
import { ActionSigner, DocumentModel } from "document-model/document";
import * as LocalDocumentModels from '../../document-models';
import { v4 as uuid } from "uuid";
import dotenv from "dotenv";
import jsonScopes from './scope.json';

dotenv.config();

// const deleteFoldersAndFiles = async (driveServer: IDocumentDriveServer, driveId: string) => {
//     const documents = await driveServer.getDocuments(driveId);
//     return Promise.all(documents.map(e => driveServer.deleteDocument(driveId, e)))
// }


const addFoldersAndDocuments = async (driveServer: IBaseDocumentDriveServer, driveName: string) => {
    let docId = uuid()
    let folderId = uuid();
    let drive = await driveServer.getDrive(driveName);
    let document: AccountTransactionsDocument;

    // Getting transactions from json
    const transactions = jsonTransactions.results;

    // Create a new folder for the account transactions
    drive = reducer(
        drive,
        actions.addFolder({
            id: folderId,
            name: 'Account Transactions'
        })
    );

    // Create one document to house all transactions
    drive = reducer(
        drive,
        DocumentDriveUtils.generateAddNodeAction(
            drive.state.global,
            {
                id: docId,
                name: 'Transactions',
                documentType: 'powerhouse/account-transactions',
                parentFolder: folderId,
            },
            ['global', 'local']
        )
    );

    // queue last 1 drive operations
    const driveOperations = drive.operations.global.slice(-2);
    await driveServer.queueDriveOperations(driveName, driveOperations);

    // retrieve new created document
    document = (await driveServer.getDocument(
        driveName,
        docId
    )) as AccountTransactionsDocument;

    for (let rawTransaction of transactions) {

        const transaction: CreateTransactionInput = {
            id: uuid(),
            amount: Number(rawTransaction.amount),
            datetime: rawTransaction.datetime,
            details: {
                crypto: {
                    txHash: rawTransaction.tx_hash,
                    token: "token not defined",
                    blockNumber: rawTransaction.block_number,
                }
            },
            fromAccount: rawTransaction.sender,
            toAccount: rawTransaction.receiver,
            budget: ''
        }

        // create transaction
        document = accReducer(
            document,
            accActions.createTransaction(transaction)
        );

        // queue new created operations for processing
        const result = await driveServer.queueOperations(driveName, docId, document.operations.global.slice(-1));
        const documentResult: AccountTransactionsDocument = result.document as AccountTransactionsDocument;
        console.log('Adding transaction', documentResult.state.global.transactions);
        // await sleep(500)
    }

}

function sleep(milliseconds: number) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

async function main() {
    console.time('script');

    // select document models
    const documentModels = [
        DocumentModelLib,
        ...Object.values(LocalDocumentModels),
        ...Object.values(DocumentModelsLibs)
    ] as DocumentModel[];

    // init drive server with document models
    const driveServer = new DocumentDriveServer(documentModels);
    await driveServer.initialize();

    // if remote document drive is given init remote drive otherwise add local drive
    const remoteDriveUrl = 'http://localhost:4001/d/powerhouse';
    if (!remoteDriveUrl) {
        throw new Error("Remote Drive not configured");
    }

    const driveName = remoteDriveUrl.split("/")!.slice(-1)[0];

    if (!driveName) {
        throw new Error("Could not extract drivename from remote Drive URL");
    }

    let drive: DocumentDriveDocument;
    const listenerId = uuid();
    drive = await driveServer.addRemoteDrive(remoteDriveUrl!, {
        availableOffline: true, listeners: [
            {
                block: true,
                callInfo: {
                    data: remoteDriveUrl,
                    name: 'switchboard-push',
                    transmitterType: 'SwitchboardPush',
                },
                filter: {
                    branch: ['main'],
                    documentId: ['*'],
                    documentType: ['*'],
                    scope: ['global'],
                },
                label: 'Switchboard Sync',
                listenerId,
                system: true,
            },
        ], sharingType: "public", triggers: [], pullInterval: 100
    });

    let synced = false;

    driveServer.on("syncStatus", async (driveId, syncStatus) => {

        if (synced) {
            return;
        }

        if (driveId !== driveName || syncStatus !== "SUCCESS") {
            return;
        }

        synced = true;
        await addFoldersAndDocuments(driveServer, driveName);
        await driveServer.addDriveAction(drive.state.global.id, actions.removeListener({ listenerId }));
        console.timeEnd('script');
        process.exit(0);

    })

}


main();
