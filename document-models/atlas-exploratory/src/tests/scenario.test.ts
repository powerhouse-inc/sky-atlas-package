/**
 * This is a scaffold file meant for customization:
 * - change it by adding new tests or modifying the existing ones
 */

import { generateMock } from "@powerhousedao/codegen";
import { utils as documentModelUtils } from "document-model/document";

import utils from "../../gen/utils";
import {
  z,
  UpdateExploratoryInput,
  PopulateExploratoryInput,
} from "../../gen/schema";
import { reducer } from "../../gen/reducer";
import * as creators from "../../gen/scenario/creators";
import { AtlasExploratoryDocument } from "../../gen/types";

describe("Scenario Operations", () => {
  let document: AtlasExploratoryDocument;

  beforeEach(() => {
    document = utils.createDocument();
  });

  it("should handle updateExploratory operation", () => {
    // generate a random id
    // const id = documentModelUtils.hashKey();

    const input: UpdateExploratoryInput = generateMock(
      z.UpdateExploratoryInputSchema(),
    );

    const updatedDocument = reducer(
      document,
      creators.updateExploratory(input),
    );

    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].type).toBe(
      "UPDATE_EXPLORATORY",
    );
    expect(updatedDocument.operations.global[0].input).toStrictEqual(input);
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
  it("should handle populateExploratory operation", () => {
    // generate a random id
    // const id = documentModelUtils.hashKey();

    const input: PopulateExploratoryInput = generateMock(
      z.PopulateExploratoryInputSchema(),
    );

    const updatedDocument = reducer(
      document,
      creators.populateExploratory(input),
    );

    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].type).toBe(
      "POPULATE_EXPLORATORY",
    );
    expect(updatedDocument.operations.global[0].input).toStrictEqual(input);
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
});
