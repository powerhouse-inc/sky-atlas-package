/**
 * This is a scaffold file meant for customization.
 * Delete the file and run the code generator again to have it reset
 */

import { actions as BaseActions, DocumentModel } from "document-model/document";
import {
  actions as AtlasOriginalContextDataActions,
  AtlasOriginalContextData,
} from "./gen";
import { reducer } from "./gen/reducer";
import { documentModel } from "./gen/document-model";
import genUtils from "./gen/utils";
import * as customUtils from "./src/utils";
import {
  AtlasOriginalContextDataState,
  AtlasOriginalContextDataAction,
  AtlasOriginalContextDataLocalState,
} from "./gen/types";

const Document = AtlasOriginalContextData;
const utils = { ...genUtils, ...customUtils };
const actions = { ...BaseActions, ...AtlasOriginalContextDataActions };

export const module: DocumentModel<
  AtlasOriginalContextDataState,
  AtlasOriginalContextDataAction,
  AtlasOriginalContextDataLocalState
> = {
  Document,
  reducer,
  actions,
  utils,
  documentModel,
};

export {
  AtlasOriginalContextData,
  Document,
  reducer,
  actions,
  utils,
  documentModel,
};

export * from "./gen/types";
export * from "./src/utils";
