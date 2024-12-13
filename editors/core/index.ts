import { ExtendedEditor, EditorContextProps } from "document-model-libs";
import Editor from "./editor";
import {
  AtlasCoreState,
  AtlasCoreAction,
  AtlasCoreLocalState,
} from "../../document-models/atlas-core";

export const module: ExtendedEditor<
  AtlasCoreState,
  AtlasCoreAction,
  AtlasCoreLocalState,
  EditorContextProps
> = {
  Component: Editor,
  documentTypes: ["sky/atlas-core"],
  config: {
    id: "editor-id",
    disableExternalControls: true,
    documentToolbarEnabled: true,
    showSwitchboardLink: true,
  },
};

export default module;
