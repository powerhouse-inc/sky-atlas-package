import { ExtendedEditor, EditorContextProps } from "document-model-libs";
import Editor from "./editor";
import {
  AtlasScenarioState,
  AtlasScenarioAction,
  AtlasScenarioLocalState,
} from "../../document-models/atlas-scenario";

export const module: ExtendedEditor<
  AtlasScenarioState,
  AtlasScenarioAction,
  AtlasScenarioLocalState,
  EditorContextProps
> = {
  Component: Editor,
  documentTypes: ["sky/atlas-scenario"],
  config: {
    id: "editor-id",
    disableExternalControls: true,
    documentToolbarEnabled: true,
    showSwitchboardLink: true,
  },
};

export default module;
