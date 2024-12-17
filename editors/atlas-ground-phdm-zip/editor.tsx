import { EditorProps } from "document-model/document";
import {
  AtlasGroundState,
  AtlasGroundAction,
  AtlasGroundLocalState,
  actions,
} from "../../document-models/atlas-ground";
import { utils as documentModelUtils } from "document-model/document";
import { Button } from "@powerhousedao/design-system";

export type IProps = EditorProps<
  AtlasGroundState,
  AtlasGroundAction,
  AtlasGroundLocalState
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
