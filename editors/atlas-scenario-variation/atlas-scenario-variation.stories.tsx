import Editor from "./editor";
import { createDocumentStory } from "document-model-libs/utils";

import * as AtlasScenarioVariationModule from "../../document-models/atlas-scenario-variation";

const { meta, CreateDocumentStory: AtlasScenarioVariation } =
  createDocumentStory(
    Editor,
    AtlasScenarioVariationModule.reducer,
    AtlasScenarioVariationModule.utils.createDocument(),
  );
export { AtlasScenarioVariation };

export default { ...meta, title: "Atlas Scenario Variation" };
