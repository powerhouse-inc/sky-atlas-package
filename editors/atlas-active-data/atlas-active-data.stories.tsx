import Editor from "./editor";
import { createDocumentStory } from "document-model-libs/utils";

import * as AtlasActiveDataModule from "../../document-models/atlas-active-data";

const { meta, CreateDocumentStory: AtlasActiveData } = createDocumentStory(
  Editor,
  AtlasActiveDataModule.reducer,
  AtlasActiveDataModule.utils.createDocument(),
);
export { AtlasActiveData };

export default { ...meta, title: "Atlas Active Data" };
