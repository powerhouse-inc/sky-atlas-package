import { EditorProps } from "document-model/document";
import {
  AtlasMultiParentState,
  AtlasMultiParentAction,
  AtlasMultiParentLocalState,
  actions,
} from "../../document-models/atlas-multi-parent";
import { utils as documentModelUtils } from "document-model/document";
import { Button } from "@powerhousedao/design-system";

export type IProps = EditorProps<
  AtlasMultiParentState,
  AtlasMultiParentAction,
  AtlasMultiParentLocalState
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
