import { ExtendedEditor, EditorContextProps } from "document-model-libs";
import Editor from "./editor";
import {
  AtlasAnnotationState,
  AtlasAnnotationAction,
  AtlasAnnotationLocalState,
} from "../../document-models/atlas-annotation";

export const module: ExtendedEditor<
  AtlasAnnotationState,
  AtlasAnnotationAction,
  AtlasAnnotationLocalState,
  EditorContextProps
> = {
  Component: Editor,
  documentTypes: ["sky/atlas-annotation"],
  config: {
    id: "editor-id",
    disableExternalControls: true,
    documentToolbarEnabled: true,
    showSwitchboardLink: true,
  },
};

export default module;
