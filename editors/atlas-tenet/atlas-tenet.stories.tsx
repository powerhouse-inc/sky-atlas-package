import Editor from "./editor";
import { createDocumentStory } from "document-model-libs/utils";

import * as AtlasTenetModule from "../../document-models/atlas-tenet";

const { meta, CreateDocumentStory: AtlasTenet } = createDocumentStory(
  Editor,
  AtlasTenetModule.reducer,
  AtlasTenetModule.utils.createDocument(),
);
export { AtlasTenet };

export default { ...meta, title: "Atlas Tenet" };
