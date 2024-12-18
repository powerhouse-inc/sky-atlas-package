/**
 * This is a scaffold file meant for customization:
 * - modify it by implementing the reducer functions
 * - delete the file and run the code generator again to have it reset
 */

import { AtlasScopeScopeOperations } from "../../gen/scope/operations";

export const reducer: AtlasScopeScopeOperations = {
  updateScopeOperation(state, action, dispatch) {
    if ('masterStatus' in action.input) {
      state.masterStatus = action.input.masterStatus || []
    }
    if ('globalTags' in action.input) {
      state.globalTags = action.input.globalTags || []
    }
  },
  populateScopeOperation(state, action, dispatch) {
    if ('name' in action.input) {
      state.name = action.input.name || '';
    }
    if ('docNo' in action.input) {
      state.docNo = action.input.docNo || '';
    }
    if ('content' in action.input) {
      state.content = action.input.content || '';
    }
    if ('masterStatus' in action.input) {
      state.masterStatus = action.input.masterStatus || [];
    }
    if ('globalTags' in action.input) {
      state.globalTags = action.input.globalTags || [];
    }
    if ('originalContextData' in action.input) {
      state.originalContextData = action.input.originalContextData || [];
    }
    if ('provenance' in action.input) {
      state.provenance = action.input.provenance || '';
    }
    if ('notionId' in action.input) {
      state.notionId = action.input.notionId || '';
    }
  },
};
