import { EditorProps } from "document-model/document";
import {
  AtlasScenarioVariationState,
  AtlasScenarioVariationAction,
  AtlasScenarioVariationLocalState,
  actions,
} from "../../document-models/atlas-scenario-variation";
import { utils as documentModelUtils } from "document-model/document";
import { Button } from "@powerhousedao/design-system";

export type IProps = EditorProps<
  AtlasScenarioVariationState,
  AtlasScenarioVariationAction,
  AtlasScenarioVariationLocalState
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
