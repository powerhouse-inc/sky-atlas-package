import { EditorProps } from "document-model/document";
import {
  AtlasAnnotationState,
  AtlasAnnotationAction,
  AtlasAnnotationLocalState,
  actions,
} from "../../document-models/atlas-annotation";
import { utils as documentModelUtils } from "document-model/document";
import { Button } from "@powerhousedao/design-system";

export type IProps = EditorProps<
  AtlasAnnotationState,
  AtlasAnnotationAction,
  AtlasAnnotationLocalState
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
