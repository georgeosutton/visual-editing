import { defineType } from "sanity";
import { PAGE_REFERENCES } from "../constants";
import { LinkIcon } from "@sanity/icons";

export default defineType({
  name: "linkInternal",
  type: "object",
  title: "Internal link",
  icon: LinkIcon,
  fields: [
    {
      name: "reference",
      type: "reference",
      title: "Page",
      validation: (Rule) => Rule.required().error("Please select a page."),
      to: PAGE_REFERENCES,
    },
    {
      name: "text",
      type: "string",
      validation: (Rule) => Rule.required().error("Please add link text."),
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
