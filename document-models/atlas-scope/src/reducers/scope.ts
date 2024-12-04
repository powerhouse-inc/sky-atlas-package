/**
 * This is a scaffold file meant for customization:
 * - modify it by implementing the reducer functions
 * - delete the file and run the code generator again to have it reset
 */

import { AtlasScopeScopeOperations } from "../../gen/scope/operations";

export const reducer: AtlasScopeScopeOperations = {
  addScopeOperation(state, action, dispatch) {
    state.scopes.push({
      name: action.input.name,
      docNo: action.input.docNo,
      content: action.input.content,
      masterStatus: action.input.masterStatus,
      globalTags: action.input.globalTags,
      originalContextData: action.input.originalContextData,
      provenance: action.input.provenance,
      notionId: action.input.notionId,
    });
  },
  updateScopeOperation(state, action, dispatch) {
    const scope = state.scopes.find(scope => scope.docNo === action.input.docNo);
    if (!scope) {
      throw new Error(`Scope with docNo ${action.input.docNo} not found`);
    }
    if (action.input.name) {
      scope.name = action.input.name;
    }
    if (action.input.content) {
      scope.content = action.input.content;
    }
    if (action.input.masterStatus) {
      scope.masterStatus = action.input.masterStatus;
    }
    if (action.input.globalTags) {
      scope.globalTags = action.input.globalTags;
    }
    if (action.input.originalContextData) {
      scope.originalContextData = action.input.originalContextData;
    }
    if (action.input.provenance) {
      scope.provenance = action.input.provenance;
    }
    if (action.input.notionId) {
      scope.notionId = action.input.notionId;
    }
  },
  deleteScopeOperation(state, action, dispatch) {
    const scopeIndex = state.scopes.findIndex(scope => scope.docNo === action.input.docNo);
    if (scopeIndex === -1) {
      throw new Error(`Scope with docNo ${action.input.docNo} not found`);
    }
    state.scopes.splice(scopeIndex, 1);
  },
};
