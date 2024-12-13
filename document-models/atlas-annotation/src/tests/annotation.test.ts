/**
 * This is a scaffold file meant for customization:
 * - change it by adding new tests or modifying the existing ones
 */

import { generateMock } from "@powerhousedao/codegen";
import { utils as documentModelUtils } from "document-model/document";

import utils from "../../gen/utils";
import { z, UpdateAnnotationInput } from "../../gen/schema";
import { reducer } from "../../gen/reducer";
import * as creators from "../../gen/annotation/creators";
import { AtlasAnnotationDocument } from "../../gen/types";

describe("Annotation Operations", () => {
  let document: AtlasAnnotationDocument;

  beforeEach(() => {
    document = utils.createDocument();
  });

  it("should handle updateAnnotation operation", () => {
    // generate a random id
    // const id = documentModelUtils.hashKey();

    const input: UpdateAnnotationInput = generateMock(
      z.UpdateAnnotationInputSchema(),
    );

    const updatedDocument = reducer(document, creators.updateAnnotation(input));

    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].type).toBe("UPDATE_ANNOTATION");
    expect(updatedDocument.operations.global[0].input).toStrictEqual(input);
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
});
