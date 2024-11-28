import Editor from "./editor";
import { createDocumentStory } from "document-model-libs/utils";

import * as AtlasArticleModule from "../../document-models/atlas-article";

const { meta, CreateDocumentStory: AtlasArticle } = createDocumentStory(
  Editor,
  AtlasArticleModule.reducer,
  AtlasArticleModule.utils.createDocument(),
);
export { AtlasArticle };

export default { ...meta, title: "Atlas Article" };
