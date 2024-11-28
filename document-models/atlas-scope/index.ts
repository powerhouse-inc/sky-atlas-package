/**
 * This is a scaffold file meant for customization.
 * Delete the file and run the code generator again to have it reset
 */

import { actions as BaseActions, DocumentModel } from "document-model/document";
import { actions as AtlasScopeActions, AtlasScope } from "./gen";
import { reducer } from "./gen/reducer";
import { documentModel } from "./gen/document-model";
import genUtils from "./gen/utils";
import * as customUtils from "./src/utils";
import {
  AtlasScopeState,
  AtlasScopeAction,
  AtlasScopeLocalState,
} from "./gen/types";

const Document = AtlasScope;
const utils = { ...genUtils, ...customUtils };
const actions = { ...BaseActions, ...AtlasScopeActions };

export const module: DocumentModel<
  AtlasScopeState,
  AtlasScopeAction,
  AtlasScopeLocalState
> = {
  Document,
  reducer,
  actions,
  utils,
  documentModel,
};

export { AtlasScope, Document, reducer, actions, utils, documentModel };

export * from "./gen/types";
export * from "./src/utils";
