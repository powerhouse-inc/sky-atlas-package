import { Action, EditorProps } from "document-model/document";
import { utils as documentModelUtils } from "document-model/document";
import { Button, Text } from "@powerhousedao/design-system";

export type IProps = EditorProps<unknown, Action>;

export default function Editor(props: IProps) {
  // generate a random id
  // const id = documentModelUtils.hashKey();

  const {document, dispatch, context} = props;
  const {
    state: {global: state},
  } = document;

  return (
    <div>
      <p style={{ marginTop: "40px", fontWeight: "bold", fontSize: "1.2rem" }}>Document Type: {document.documentType}</p>
      <pre style={{ marginTop: "40px" }}>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}
