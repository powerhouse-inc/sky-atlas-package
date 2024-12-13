import { EditorProps } from "document-model/document";
import {
  AtlasNeededResearchState,
  AtlasNeededResearchAction,
  AtlasNeededResearchLocalState,
  actions,
} from "../../document-models/atlas-needed-research";
import { utils as documentModelUtils } from "document-model/document";
import { Button } from "@powerhousedao/design-system";

export type IProps = EditorProps<
  AtlasNeededResearchState,
  AtlasNeededResearchAction,
  AtlasNeededResearchLocalState
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
