import { defineType } from "sanity";

export default defineType({
  name: "internalLink",
  type: "object",
  title: "Internal link",
  fields: [
    {
      name: "reference",
      type: "reference",
      title: "Page",
      validation: Rule => Rule.required().error("Please select a page."),
      to: [{ type: "page" }, { type: "home" }],
    },
    {
      name: "text",
      type: "string",
      validation: Rule => Rule.required().error("Please add link text."),
      title: "Link Text",
    },
  ],
  preview: {
    select: {
      title: "reference.title",
      subtitle: "text",
    },
    prepare({ title, subtitle }) {
      return {
        title: title ? title : subtitle,
        subtitle: title ? subtitle : "",
      };
    },
  },
});
