/**
 * This is a scaffold file meant for customization:
 * - change it by adding new tests or modifying the existing ones
 */

import utils, { initialGlobalState, initialLocalState } from "../../gen/utils";

describe("Atlas Core Document Model", () => {
  it("should create a new Atlas Core document", () => {
    const document = utils.createDocument();

    expect(document).toBeDefined();
    expect(document.documentType).toBe("sky/atlas-core");
  });

  it("should create a new Atlas Core document with a valid initial state", () => {
    const document = utils.createDocument();
    expect(document.state.global).toStrictEqual(initialGlobalState);
    expect(document.state.local).toStrictEqual(initialLocalState);
  });
});
