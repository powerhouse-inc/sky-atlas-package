import { EditorProps } from "document-model/document";
import {
  AtlasActiveDataState,
  AtlasActiveDataAction,
  AtlasActiveDataLocalState,
  actions,
} from "../../document-models/atlas-active-data";
import { utils as documentModelUtils } from "document-model/document";
import { Button } from "@powerhousedao/design-system";

export type IProps = EditorProps<
  AtlasActiveDataState,
  AtlasActiveDataAction,
  AtlasActiveDataLocalState
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
