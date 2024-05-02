import { DocumentIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

import { BLOCK_TYPES } from "../constants";

export default defineType({
  type: "document",
  name: "page",
  title: "Page",
  icon: DocumentIcon,
  groups: [
    {
      default: true,
      name: "editorial",
      title: "Editorial",
    },
    {
      name: "seo",
      title: "SEO",
    },
  ],
  fields: [
    // Title
    defineField({
      type: "string",
      name: "title",
      title: "Title",
      validation: (rule) => rule.required(),
    }),
    // Slug
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
        rule.required().custom((param) => {
          if (param?.current) {
            if (!param.current.startsWith("/")) {
              return `Slug must begin with / click "Generate" to reset.`;
            }
          }
          return true;
        }),
    }),
    // Page Blocks
    {
      name: "blocks",
      type: "array",
      title: "Page Blocks",
      validation: (Rule) => Rule.min(1).error("The page has no content."),
      of: BLOCK_TYPES,
      group: "editorial",
    },
    // SEO
    defineField({
      name: "seo",
      title: "SEO",
      type: "seo.page",
      group: "seo",
    }),
  ],
  preview: {
    select: {
      seoImage: "seo.image",
      title: "title",
      slug: "slug",
    },
    prepare(selection) {
      const { seoImage, title, slug } = selection;

      return {
        title,
        subtitle: slug?.current,
        media: seoImage,
      };
    },
  },
});
