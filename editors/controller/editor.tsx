import { EditorProps } from "document-model/document";
import {
  ControllerState,
  ControllerAction,
  ControllerLocalState,
  actions,
} from "../../document-models/controller";
import { utils as documentModelUtils } from "document-model/document";
import { Button } from "@powerhousedao/design-system";

export type IProps = EditorProps<
  ControllerState,
  ControllerAction,
  ControllerLocalState
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
