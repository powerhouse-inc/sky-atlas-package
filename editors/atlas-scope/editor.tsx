import { Action, EditorProps } from "document-model/document";
import { Button } from "@powerhousedao/design-system";
import {
  EnumField,
  Form,
  StringField,
  UrlField,
} from "@powerhousedao/design-system/dist/scalars";
import { AtlasScopeScopeOperations } from "document-models/atlas-scope/gen/scope/operations";

export type IProps = EditorProps<unknown, Action, AtlasScopeScopeOperations>;

export default function Editor(props: IProps) {
  const { document, dispatch } = props;
  const {
    state: { global: state },
  } = document;

  const handleSubmit = (values: Record<string, any>) => {
    dispatch({
      type: "updateScopeOperation",
      input: values,
      scope: "global",
    });
  };

  return (
    <Form defaultValues={state as Record<string, any>} onSubmit={handleSubmit}>
      <StringField className="mb-4" disabled label="Name" name="name" />
      <EnumField
        className="mb-4"
        label="Status"
        multiple
        name="masterStatus"
        options={[
          { value: "PLACEHOLDER", label: "PLACEHOLDER" },
          { value: "PROVISIONAL", label: "PROVISIONAL" },
          { value: "APPROVED", label: "APPROVED " },
          { value: "DEFERRED", label: "DEFERRED" },
          { value: "ARCHIVED", label: "ARCHIVED" },
        ]}
        variant="Select"
      />

      <StringField className="mb-4" disabled label="DocNo" name="docNo" />
      <StringField
        className="mb-4"
        disabled
        label="Content"
        multiline
        name="content"
      />
      <div className="mb-4">
        <UrlField disabled label="Provenance" name="provenance" />
      </div>
      <StringField
        className="mb-4"
        disabled
        label="Original Content Data"
        name="originalContextData"
      />
      <EnumField
        className="mb-4"
        label="Global Tags"
        multiple
        name="globalTags"
        options={[
          {
            label: "RECURSIVE_IMPROVEMENT",
            value: "RECURSIVE_IMPROVEMENT",
          },
          { label: "SCOPE_ADVISOR", value: "SCOPE_ADVISOR" },
          { label: "DAO_TOOLKIT", value: "DAO_TOOLKIT" },
          { label: "PURPOSE_SYSTEM", value: "PURPOSE_SYSTEM" },
          { label: "ML__LOW_PRIORITY", value: "ML__LOW_PRIORITY" },
          { label: "EXTERNAL_REFERENCE", value: "EXTERNAL_REFERENCE" },
          { label: "ML__DEFER", value: "ML__DEFER" },
          { label: "SUBDAO_INCUBATION", value: "SUBDAO_INCUBATION" },
          { label: "V1__MIP", value: "V1__MIP" },
          { label: "ML__HIGH_PRIORITY", value: "ML__HIGH_PRIORITY" },
          {
            label: "ECOSYSTEM_INTELLIGENCE",
            value: "ECOSYSTEM_INTELLIGENCE",
          },
          {
            label: "LEGACY_TERM__USE_APPROVED",
            value: "LEGACY_TERM__USE_APPROVED",
          },
          { label: "CAIS", value: "CAIS" },
          { label: "INTERNAL_REFERENCE", value: "INTERNAL_REFERENCE" },
          { label: "FACILITATORDAO", value: "FACILITATORDAO" },
          { label: "ML___MED_PRIORITY", value: "ML___MED_PRIORITY" },
          { label: "AVC", value: "AVC" },
          { label: "P0_HUB_ENTRY_NEEDED", value: "P0_HUB_ENTRY_NEEDED" },
          { label: "ANON_WORKFORCE", value: "ANON_WORKFORCE" },
          { label: "NEWCHAIN", value: "NEWCHAIN" },
          {
            label: "ML__SUPPORT_DOCS_NEEDED",
            value: "ML__SUPPORT_DOCS_NEEDED",
          },
          { label: "SUBDAO_REWARDS", value: "SUBDAO_REWARDS" },
          { label: "TWO_STAGE_BRIDGE", value: "TWO_STAGE_BRIDGE" },
        ]}
      />
      <StringField
        className="mb-4"
        disabled
        label="Notion ID"
        name="notionId"
      />
      <Button className="mt-4" type="submit">
        Submit
      </Button>
    </Form>
  );
}
