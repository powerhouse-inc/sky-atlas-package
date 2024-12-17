import Editor from "./editor";
import { createDocumentStory } from "document-model-libs/utils";

import * as AtlasGroundModule from "../../document-models/atlas-ground";

const { meta, CreateDocumentStory: AtlasGround } = createDocumentStory(
  Editor,
  AtlasGroundModule.reducer,
  AtlasGroundModule.utils.createDocument(),
);
export { AtlasGround };

export default { ...meta, title: "Atlas Ground Phdm Zip" };
