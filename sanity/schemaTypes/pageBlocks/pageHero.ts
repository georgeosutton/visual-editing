import { PortableTextBlock } from "@portabletext/react";
import { BsStars } from "react-icons/bs";
import { defineArrayMember, defineField, defineType } from "sanity";

import { blockPreview } from "../blockPreview";
import { createBlockField } from "../createBlockField";

export default defineType({
  name: "pageHero",
  type: "object",
  title: "Page Hero",
  icon: BsStars,
  fields: [
    createBlockField({
      styles: [
        { title: "H1", value: "h1" },
        { title: "H2", value: "h2" },
        { title: "Normal", value: "normal" },
      ],
    }),
    defineField({
      name: "images",
      type: "array",
      of: [
        defineArrayMember({
          name: "image",
          type: "image",
          options: {
            hotspot: true,
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      text: "text",
    },
    prepare(value) {
      const text = value?.text as PortableTextBlock[];
      return {
        title: blockPreview(text),
        subtitle: "Page Hero",
      };
    },
  },
});
