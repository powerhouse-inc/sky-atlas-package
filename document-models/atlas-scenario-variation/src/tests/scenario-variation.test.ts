/**
 * This is a scaffold file meant for customization:
 * - change it by adding new tests or modifying the existing ones
 */

import { generateMock } from "@powerhousedao/codegen";
import { utils as documentModelUtils } from "document-model/document";

import utils from "../../gen/utils";
import { z, UpdateScenarioVariationInput } from "../../gen/schema";
import { reducer } from "../../gen/reducer";
import * as creators from "../../gen/scenario-variation/creators";
import { AtlasScenarioVariationDocument } from "../../gen/types";

describe("ScenarioVariation Operations", () => {
  let document: AtlasScenarioVariationDocument;

  beforeEach(() => {
    document = utils.createDocument();
  });

  it("should handle updateScenarioVariation operation", () => {
    // generate a random id
    // const id = documentModelUtils.hashKey();

    const input: UpdateScenarioVariationInput = generateMock(
      z.UpdateScenarioVariationInputSchema(),
    );

    const updatedDocument = reducer(
      document,
      creators.updateScenarioVariation(input),
    );

    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].type).toBe(
      "UPDATE_SCENARIO_VARIATION",
    );
    expect(updatedDocument.operations.global[0].input).toStrictEqual(input);
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
});
