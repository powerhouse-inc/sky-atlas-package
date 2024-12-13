import { ExtendedEditor, EditorContextProps } from "document-model-libs";
import Editor from "./editor";
import {
  AtlasScenarioVariationState,
  AtlasScenarioVariationAction,
  AtlasScenarioVariationLocalState,
} from "../../document-models/atlas-scenario-variation";

export const module: ExtendedEditor<
  AtlasScenarioVariationState,
  AtlasScenarioVariationAction,
  AtlasScenarioVariationLocalState,
  EditorContextProps
> = {
  Component: Editor,
  documentTypes: ["sky/atlas-scenariovariation"],
  config: {
    id: "editor-id",
    disableExternalControls: true,
    documentToolbarEnabled: true,
    showSwitchboardLink: true,
  },
};

export default module;
