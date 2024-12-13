import Editor from "./editor";
import { createDocumentStory } from "document-model-libs/utils";

import * as AtlasOriginalContextDataModule from "../../document-models/atlas-original-context-data";

const { meta, CreateDocumentStory: AtlasOriginalContextData } =
  createDocumentStory(
    Editor,
    AtlasOriginalContextDataModule.reducer,
    AtlasOriginalContextDataModule.utils.createDocument(),
  );
export { AtlasOriginalContextData };

export default { ...meta, title: "Atlas Context" };
