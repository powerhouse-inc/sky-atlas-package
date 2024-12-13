/**
 * This is a scaffold file meant for customization.
 * Delete the file and run the code generator again to have it reset
 */

import { actions as BaseActions, DocumentModel } from "document-model/document";
import { actions as AtlasScenarioActions, AtlasScenario } from "./gen";
import { reducer } from "./gen/reducer";
import { documentModel } from "./gen/document-model";
import genUtils from "./gen/utils";
import * as customUtils from "./src/utils";
import {
  AtlasScenarioState,
  AtlasScenarioAction,
  AtlasScenarioLocalState,
} from "./gen/types";

const Document = AtlasScenario;
const utils = { ...genUtils, ...customUtils };
const actions = { ...BaseActions, ...AtlasScenarioActions };

export const module: DocumentModel<
  AtlasScenarioState,
  AtlasScenarioAction,
  AtlasScenarioLocalState
> = {
  Document,
  reducer,
  actions,
  utils,
  documentModel,
};

export { AtlasScenario, Document, reducer, actions, utils, documentModel };

export * from "./gen/types";
export * from "./src/utils";
