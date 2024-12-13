/**
 * This is a scaffold file meant for customization:
 * - change it by adding new tests or modifying the existing ones
 */

import { generateMock } from "@powerhousedao/codegen";
import { utils as documentModelUtils } from "document-model/document";

import utils from "../../gen/utils";
import { z, UpdateCoreInput } from "../../gen/schema";
import { reducer } from "../../gen/reducer";
import * as creators from "../../gen/core/creators";
import { AtlasCoreDocument } from "../../gen/types";

describe("Core Operations", () => {
  let document: AtlasCoreDocument;

  beforeEach(() => {
    document = utils.createDocument();
  });

  it("should handle updateCore operation", () => {
    // generate a random id
    // const id = documentModelUtils.hashKey();

    const input: UpdateCoreInput = generateMock(z.UpdateCoreInputSchema());

    const updatedDocument = reducer(document, creators.updateCore(input));

    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].type).toBe("UPDATE_CORE");
    expect(updatedDocument.operations.global[0].input).toStrictEqual(input);
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
});
