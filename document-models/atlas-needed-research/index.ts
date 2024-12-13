/**
 * This is a scaffold file meant for customization.
 * Delete the file and run the code generator again to have it reset
 */

import { actions as BaseActions, DocumentModel } from "document-model/document";
import {
  actions as AtlasNeededResearchActions,
  AtlasNeededResearch,
} from "./gen";
import { reducer } from "./gen/reducer";
import { documentModel } from "./gen/document-model";
import genUtils from "./gen/utils";
import * as customUtils from "./src/utils";
import {
  AtlasNeededResearchState,
  AtlasNeededResearchAction,
  AtlasNeededResearchLocalState,
} from "./gen/types";

const Document = AtlasNeededResearch;
const utils = { ...genUtils, ...customUtils };
const actions = { ...BaseActions, ...AtlasNeededResearchActions };

export const module: DocumentModel<
  AtlasNeededResearchState,
  AtlasNeededResearchAction,
  AtlasNeededResearchLocalState
> = {
  Document,
  reducer,
  actions,
  utils,
  documentModel,
};

export {
  AtlasNeededResearch,
  Document,
  reducer,
  actions,
  utils,
  documentModel,
};

export * from "./gen/types";
export * from "./src/utils";
