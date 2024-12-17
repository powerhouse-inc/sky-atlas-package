/**
 * This is a scaffold file meant for customization:
 * - change it by adding new tests or modifying the existing ones
 */

import { generateMock } from "@powerhousedao/codegen";
import { utils as documentModelUtils } from "document-model/document";

import utils from "../../gen/utils";
import {
  z,
  UpdateMultiparentInput,
  PopulateMultiparentInput,
} from "../../gen/schema";
import { reducer } from "../../gen/reducer";
import * as creators from "../../gen/annotation/creators";
import { AtlasMultiParentDocument } from "../../gen/types";

describe("Annotation Operations", () => {
  let document: AtlasMultiParentDocument;

  beforeEach(() => {
    document = utils.createDocument();
  });

  it("should handle updateMultiparent operation", () => {
    // generate a random id
    // const id = documentModelUtils.hashKey();

    const input: UpdateMultiparentInput = generateMock(
      z.UpdateMultiparentInputSchema(),
    );

    const updatedDocument = reducer(
      document,
      creators.updateMultiparent(input),
    );

    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].type).toBe(
      "UPDATE_MULTIPARENT",
    );
    expect(updatedDocument.operations.global[0].input).toStrictEqual(input);
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
  it("should handle populateMultiparent operation", () => {
    // generate a random id
    // const id = documentModelUtils.hashKey();

    const input: PopulateMultiparentInput = generateMock(
      z.PopulateMultiparentInputSchema(),
    );

    const updatedDocument = reducer(
      document,
      creators.populateMultiparent(input),
    );

    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].type).toBe(
      "POPULATE_MULTIPARENT",
    );
    expect(updatedDocument.operations.global[0].input).toStrictEqual(input);
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
});
