import { ExtendedEditor, EditorContextProps } from "document-model-libs";
import Editor from "./editor";
import {
  AtlasFoundationState,
  AtlasFoundationAction,
  AtlasFoundationLocalState,
} from "../../document-models/atlas-foundation";

export const module: ExtendedEditor<
  AtlasFoundationState,
  AtlasFoundationAction,
  AtlasFoundationLocalState,
  EditorContextProps
> = {
  Component: Editor,
  documentTypes: ["sky/atlas-foundation"],
  config: {
    id: "editor-id",
    disableExternalControls: true,
    documentToolbarEnabled: true,
    showSwitchboardLink: true,
  },
};

export default module;
