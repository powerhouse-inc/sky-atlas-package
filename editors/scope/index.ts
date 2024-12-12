import { ExtendedEditor, EditorContextProps } from "document-model-libs";
import Editor from "./editor";
import {
  AtlasScopeState,
  AtlasScopeAction,
  AtlasScopeLocalState,
} from "../../document-models/atlas-scope";

export const module: ExtendedEditor<
  AtlasScopeState,
  AtlasScopeAction,
  AtlasScopeLocalState,
  EditorContextProps
> = {
  Component: Editor,
  documentTypes: ["sky/atlas-scope"],
  config: {
    id: "editor-id",
    disableExternalControls: true,
    documentToolbarEnabled: true,
    showSwitchboardLink: true,
  },
};

export default module;
