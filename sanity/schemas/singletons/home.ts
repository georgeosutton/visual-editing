import { HomeIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";
import { BLOCK_TYPES } from "../constant";

export default defineType({
  name: "home",
  title: "Home",
  type: "document",
  icon: HomeIcon,
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
    // Slug - Hidden field used when resolving internal links.
    defineField({
      type: "slug",
      name: "slug",
      title: "Slug",
      initialValue: {
        current: "/",
      },
      readOnly: true,
      hidden: true,
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
      type: "seo.home",
      group: "seo",
    }),
  ],
  preview: {
    select: {
      seoImage: "seo.image",
    },
    prepare(selection) {
      const { seoImage } = selection;

      return {
        media: seoImage,
        title: "Home",
      };
    },
  },
});
