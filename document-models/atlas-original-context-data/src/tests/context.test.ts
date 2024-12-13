/**
 * This is a scaffold file meant for customization:
 * - change it by adding new tests or modifying the existing ones
 */

import { generateMock } from "@powerhousedao/codegen";
import { utils as documentModelUtils } from "document-model/document";

import utils from "../../gen/utils";
import { z, UpdateContextInput } from "../../gen/schema";
import { reducer } from "../../gen/reducer";
import * as creators from "../../gen/context/creators";
import { AtlasOriginalContextDataDocument } from "../../gen/types";

describe("Context Operations", () => {
  let document: AtlasOriginalContextDataDocument;

  beforeEach(() => {
    document = utils.createDocument();
  });

  it("should handle updateContext operation", () => {
    // generate a random id
    // const id = documentModelUtils.hashKey();

    const input: UpdateContextInput = generateMock(
      z.UpdateContextInputSchema(),
    );

    const updatedDocument = reducer(document, creators.updateContext(input));

    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].type).toBe("UPDATE_CONTEXT");
    expect(updatedDocument.operations.global[0].input).toStrictEqual(input);
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
});
