/**
 * This is a scaffold file meant for customization:
 * - change it by adding new tests or modifying the existing ones
 */

import { generateMock } from "@powerhousedao/codegen";
import { utils as documentModelUtils } from "document-model/document";

import utils from "../../gen/utils";
import { z, UpdateControllerInput } from "../../gen/schema";
import { reducer } from "../../gen/reducer";
import * as creators from "../../gen/controller/creators";
import { ControllerDocument } from "../../gen/types";

describe("Controller Operations", () => {
  let document: ControllerDocument;

  beforeEach(() => {
    document = utils.createDocument();
  });

  it("should handle updateController operation", () => {
    // generate a random id
    // const id = documentModelUtils.hashKey();

    const input: UpdateControllerInput = generateMock(
      z.UpdateControllerInputSchema(),
    );

    const updatedDocument = reducer(document, creators.updateController(input));

    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].type).toBe("UPDATE_CONTROLLER");
    expect(updatedDocument.operations.global[0].input).toStrictEqual(input);
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
});
