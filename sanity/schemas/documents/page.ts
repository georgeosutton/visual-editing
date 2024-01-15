import { DocumentIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";
import { blocks } from "../constant";

export default defineType({
  type: "document",
  name: "page",
  title: "Page",
  icon: DocumentIcon,
  fields: [
    defineField({
      type: "string",
      name: "title",
      title: "Title",
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: "slug",
      name: "slug",
      title: "Slug",
      options: {
        source: "title",
        slugify: (input) => {
          return "/" + input.toLowerCase().replace(/\s+/g, "-").slice(0, 200);
        },
      },
      validation: (rule) =>
        rule.required().custom((param: any) => {
          if (param?.current) {
            if (!param.current.startsWith("/")) {
              return `Slug must begin with / click "Generate" to reset.`;
            }
          }
          return true;
        }),
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
        subtitle: "Page",
        title,
      };
    },
  },
});
