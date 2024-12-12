/**
 * This is a scaffold file meant for customization.
 * Delete the file and run the code generator again to have it reset
 */

import { actions as BaseActions, DocumentModel } from "document-model/document";
import { actions as ControllerActions, Controller } from "./gen";
import { reducer } from "./gen/reducer";
import { documentModel } from "./gen/document-model";
import genUtils from "./gen/utils";
import * as customUtils from "./src/utils";
import {
  ControllerState,
  ControllerAction,
  ControllerLocalState,
} from "./gen/types";

const Document = Controller;
const utils = { ...genUtils, ...customUtils };
const actions = { ...BaseActions, ...ControllerActions };

export const module: DocumentModel<
  ControllerState,
  ControllerAction,
  ControllerLocalState
> = {
  Document,
  reducer,
  actions,
  utils,
  documentModel,
};

export { Controller, Document, reducer, actions, utils, documentModel };

export * from "./gen/types";
export * from "./src/utils";