import { ExtendedEditor, EditorContextProps } from "document-model-libs";
import Editor from "./editor";
import {
  AtlasMultiParentState,
  AtlasMultiParentAction,
  AtlasMultiParentLocalState,
} from "../../document-models/atlas-multi-parent";

export const module: ExtendedEditor<
  AtlasMultiParentState,
  AtlasMultiParentAction,
  AtlasMultiParentLocalState,
  EditorContextProps
> = {
  Component: Editor,
  documentTypes: ["sky/atlas-multiparent"],
  config: {
    id: "editor-id",
    disableExternalControls: true,
    documentToolbarEnabled: true,
    showSwitchboardLink: true,
  },
};

export default module;
