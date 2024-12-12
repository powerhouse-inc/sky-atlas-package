import { ExtendedEditor, EditorContextProps } from "document-model-libs";
import Editor from "./editor";
import {
  ControllerState,
  ControllerAction,
  ControllerLocalState,
} from "../../document-models/controller";

export const module: ExtendedEditor<
  ControllerState,
  ControllerAction,
  ControllerLocalState,
  EditorContextProps
> = {
  Component: Editor,
  documentTypes: ["sky/atlas-controller"],
  config: {
    id: "editor-id",
    disableExternalControls: true,
    documentToolbarEnabled: true,
    showSwitchboardLink: true,
  },
};

export default module;
