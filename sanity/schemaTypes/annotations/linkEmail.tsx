import { EnvelopeIcon } from "@sanity/icons";
import { BlockAnnotationProps, defineField } from "sanity";

export default defineField({
  title: "Email link",
  name: "annotationLinkEmail",
  type: "object",
  icon: EnvelopeIcon,
  components: {
    annotation: (props: BlockAnnotationProps) => (
      <span>
        <EnvelopeIcon
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
    // Email
    {
      title: "Email",
      name: "email",
      type: "email",
    },
  ],
  preview: {
    select: {
      email: "email",
    },
  },
});
