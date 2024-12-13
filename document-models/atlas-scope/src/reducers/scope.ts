/**
 * This is a scaffold file meant for customization:
 * - modify it by implementing the reducer functions
 * - delete the file and run the code generator again to have it reset
 */

import { AtlasScopeScopeOperations } from "../../gen/scope/operations";

export const reducer: AtlasScopeScopeOperations = {
  updateScopeOperation(state, action, dispatch) {
    const masterStatus = [...action.input.masterStatus]
    const globalTags = [...action.input.globalTags]
    const originalContextData = [...action.input.originalContextData]

    state.name = action.input.name || ''
    state.docNo = action.input.docNo || ''
    state.content = action.input.content || ''
    state.masterStatus = masterStatus
    state.globalTags = globalTags
    state.originalContextData = originalContextData
    state.provenance = action.input.provenance || ''
    state.notionId = action.input.notionId || ''

  }
};
