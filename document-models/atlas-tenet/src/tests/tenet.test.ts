/**
 * This is a scaffold file meant for customization:
 * - change it by adding new tests or modifying the existing ones
 */

import { generateMock } from "@powerhousedao/codegen";
import { utils as documentModelUtils } from "document-model/document";

import utils from "../../gen/utils";
import { z, UpdateTenetInput } from "../../gen/schema";
import { reducer } from "../../gen/reducer";
import * as creators from "../../gen/tenet/creators";
import { AtlasTenetDocument } from "../../gen/types";

describe("Tenet Operations", () => {
  let document: AtlasTenetDocument;

  beforeEach(() => {
    document = utils.createDocument();
  });

  it("should handle updateTenet operation", () => {
    // generate a random id
    // const id = documentModelUtils.hashKey();

    const input: UpdateTenetInput = generateMock(z.UpdateTenetInputSchema());

    const updatedDocument = reducer(document, creators.updateTenet(input));

    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].type).toBe("UPDATE_TENET");
    expect(updatedDocument.operations.global[0].input).toStrictEqual(input);
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
});
