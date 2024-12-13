/**
 * This is a scaffold file meant for customization:
 * - change it by adding new tests or modifying the existing ones
 */

import { generateMock } from "@powerhousedao/codegen";
import { utils as documentModelUtils } from "document-model/document";

import utils from "../../gen/utils";
import { z, UpdateScenarioInput } from "../../gen/schema";
import { reducer } from "../../gen/reducer";
import * as creators from "../../gen/scenario/creators";
import { AtlasScenarioDocument } from "../../gen/types";

describe("Scenario Operations", () => {
  let document: AtlasScenarioDocument;

  beforeEach(() => {
    document = utils.createDocument();
  });

  it("should handle updateScenario operation", () => {
    // generate a random id
    // const id = documentModelUtils.hashKey();

    const input: UpdateScenarioInput = generateMock(
      z.UpdateScenarioInputSchema(),
    );

    const updatedDocument = reducer(document, creators.updateScenario(input));

    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].type).toBe("UPDATE_SCENARIO");
    expect(updatedDocument.operations.global[0].input).toStrictEqual(input);
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
});
