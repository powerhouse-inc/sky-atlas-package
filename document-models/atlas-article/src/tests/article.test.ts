/**
 * This is a scaffold file meant for customization:
 * - change it by adding new tests or modifying the existing ones
 */

import { generateMock } from "@powerhousedao/codegen";
import { utils as documentModelUtils } from "document-model/document";

import utils from "../../gen/utils";
import { z, UpdateArticleInput } from "../../gen/schema";
import { reducer } from "../../gen/reducer";
import * as creators from "../../gen/article/creators";
import { AtlasArticleDocument } from "../../gen/types";

describe("Article Operations", () => {
  let document: AtlasArticleDocument;

  beforeEach(() => {
    document = utils.createDocument();
  });

  it("should handle updateArticle operation", () => {
    // generate a random id
    // const id = documentModelUtils.hashKey();

    const input: UpdateArticleInput = generateMock(
      z.UpdateArticleInputSchema(),
    );

    const updatedDocument = reducer(document, creators.updateArticle(input));

    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].type).toBe("UPDATE_ARTICLE");
    expect(updatedDocument.operations.global[0].input).toStrictEqual(input);
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
});
