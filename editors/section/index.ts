import { ExtendedEditor, EditorContextProps } from "document-model-libs";
import Editor from "./editor";
import {
  AtlasSectionState,
  AtlasSectionAction,
  AtlasSectionLocalState,
} from "../../document-models/atlas-section";

export const module: ExtendedEditor<
  AtlasSectionState,
  AtlasSectionAction,
  AtlasSectionLocalState,
  EditorContextProps
> = {
  Component: Editor,
  documentTypes: ["sky/atlas-section"],
  config: {
    id: "editor-id",
    disableExternalControls: true,
    documentToolbarEnabled: true,
    showSwitchboardLink: true,
  },
};

export default module;
