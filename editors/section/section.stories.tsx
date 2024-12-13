import Editor from "./editor";
import { createDocumentStory } from "document-model-libs/utils";

import * as AtlasSectionModule from "../../document-models/atlas-section";

const { meta, CreateDocumentStory: AtlasSection } = createDocumentStory(
  Editor,
  AtlasSectionModule.reducer,
  AtlasSectionModule.utils.createDocument(),
);
export { AtlasSection };

export default { ...meta, title: "Section" };
