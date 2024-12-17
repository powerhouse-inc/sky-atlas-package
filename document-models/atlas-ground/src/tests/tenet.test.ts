/**
 * This is a scaffold file meant for customization:
 * - change it by adding new tests or modifying the existing ones
 */

import { generateMock } from "@powerhousedao/codegen";
import { utils as documentModelUtils } from "document-model/document";

import utils from "../../gen/utils";
import { z, UpdateGroundInput, PopulateGroundInput } from "../../gen/schema";
import { reducer } from "../../gen/reducer";
import * as creators from "../../gen/tenet/creators";
import { AtlasGroundDocument } from "../../gen/types";

describe("Tenet Operations", () => {
  let document: AtlasGroundDocument;

  beforeEach(() => {
    document = utils.createDocument();
  });

  it("should handle updateGround operation", () => {
    // generate a random id
    // const id = documentModelUtils.hashKey();

    const input: UpdateGroundInput = generateMock(z.UpdateGroundInputSchema());

    const updatedDocument = reducer(document, creators.updateGround(input));

    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].type).toBe("UPDATE_GROUND");
    expect(updatedDocument.operations.global[0].input).toStrictEqual(input);
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
  it("should handle populateGround operation", () => {
    // generate a random id
    // const id = documentModelUtils.hashKey();

    const input: PopulateGroundInput = generateMock(
      z.PopulateGroundInputSchema(),
    );

    const updatedDocument = reducer(document, creators.populateGround(input));

    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].type).toBe("POPULATE_GROUND");
    expect(updatedDocument.operations.global[0].input).toStrictEqual(input);
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
});
