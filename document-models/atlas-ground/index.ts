/**
 * This is a scaffold file meant for customization.
 * Delete the file and run the code generator again to have it reset
 */

import { actions as BaseActions, DocumentModel } from "document-model/document";
import { actions as AtlasGroundActions, AtlasGround } from "./gen";
import { reducer } from "./gen/reducer";
import { documentModel } from "./gen/document-model";
import genUtils from "./gen/utils";
import * as customUtils from "./src/utils";
import {
  AtlasGroundState,
  AtlasGroundAction,
  AtlasGroundLocalState,
} from "./gen/types";

const Document = AtlasGround;
const utils = { ...genUtils, ...customUtils };
const actions = { ...BaseActions, ...AtlasGroundActions };

export const module: DocumentModel<
  AtlasGroundState,
  AtlasGroundAction,
  AtlasGroundLocalState
> = {
  Document,
  reducer,
  actions,
  utils,
  documentModel,
};

export { AtlasGround, Document, reducer, actions, utils, documentModel };

export * from "./gen/types";
export * from "./src/utils";
