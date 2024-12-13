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
import { AtlasScopeDocument, actions as AtlasScopeActions, reducer as AtlasScopeReducer } from '../../document-models/atlas-scope';
import { ActionSigner, DocumentModel } from "document-model/document";
import * as LocalDocumentModels from '../../document-models';
import { v4 as uuid } from "uuid";
import dotenv from "dotenv";
import jsonScopes from './scope.json';
import jsonMasterStatus from './masterStatus.json';

dotenv.config();

// const deleteFoldersAndFiles = async (driveServer: IDocumentDriveServer, driveId: string) => {
//     const documents = await driveServer.getDocuments(driveId);
//     return Promise.all(documents.map(e => driveServer.deleteDocument(driveId, e)))
// }


const addFoldersAndDocuments = async (driveServer: IBaseDocumentDriveServer, driveName: string) => {
    let docId = uuid()
    let folderId = uuid();
    let skyAtlasFolderId = uuid();
    let drive = await driveServer.getDrive(driveName);
    let document: AtlasScopeDocument;

    // Getting scopes from json
    const scopes = jsonScopes as Record<string, any>;

    drive = reducer(
        drive,
        actions.addFolder({
            id: skyAtlasFolderId,
            name: 'Sky Atlas'
        })
    );

    // // queue last 1 drive operations
    const driveOperations = drive.operations.global.slice(-1);
    await driveServer.queueDriveOperations(driveName, driveOperations);
    // await sleep(100)


    // Run through each scope and create a folder and a document for each
    for (const key in scopes) {
        const scope = scopes[key];

        drive = reducer(
            drive,
            actions.addFolder({
                id: scope.id + 'folder',
                name: `${scope.docNoString} ${scope.nameString}`,
                parentFolder: skyAtlasFolderId
            }),
        );

        const driveOperation1 = drive.operations.global.slice(-1);
        await driveServer.queueDriveOperations(driveName, driveOperation1);
        // await sleep(100)

        drive = reducer(
            drive,
            DocumentDriveUtils.generateAddNodeAction(
                drive.state.global,
                {
                    id: scope.id,
                    name: `${scope.docNoString} ${scope.nameString}`,
                    documentType: 'sky/atlas-scope',
                    parentFolder: scope.id + 'folder',
                },
                ['global', 'local']
            )
        );


        const driveOperation = drive.operations.global.slice(-1);
        await driveServer.queueDriveOperations(driveName, driveOperation);
        // await sleep(100)
    }

    // retrive newly created documents by using the scopes id as document id
    for (const key in scopes) {
        const scope = scopes[key];
        document = await driveServer.getDocument(driveName, scope.id) as AtlasScopeDocument;

        // pupulate document with scope data
        document = AtlasScopeReducer(
            document,
            AtlasScopeActions.updateScope({
                name: scope.nameString,
                docNo: scope.docNoString,
                content: scope.content[0].plain_text,
                masterStatus: scope.masterStatus.map((s: any) => getMasterStatus(s.id)).flat(),
                globalTags: ['CAIS'],
                originalContextData: ['somePHID'],
                provenance: '',
                notionId: ''
            })
        )
        
        const result = await driveServer.queueOperations(driveName, scope.id, document.operations.global.slice(-1));
        const documentResult: AtlasScopeDocument = result.document as AtlasScopeDocument;
        console.log('Adding scope', documentResult.state.global.name);
        await sleep(200)
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

const getMasterStatus = (searchKey: string) => {
    const masterStatus = jsonMasterStatus as Record<string, any>;
    const statusObject = masterStatus[searchKey];
    if (!statusObject) {
        throw new Error(`Master status not found for key: ${searchKey}`);
    }
    return statusObject.nameString.toUpperCase();
}


main();
