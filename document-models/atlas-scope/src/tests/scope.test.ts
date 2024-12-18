/**
 * This is a scaffold file meant for customization:
 * - change it by adding new tests or modifying the existing ones
 */

import { generateMock } from "@powerhousedao/codegen";
import { utils as documentModelUtils } from "document-model/document";

import utils from "../../gen/utils";
import { z, UpdateScopeInput, PopulateScopeInput } from "../../gen/schema";
import { reducer } from "../../gen/reducer";
import * as creators from "../../gen/scope/creators";
import { AtlasScopeDocument } from "../../gen/types";

describe("Scope Operations", () => {
  let document: AtlasScopeDocument;

  beforeEach(() => {
    document = utils.createDocument();
  });

  it("should handle updateScope operation", () => {
    // generate a random id
    // const id = documentModelUtils.hashKey();

    const input: UpdateScopeInput = {
      masterStatus: ['PLACEHOLDER'],
      globalTags: ['RECURSIVE_IMPROVEMENT'],
    }

    const updatedDocument = reducer(document, creators.updateScope(input));

    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].type).toBe("UPDATE_SCOPE");
    expect(updatedDocument.operations.global[0].input).toStrictEqual(input);
    expect(updatedDocument.operations.global[0].index).toEqual(0);
    expect(updatedDocument.state.global.masterStatus).toEqual(['PLACEHOLDER']);
    expect(updatedDocument.state.global.globalTags).toEqual(['RECURSIVE_IMPROVEMENT']);
  });

  it("should handle updateScope operation with one input", () => {
    // generate a random id
    // const id = documentModelUtils.hashKey();

    const input: UpdateScopeInput = {
      masterStatus: ['PLACEHOLDER'],
    }

    const updatedDocument = reducer(document, creators.updateScope(input));

    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].type).toBe("UPDATE_SCOPE");
    expect(updatedDocument.operations.global[0].input).toStrictEqual(input);
    expect(updatedDocument.operations.global[0].index).toEqual(0);
    expect(updatedDocument.state.global.masterStatus).toEqual(['PLACEHOLDER']);
  });

  it("should handle populateScope operation", () => {
    // generate a random id
    // const id = documentModelUtils.hashKey();

    const input: PopulateScopeInput = {
      name: 'Test Scope',
      docNo: 'A.1',
      content: 'This is a test scope',
      masterStatus: ['PLACEHOLDER'],
      globalTags: ['RECURSIVE_IMPROVEMENT'],
      originalContextData: ['PHID'],
      provenance: 'https://p0hub.com',
      notionId: '1234567890',
    }

    const updatedDocument = reducer(document, creators.populateScope(input));

    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].type).toBe("POPULATE_SCOPE");
    expect(updatedDocument.operations.global[0].input).toStrictEqual(input);
    expect(updatedDocument.operations.global[0].index).toEqual(0);
    expect(updatedDocument.state.global.name).toEqual('Test Scope');
    expect(updatedDocument.state.global.docNo).toEqual('A.1');
    expect(updatedDocument.state.global.content).toEqual('This is a test scope');
    expect(updatedDocument.state.global.masterStatus).toEqual(['PLACEHOLDER']);
    expect(updatedDocument.state.global.globalTags).toEqual(['RECURSIVE_IMPROVEMENT']);
    expect(updatedDocument.state.global.originalContextData).toEqual(['PHID']);
    expect(updatedDocument.state.global.provenance).toEqual('https://p0hub.com');
    expect(updatedDocument.state.global.notionId).toEqual('1234567890');
  });

  it("should handle populateScope operation with one input", () => {
    // generate a random id
    // const id = documentModelUtils.hashKey();

    const input: PopulateScopeInput = {
      name: 'Test Scope',
    }

    const updatedDocument = reducer(document, creators.populateScope(input));

    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].type).toBe("POPULATE_SCOPE");
    expect(updatedDocument.operations.global[0].input).toStrictEqual(input);
    expect(updatedDocument.operations.global[0].index).toEqual(0);
    expect(updatedDocument.state.global.name).toEqual('Test Scope');
  });
});
