/**
 * This is a scaffold file meant for customization:
 * - change it by adding new tests or modifying the existing ones
 */

import { generateMock } from "@powerhousedao/codegen";
import { utils as documentModelUtils } from "document-model/document";

import utils from "../../gen/utils";
import { z, UpdateActiveDataInput } from "../../gen/schema";
import { reducer } from "../../gen/reducer";
import * as creators from "../../gen/active-data/creators";
import { AtlasActiveDataDocument } from "../../gen/types";

describe("ActiveData Operations", () => {
  let document: AtlasActiveDataDocument;

  beforeEach(() => {
    document = utils.createDocument();
  });

  it("should handle updateActiveData operation", () => {
    // generate a random id
    // const id = documentModelUtils.hashKey();

    const input: UpdateActiveDataInput = generateMock(
      z.UpdateActiveDataInputSchema(),
    );

    const updatedDocument = reducer(document, creators.updateActiveData(input));

    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].type).toBe(
      "UPDATE_ACTIVE_DATA",
    );
    expect(updatedDocument.operations.global[0].input).toStrictEqual(input);
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
});
