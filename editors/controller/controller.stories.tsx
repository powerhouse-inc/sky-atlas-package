import Editor from "./editor";
import { createDocumentStory } from "document-model-libs/utils";

import * as ControllerModule from "../../document-models/controller";

const { meta, CreateDocumentStory: Controller } = createDocumentStory(
  Editor,
  ControllerModule.reducer,
  ControllerModule.utils.createDocument(),
);
export { Controller };

export default { ...meta, title: "Controller" };
