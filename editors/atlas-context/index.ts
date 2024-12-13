import { ExtendedEditor, EditorContextProps } from "document-model-libs";
import Editor from "./editor";
import {
  AtlasOriginalContextDataState,
  AtlasOriginalContextDataAction,
  AtlasOriginalContextDataLocalState,
} from "../../document-models/atlas-original-context-data";

export const module: ExtendedEditor<
  AtlasOriginalContextDataState,
  AtlasOriginalContextDataAction,
  AtlasOriginalContextDataLocalState,
  EditorContextProps
> = {
  Component: Editor,
  documentTypes: ["sky/atlas-OriginalContextData"],
  config: {
    id: "editor-id",
    disableExternalControls: true,
    documentToolbarEnabled: true,
    showSwitchboardLink: true,
  },
};

export default module;
