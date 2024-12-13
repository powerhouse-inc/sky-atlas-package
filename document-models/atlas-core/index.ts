/**
 * This is a scaffold file meant for customization.
 * Delete the file and run the code generator again to have it reset
 */

import { actions as BaseActions, DocumentModel } from "document-model/document";
import { actions as AtlasCoreActions, AtlasCore } from "./gen";
import { reducer } from "./gen/reducer";
import { documentModel } from "./gen/document-model";
import genUtils from "./gen/utils";
import * as customUtils from "./src/utils";
import {
  AtlasCoreState,
  AtlasCoreAction,
  AtlasCoreLocalState,
} from "./gen/types";

const Document = AtlasCore;
const utils = { ...genUtils, ...customUtils };
const actions = { ...BaseActions, ...AtlasCoreActions };

export const module: DocumentModel<
  AtlasCoreState,
  AtlasCoreAction,
  AtlasCoreLocalState
> = {
  Document,
  reducer,
  actions,
  utils,
  documentModel,
};

export { AtlasCore, Document, reducer, actions, utils, documentModel };

export * from "./gen/types";
export * from "./src/utils";
