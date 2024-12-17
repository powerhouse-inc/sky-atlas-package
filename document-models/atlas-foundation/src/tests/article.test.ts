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

    const input: UpdateFoundationInput = generateMock(
      z.UpdateFoundationInputSchema(),
    );

    const updatedDocument = reducer(document, creators.updateFoundation(input));

    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].type).toBe("UPDATE_FOUNDATION");
    expect(updatedDocument.operations.global[0].input).toStrictEqual(input);
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
  it("should handle populateFoundation operation", () => {
    // generate a random id
    // const id = documentModelUtils.hashKey();

    const input: PopulateFoundationInput = generateMock(
      z.PopulateFoundationInputSchema(),
    );

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
  });
});
