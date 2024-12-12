import Editor from "./editor";
import { createDocumentStory } from "document-model-libs/utils";

import * as AtlasCoreModule from "../../document-models/atlas-core";

const { meta, CreateDocumentStory: AtlasCore } = createDocumentStory(
  Editor,
  AtlasCoreModule.reducer,
  AtlasCoreModule.utils.createDocument(),
);
export { AtlasCore };

export default { ...meta, title: "Core" };
