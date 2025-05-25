import type { PortableTextBlock } from "@portabletext/react";
import { ArrowRight } from "lucide-react";
import { defineField, defineType } from "sanity";

import { blockPreview } from "../blockPreview";
import { createBlockField } from "../createBlockField";

export default defineType({
  name: "ctaBlock",
  type: "object",
  title: "CTA Block",
  icon: ArrowRight,
  fields: [
    createBlockField({
      styles: [
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "Normal", value: "normal" },
      ],
    }),
    defineField({
      name: "ctas",
      title: "Calls to Action",
      type: "links",
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
        subtitle: "CTA Block",
      };
    },
  },
});
