import Editor from "./editor";
import { createDocumentStory } from "document-model-libs/utils";

import * as AtlasScenarioModule from "../../document-models/atlas-scenario";

const { meta, CreateDocumentStory: AtlasScenario } = createDocumentStory(
  Editor,
  AtlasScenarioModule.reducer,
  AtlasScenarioModule.utils.createDocument(),
);
export { AtlasScenario };

export default { ...meta, title: "Atlas Scenario" };
