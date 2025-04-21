import { AiOutlinePhone } from "react-icons/ai";
import { type BlockAnnotationProps, defineField } from "sanity";

export default defineField({
  title: "Tel link",
  name: "annotationLinkTel",
  type: "object",
  icon: AiOutlinePhone,
  components: {
    annotation: (props: BlockAnnotationProps) => (
      <span>
        <AiOutlinePhone
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
    // Tel
    {
      title: "Tel",
      name: "tel",
      type: "string",
    },
  ],
});
