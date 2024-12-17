import { ExtendedEditor, EditorContextProps } from "document-model-libs";
import Editor from "./editor";
import {
  AtlasGroundState,
  AtlasGroundAction,
  AtlasGroundLocalState,
} from "../../document-models/atlas-ground";

export const module: ExtendedEditor<
  AtlasGroundState,
  AtlasGroundAction,
  AtlasGroundLocalState,
  EditorContextProps
> = {
  Component: Editor,
  documentTypes: ["sky/atlas-ground"],
  config: {
    id: "editor-id",
    disableExternalControls: true,
    documentToolbarEnabled: true,
    showSwitchboardLink: true,
  },
};

export default module;
