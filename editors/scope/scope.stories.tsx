import Editor from "./editor";
import { createDocumentStory } from "document-model-libs/utils";

import * as AtlasScopeModule from "../../document-models/atlas-scope";

const { meta, CreateDocumentStory: AtlasScope } = createDocumentStory(
  Editor,
  AtlasScopeModule.reducer,
  AtlasScopeModule.utils.createDocument(),
);
export { AtlasScope };

export default { ...meta, title: "Scope" };
