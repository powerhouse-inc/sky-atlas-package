/**
 * This is a scaffold file meant for customization:
 * - change it by adding new tests or modifying the existing ones
 */

import { generateMock } from "@powerhousedao/codegen";
import { utils as documentModelUtils } from "document-model/document";

import utils from "../../gen/utils";
import { z, AddScopeInput, UpdateScopeInput, DeleteScopeInput } from "../../gen/schema";
import { reducer } from "../../gen/reducer";
import * as creators from "../../gen/scope/creators";
import { AtlasScopeDocument } from "../../gen/types";

describe("Scope Operations", () => {
  let document: AtlasScopeDocument;

  beforeEach(() => {
    document = utils.createDocument();
  });

  it("should handle addScope operation", () => {
    const input: AddScopeInput = generateMock(z.AddScopeInputSchema());

    const updatedDocument = reducer(document, creators.addScope(input));

    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].type).toBe("ADD_SCOPE");
    expect(updatedDocument.operations.global[0].input).toStrictEqual(input);
    expect(updatedDocument.operations.global[0].index).toEqual(0);
    expect(updatedDocument.state.global.scopes).toHaveLength(1);
  });

  it("should handle updateScope operation", () => {
    const addInput: AddScopeInput = generateMock(z.AddScopeInputSchema());
    const updateInput: UpdateScopeInput = generateMock(z.UpdateScopeInputSchema());

    const createdDocument = reducer(document, creators.addScope(addInput));
    const updatedDocument = reducer(createdDocument, creators.updateScope(updateInput));

    expect(updatedDocument.operations.global).toHaveLength(2);
    expect(updatedDocument.operations.global[1].type).toBe("UPDATE_SCOPE");
    expect(updatedDocument.operations.global[1].input).toStrictEqual(updateInput);
    expect(updatedDocument.operations.global[1].index).toEqual(1);

    const updatedScope = updatedDocument.state.global.scopes.find(scope => scope.docNo === updateInput.docNo);
    expect(updatedScope).toBeDefined();

    if (updateInput.name) {
      expect(updatedScope.name).toBe(updateInput.name);
    }
    if (updateInput.content) {
      expect(updatedScope.content).toBe(updateInput.content);
    }
    if (updateInput.masterStatus) {
      expect(updatedScope.masterStatus).toStrictEqual(updateInput.masterStatus);
    }
    if (updateInput.globalTags) {
      expect(updatedScope.globalTags).toStrictEqual(updateInput.globalTags);
    }
    if (updateInput.originalContextData) {
      expect(updatedScope.originalContextData).toStrictEqual(updateInput.originalContextData);
    }
    if (updateInput.provenance) {
      expect(updatedScope.provenance).toBe(updateInput.provenance);
    }
    if (updateInput.notionId) {
      expect(updatedScope.notionId).toBe(updateInput.notionId);
    }
  });

  it("should handle deleteScope operation", () => {
    const addInput: AddScopeInput = generateMock(z.AddScopeInputSchema());
    const deleteInput: DeleteScopeInput = { docNo: addInput.docNo };

    const createdDocument = reducer(document, creators.addScope(addInput));
    const updatedDocument = reducer(createdDocument, creators.deleteScope(deleteInput));

    expect(updatedDocument.operations.global).toHaveLength(2);
    expect(updatedDocument.operations.global[1].type).toBe("DELETE_SCOPE");
    expect(updatedDocument.operations.global[1].input).toStrictEqual(deleteInput);
    expect(updatedDocument.operations.global[1].index).toEqual(1);
    expect(updatedDocument.state.global.scopes).toHaveLength(0);
  });
});
