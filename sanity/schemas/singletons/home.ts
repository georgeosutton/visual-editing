import { HomeIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";
import { blocks } from "../constant";

export default defineType({
  name: "home",
  title: "Home",
  type: "document",
  icon: HomeIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    {
      name: "blocks",
      type: "array",
      title: "Page Blocks",
      validation: (Rule) => Rule.min(1).error("The page has no content."),
      of: [...blocks],
    },
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        subtitle: "Home",
        title,
      };
    },
  },
});
