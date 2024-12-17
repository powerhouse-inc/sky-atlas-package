import Editor from "./editor";
import { createDocumentStory } from "document-model-libs/utils";

import * as AtlasFoundationModule from "../../document-models/atlas-foundation";

const { meta, CreateDocumentStory: AtlasFoundation } = createDocumentStory(
  Editor,
  AtlasFoundationModule.reducer,
  AtlasFoundationModule.utils.createDocument(),
);
export { AtlasFoundation };

export default { ...meta, title: "Atlas Foundation Phdm Zip" };
