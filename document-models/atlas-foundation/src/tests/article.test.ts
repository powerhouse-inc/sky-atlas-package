/**
 * This is a scaffold file meant for customization:
 * - change it by adding new tests or modifying the existing ones
 */

import { generateMock } from "@powerhousedao/codegen";
import { utils as documentModelUtils } from "document-model/document";

import utils from "../../gen/utils";
import {
  z,
  UpdateFoundationInput,
  PopulateFoundationInput,
} from "../../gen/schema";
import { reducer } from "../../gen/reducer";
import * as creators from "../../gen/article/creators";
import { AtlasFoundationDocument } from "../../gen/types";

describe("Article Operations", () => {
  let document: AtlasFoundationDocument;

  beforeEach(() => {
    document = utils.createDocument();
  });

  it("should handle updateFoundation operation", () => {
    // generate a random id
    // const id = documentModelUtils.hashKey();

    const input: UpdateFoundationInput = {
      name: "test",
      atlasType: "ARTICLE",
      content: "test",
      masterStatus: "PLACEHOLDER",
      globalTags: [],
      references: [],
    };

    const updatedDocument = reducer(document, creators.updateFoundation(input));

    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].type).toBe("UPDATE_FOUNDATION");
    expect(updatedDocument.operations.global[0].input).toStrictEqual(input);
    expect(updatedDocument.operations.global[0].index).toEqual(0);
    expect(updatedDocument.state.global.name).toEqual("test");
  });
  it("should handle populateFoundation operation", () => {
    // generate a random id
    // const id = documentModelUtils.hashKey();

    const input: PopulateFoundationInput = {
      name: "test",
      docNo: "test",
      parent: "test",
      atlasType: "ARTICLE",
      content: "test",
      masterStatus: "PLACEHOLDER",
      globalTags: [],
      references: [],
    };

    const updatedDocument = reducer(
      document,
      creators.populateFoundation(input),
    );

    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].type).toBe(
      "POPULATE_FOUNDATION",
    );
    expect(updatedDocument.operations.global[0].input).toStrictEqual(input);
    expect(updatedDocument.operations.global[0].index).toEqual(0);
    expect(updatedDocument.state.global.name).toEqual("test");
    expect(updatedDocument.state.global.docNo).toEqual("test");
    expect(updatedDocument.state.global.parent).toEqual("test");
    expect(updatedDocument.state.global.atlasType).toEqual("ARTICLE");
    expect(updatedDocument.state.global.content).toEqual("test");
    expect(updatedDocument.state.global.masterStatus).toEqual("PLACEHOLDER");
    expect(updatedDocument.state.global.globalTags).toEqual([]);
    expect(updatedDocument.state.global.references).toEqual([]);
  });
});
