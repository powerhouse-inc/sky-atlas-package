import { ExtendedEditor, EditorContextProps } from "document-model-libs";
import Editor from "./editor";
import {
  AtlasArticleState,
  AtlasArticleAction,
  AtlasArticleLocalState,
} from "../../document-models/atlas-article";

export const module: ExtendedEditor<
  AtlasArticleState,
  AtlasArticleAction,
  AtlasArticleLocalState,
  EditorContextProps
> = {
  Component: Editor,
  documentTypes: ["powerhouse/atlasarticle"],
  config: {
    id: "editor-id",
    disableExternalControls: true,
    documentToolbarEnabled: true,
    showSwitchboardLink: true,
  },
};

export default module;
