import { ExtendedEditor, EditorContextProps } from "document-model-libs";
import Editor from "./editor";
import {
  AtlasTenetState,
  AtlasTenetAction,
  AtlasTenetLocalState,
} from "../../document-models/atlas-tenet";

export const module: ExtendedEditor<
  AtlasTenetState,
  AtlasTenetAction,
  AtlasTenetLocalState,
  EditorContextProps
> = {
  Component: Editor,
  documentTypes: ["sky/atlas-tenet"],
  config: {
    id: "editor-id",
    disableExternalControls: true,
    documentToolbarEnabled: true,
    showSwitchboardLink: true,
  },
};

export default module;
