import { ExtendedEditor, EditorContextProps } from "document-model-libs";
import Editor from "./editor";
import {
  AtlasActiveDataState,
  AtlasActiveDataAction,
  AtlasActiveDataLocalState,
} from "../../document-models/atlas-active-data";

export const module: ExtendedEditor<
  AtlasActiveDataState,
  AtlasActiveDataAction,
  AtlasActiveDataLocalState,
  EditorContextProps
> = {
  Component: Editor,
  documentTypes: ["sky/atlas-activedata"],
  config: {
    id: "editor-id",
    disableExternalControls: true,
    documentToolbarEnabled: true,
    showSwitchboardLink: true,
  },
};

export default module;
