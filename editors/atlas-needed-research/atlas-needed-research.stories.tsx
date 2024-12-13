import Editor from "./editor";
import { createDocumentStory } from "document-model-libs/utils";

import * as AtlasNeededResearchModule from "../../document-models/atlas-needed-research";

const { meta, CreateDocumentStory: AtlasNeededResearch } = createDocumentStory(
  Editor,
  AtlasNeededResearchModule.reducer,
  AtlasNeededResearchModule.utils.createDocument(),
);
export { AtlasNeededResearch };

export default { ...meta, title: "Atlas Needed Research" };
