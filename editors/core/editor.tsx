import { EditorProps } from "document-model/document";
import {
  AtlasCoreState,
  AtlasCoreAction,
  AtlasCoreLocalState,
  actions,
} from "../../document-models/atlas-core";
import { utils as documentModelUtils } from "document-model/document";
import { Button } from "@powerhousedao/design-system";

export type IProps = EditorProps<
  AtlasCoreState,
  AtlasCoreAction,
  AtlasCoreLocalState
>;

export default function Editor(props: IProps) {
  // generate a random id
  // const id = documentModelUtils.hashKey();

  return (
    <div>
      <Button onClick={() => console.log("Hello world!")}>My Button</Button>
    </div>
  );
}
