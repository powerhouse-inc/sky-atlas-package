import { EditorProps } from "document-model/document";
import {
  AtlasExploratoryState,
  AtlasExploratoryAction,
  AtlasExploratoryLocalState,
  actions,
} from "../../document-models/atlas-exploratory";
import { utils as documentModelUtils } from "document-model/document";
import { Button } from "@powerhousedao/design-system";

export type IProps = EditorProps<
  AtlasExploratoryState,
  AtlasExploratoryAction,
  AtlasExploratoryLocalState
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
