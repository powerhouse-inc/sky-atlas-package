/**
 * This is a scaffold file meant for customization.
 * Delete the file and run the code generator again to have it reset
 */

import { actions as BaseActions, DocumentModel } from "document-model/document";
import { actions as AtlasFoundationActions, AtlasFoundation } from "./gen";
import { reducer } from "./gen/reducer";
import { documentModel } from "./gen/document-model";
import genUtils from "./gen/utils";
import * as customUtils from "./src/utils";
import {
  AtlasFoundationState,
  AtlasFoundationAction,
  AtlasFoundationLocalState,
} from "./gen/types";

const Document = AtlasFoundation;
const utils = { ...genUtils, ...customUtils };
const actions = { ...BaseActions, ...AtlasFoundationActions };

export const module: DocumentModel<
  AtlasFoundationState,
  AtlasFoundationAction,
  AtlasFoundationLocalState
> = {
  Document,
  reducer,
  actions,
  utils,
  documentModel,
};

export { AtlasFoundation, Document, reducer, actions, utils, documentModel };

export * from "./gen/types";
export * from "./src/utils";
