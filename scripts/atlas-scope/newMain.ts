import {
  addDocument,
  addFolder,
  createReactorAndCreateLocalDrive,
} from "scripts/utils/drive-actions";
import jsonScopes from "./scope.json";
import jsonMasterStatus from "./masterStatus.json";
import notionScopes from "../data/notion-pages/scope.json";
import notionArticles from "../data/notion-pages/article.json";
import { addArticles, populateScope } from "scripts/utils/atlas-actions";
import { DocumentDriveDocument } from "document-model-libs/document-drive";
import { IBaseDocumentDriveServer } from "document-drive";
async function main() {
  const driveServer = (await createReactorAndCreateLocalDrive(
    "http://localhost:4001/d/powerhouse"
  )) as IBaseDocumentDriveServer;

  const driveIds = await driveServer.getDrives();
  console.log(driveIds);
  let drive = await driveServer.getDrive(driveIds[0]);
  console.log(drive.state);
  console.log(driveIds[0]);
  await addFolder(driveServer, driveIds[0], "sky-atlas", "Sky Atlas");
  drive = await driveServer.getDrive(driveIds[0]);
  console.log(drive.state.global.nodes);
  const rootDirId = drive.state.global.nodes.find(
    (e) => e.name === "Sky Atlas"
  );
  if (!rootDirId) {
    throw new Error("Root directory not found");
  }

  // create section 1 folders and documents
  for (let entry of Object.entries(jsonScopes).sort((a, b) =>
    a[1].docNoString.localeCompare(b[1].docNoString)
  )) {
    const [key, scope] = entry;
    const result = await addFolder(
      driveServer,
      driveIds[0],
      scope.id + "-folder",
      `${scope.docNoString} ${scope.nameString}`,
      rootDirId.id
    );

    await addDocument(
      driveServer,
      driveIds[0],
      scope.id + "-document",
      `${scope.docNoString} ${scope.nameString}`,
      "sky/atlas-scope",
      scope.id + "-folder"
    );

    const notionScope = notionScopes.find((s: any) => s.id === scope.id);
    await populateScope(
      driveServer,
      driveIds[0],
      scope.id + "-document",
      scope,
      notionScope?.url,
      jsonMasterStatus
    );

    await addArticles(
      driveServer,
      driveIds[0],
      scope.id + "-document",
      scope.children,
      notionArticles,
      scope
    );
  }

  process.exit(0);
}

main();
