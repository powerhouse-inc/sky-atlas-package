import { ExtendedEditor, EditorContextProps } from "document-model-libs";
import Editor from "./editor";
import {
  AtlasNeededResearchState,
  AtlasNeededResearchAction,
  AtlasNeededResearchLocalState,
} from "../../document-models/atlas-needed-research";

export const module: ExtendedEditor<
  AtlasNeededResearchState,
  AtlasNeededResearchAction,
  AtlasNeededResearchLocalState,
  EditorContextProps
> = {
  Component: Editor,
  documentTypes: ["sky/atlas-neededresearch"],
  config: {
    id: "editor-id",
    disableExternalControls: true,
    documentToolbarEnabled: true,
    showSwitchboardLink: true,
  },
};

export default module;
