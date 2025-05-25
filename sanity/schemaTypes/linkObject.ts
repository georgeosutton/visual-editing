import { FaArrowAltCircleRight } from "react-icons/fa";
import { defineField } from "sanity";

export default defineField({
  type: "object",
  title: "Link",
  name: "linkObject",
  icon: FaArrowAltCircleRight,
  fields: [{ type: "link", name: "link", title: "Link" }],
  preview: {
    select: {
      text: "link[0].text",
    },
    prepare(value) {
      const text = value.text as string;
      return {
        title: text,
        subtitle: "Link",
      };
    },
  },
});
