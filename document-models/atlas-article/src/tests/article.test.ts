/**
 * This is a scaffold file meant for customization:
 * - change it by adding new tests or modifying the existing ones
 */

import { generateMock } from "@powerhousedao/codegen";
import { utils as documentModelUtils } from "document-model/document";

import utils from "../../gen/utils";
import {
  z,
  CreateArticleInput,
  UpdateArticleInput,
  DeleteArticleInput,
  AddSectionToArticleInput,
} from "../../gen/schema";
import { reducer } from "../../gen/reducer";
import * as creators from "../../gen/article/creators";
import { AtlasArticleDocument } from "../../gen/types";

describe("Article Operations", () => {
  let document: AtlasArticleDocument;

  beforeEach(() => {
    document = utils.createDocument();
  });

  it("should handle createArticle operation", () => {
    // generate a random id
    // const id = documentModelUtils.hashKey();

    const input: CreateArticleInput = generateMock(
      z.CreateArticleInputSchema(),
    );

    const updatedDocument = reducer(document, creators.createArticle(input));

    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].type).toBe("CREATE_ARTICLE");
    expect(updatedDocument.operations.global[0].input).toStrictEqual(input);
    expect(updatedDocument.operations.global[0].index).toEqual(0);
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
  it("should handle deleteArticle operation", () => {
    // generate a random id
    // const id = documentModelUtils.hashKey();

    const input: DeleteArticleInput = generateMock(
      z.DeleteArticleInputSchema(),
    );

    const updatedDocument = reducer(document, creators.deleteArticle(input));

    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].type).toBe("DELETE_ARTICLE");
    expect(updatedDocument.operations.global[0].input).toStrictEqual(input);
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
  it("should handle addSectionToArticle operation", () => {
    // generate a random id
    // const id = documentModelUtils.hashKey();

    const input: AddSectionToArticleInput = generateMock(
      z.AddSectionToArticleInputSchema(),
    );

    const updatedDocument = reducer(
      document,
      creators.addSectionToArticle(input),
    );

    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].type).toBe(
      "ADD_SECTION_TO_ARTICLE",
    );
    expect(updatedDocument.operations.global[0].input).toStrictEqual(input);
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
});
