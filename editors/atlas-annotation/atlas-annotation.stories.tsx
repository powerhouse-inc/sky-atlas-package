import Editor from "./editor";
import { createDocumentStory } from "document-model-libs/utils";

import * as AtlasAnnotationModule from "../../document-models/atlas-annotation";

const { meta, CreateDocumentStory: AtlasAnnotation } = createDocumentStory(
  Editor,
  AtlasAnnotationModule.reducer,
  AtlasAnnotationModule.utils.createDocument(),
);
export { AtlasAnnotation };

export default { ...meta, title: "Atlas Annotation" };
