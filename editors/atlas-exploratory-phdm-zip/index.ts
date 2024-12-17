import { ExtendedEditor, EditorContextProps } from "document-model-libs";
import Editor from "./editor";
import {
  AtlasExploratoryState,
  AtlasExploratoryAction,
  AtlasExploratoryLocalState,
} from "../../document-models/atlas-exploratory";

export const module: ExtendedEditor<
  AtlasExploratoryState,
  AtlasExploratoryAction,
  AtlasExploratoryLocalState,
  EditorContextProps
> = {
  Component: Editor,
  documentTypes: ["sky/atlas-exploratory"],
  config: {
    id: "editor-id",
    disableExternalControls: true,
    documentToolbarEnabled: true,
    showSwitchboardLink: true,
  },
};

export default module;
