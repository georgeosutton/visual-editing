import { LinkIcon } from "@sanity/icons";
import { BlockAnnotationProps, defineField } from "sanity";
import { PAGE_REFERENCES } from "../constants";

export default defineField({
  title: "Internal Link",
  name: "annotationLinkInternal",
  type: "object",
  icon: LinkIcon,
  components: {
    annotation: (props: BlockAnnotationProps) => (
      <span>
        <LinkIcon
          style={{
            marginLeft: "0.05em",
            marginRight: "0.1em",
            width: "0.75em",
          }}
        />
        {props.renderDefault(props)}
      </span>
    ),
  },
  fields: [
    // Reference
    {
      name: "reference",
      type: "reference",
      weak: true,
      validation: (rule) => rule.required(),
      to: PAGE_REFERENCES,
    },
  ],
});
