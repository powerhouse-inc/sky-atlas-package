/**
 * This is a scaffold file meant for customization:
 * - change it by adding new tests or modifying the existing ones
 */

import { generateMock } from "@powerhousedao/codegen";
import { utils as documentModelUtils } from "document-model/document";

import utils from "../../gen/utils";
import { z, UpdateSectionInput } from "../../gen/schema";
import { reducer } from "../../gen/reducer";
import * as creators from "../../gen/section/creators";
import { AtlasSectionDocument } from "../../gen/types";

describe("Section Operations", () => {
  let document: AtlasSectionDocument;

  beforeEach(() => {
    document = utils.createDocument();
  });

  it("should handle updateSection operation", () => {
    // generate a random id
    // const id = documentModelUtils.hashKey();

    const input: UpdateSectionInput = generateMock(
      z.UpdateSectionInputSchema(),
    );

    const updatedDocument = reducer(document, creators.updateSection(input));

    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].type).toBe("UPDATE_SECTION");
    expect(updatedDocument.operations.global[0].input).toStrictEqual(input);
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
});
