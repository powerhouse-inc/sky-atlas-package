/**
 * This is a scaffold file meant for customization:
 * - modify it by implementing the reducer functions
 * - delete the file and run the code generator again to have it reset
 */

import { AtlasFoundationArticleOperations } from "../../gen/article/operations";

export const reducer: AtlasFoundationArticleOperations = {
  updateFoundationOperation(state, action, dispatch) {
    if('name' in action.input) {
      state.name = action.input.name || '';
    }
    if('atlasType' in action.input) {
      state.atlasType = action.input.atlasType || "ARTICLE";
    }
    if('content' in action.input) {
      state.content = action.input.content || '';
    }
    if('masterStatus' in action.input) {
      state.masterStatus = action.input.masterStatus || "PLACEHOLDER";
    }
    if('globalTags' in action.input) {
      state.globalTags = action.input.globalTags || [];
    }
    if('references' in action.input) {
      state.references = action.input.references || [];
    }
  },
  populateFoundationOperation(state, action, dispatch) {
    if( "name" in action.input) {
      state.name = action.input.name || "";
    }
    if( "docNo" in action.input) {
      state.docNo = action.input.docNo || "";
    } 
    if( "parent" in action.input) {
      state.parent = action.input.parent || "";
    } 
    if( "atlasType" in action.input) {
      state.atlasType = action.input.atlasType || "ARTICLE";
    }
    if( "content" in action.input) {
      state.content = action.input.content || "";
    } 
    if( "masterStatus" in action.input) {
      state.masterStatus = action.input.masterStatus || "PLACEHOLDER";
    }
    if( "globalTags" in action.input) {
      state.globalTags = action.input.globalTags || [];
    } 
    if( "references" in action.input) {
      state.references = action.input.references || [];
    } 
    if( "originalContextData" in action.input) {
      state.originalContextData = action.input.originalContextData || [];
    }  
    if( "provenance" in action.input) {
      state.provenance = action.input.provenance || "";
    }  
    if( "notionId" in action.input) {
      state.notionId = action.input.notionId || "";
    }  
  },
};
