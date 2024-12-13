/**
 * This is a scaffold file meant for customization:
 * - change it by adding new tests or modifying the existing ones
 */

import { generateMock } from "@powerhousedao/codegen";
import { utils as documentModelUtils } from "document-model/document";

import utils from "../../gen/utils";
import { z, UpdateNeededResearchInput } from "../../gen/schema";
import { reducer } from "../../gen/reducer";
import * as creators from "../../gen/reserarch/creators";
import { AtlasNeededResearchDocument } from "../../gen/types";

describe("Reserarch Operations", () => {
  let document: AtlasNeededResearchDocument;

  beforeEach(() => {
    document = utils.createDocument();
  });

  it("should handle updateNeededResearch operation", () => {
    // generate a random id
    // const id = documentModelUtils.hashKey();

    const input: UpdateNeededResearchInput = generateMock(
      z.UpdateNeededResearchInputSchema(),
    );

    const updatedDocument = reducer(
      document,
      creators.updateNeededResearch(input),
    );

    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].type).toBe(
      "UPDATE_NEEDED_RESEARCH",
    );
    expect(updatedDocument.operations.global[0].input).toStrictEqual(input);
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
});
