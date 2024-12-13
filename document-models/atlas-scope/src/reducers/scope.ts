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

    state = {
      name: action.input.name || '',
      docNo: action.input.docNo || '',
      content: action.input.content || '',
      masterStatus: masterStatus,
      globalTags: globalTags,
      originalContextData: originalContextData,
      provenance: action.input.provenance || '',
      notionId: action.input.notionId || '',
    };
  },
};
