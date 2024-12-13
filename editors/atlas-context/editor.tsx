import { EditorProps } from "document-model/document";
import {
  AtlasOriginalContextDataState,
  AtlasOriginalContextDataAction,
  AtlasOriginalContextDataLocalState,
  actions,
} from "../../document-models/atlas-original-context-data";
import { utils as documentModelUtils } from "document-model/document";
import { Button } from "@powerhousedao/design-system";

export type IProps = EditorProps<
  AtlasOriginalContextDataState,
  AtlasOriginalContextDataAction,
  AtlasOriginalContextDataLocalState
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
