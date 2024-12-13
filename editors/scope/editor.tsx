import { EditorProps } from "document-model/document";
import {
  AtlasScopeState,
  AtlasScopeAction,
  AtlasScopeLocalState,
  actions,
} from "../../document-models/atlas-scope";
import { utils as documentModelUtils } from "document-model/document";
import { Button } from "@powerhousedao/design-system";
import { AtlasScopeStateSchema } from "document-models/atlas-scope/gen/schema/zod";
import { useState } from "react";
import { Status, GlobalTag } from "document-models/atlas-scope/gen/schema/types";

export type IProps = EditorProps<
  AtlasScopeState,
  AtlasScopeAction,
  AtlasScopeLocalState
>;

export default function Editor(props: IProps) {
  const { document, dispatch, context } = props;
  const {
    state: { global: state },
  } = document;



  return (
    <div>


      <pre style={{ marginTop: "40px" }}>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}
