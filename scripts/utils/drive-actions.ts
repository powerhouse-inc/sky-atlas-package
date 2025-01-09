import { randomUUID } from "crypto";
import { DocumentDriveServer, IBaseDocumentDriveServer } from "document-drive";
import {
  actions,
  generateSynchronizationUnitId,
  generateSynchronizationUnits,
} from "document-model-libs/document-drive";
import * as DocumentModelsLibs from "document-model-libs/document-models";
import { DocumentModel } from "document-model/document";
import { module as DocumentModelLib } from "document-model/document-model";
import * as LocalDocumentModels from "../../document-models";
import { stat } from "fs";

export const addFolder = (
  driveServer: IBaseDocumentDriveServer,
  driveId: string,
  nodeId: string,
  nodeName: string,
  parentFolder: string | undefined = undefined
) => {
  return driveServer.addDriveAction(
    driveId,
    actions.addFolder({
      id: nodeId,
      name: nodeName,
      parentFolder: parentFolder,
    })
  );
};

export const addDocument = async (
  driveServer: IBaseDocumentDriveServer,
  driveId: string,
  documentId: string,
  documentName: string,
  documentType: string,
  parentFolder: string
) => {
  const drive = await driveServer.getDrive(driveId);
  return driveServer.addDriveAction(
    driveId,
    actions.addFile({
      documentType,
      id: documentId,
      name: documentName,
      parentFolder,
      synchronizationUnits: generateSynchronizationUnits(drive.state.global, [
        "global",
      ]),
    })
  );
};

export const createReactorAndCreateLocalDrive = async (driveName: string) => {
  const documentModels = [
    DocumentModelLib,
    ...Object.values(LocalDocumentModels),
    ...Object.values(DocumentModelsLibs),
  ] as DocumentModel[];
  const driveServer = new DocumentDriveServer(documentModels);
  await driveServer.initialize();
  return new Promise((resolve, reject) => {
    // init drive server with document models
    const listenerId = randomUUID();
    driveServer.addRemoteDrive(driveName, {
      availableOffline: true,
      listeners: [
        {
          block: true,
          callInfo: {
            data: driveName,
            name: "switchboard-push",
            transmitterType: "SwitchboardPush",
          },
          filter: {
            branch: ["main"],
            documentId: ["*"],
            documentType: ["*"],
            scope: ["global"],
          },
          label: "Switchboard Sync",
          listenerId,
          system: true,
        },
      ],
      sharingType: "public",
      triggers: [],
      pullInterval: 100,
    });

    driveServer.on("syncStatus", (driveId, status, error, syncUnitStatus) => {
      if (driveId !== driveId.split("/").pop() || status !== "SUCCESS") {
        return;
      }
      return resolve(driveServer);
    });
  });
};
