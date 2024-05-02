import { defineArrayMember, defineField } from "sanity";
import { createBlockField } from "../createBlockField";
import { createPageBlock } from "../createPageBlock";
import { BlockContentIcon, ImageIcon } from "@sanity/icons";
import { blockPreview } from "../blockPreview";
import { PortableTextBlock } from "@portabletext/react";

export default createPageBlock({
  name: "textMedia",
  title: "Text Media",
  fields: [
    defineField({
      name: "content",
      type: "array",
      of: [
        defineArrayMember({
          name: "image",
          type: "image",
          icon: ImageIcon,
          options: {
            hotspot: true,
          },
        }),
        defineArrayMember({
          name: "textObject",
          title: "Text",
          type: "object",
          icon: BlockContentIcon,
          fields: [
            createBlockField({
              styles: [
                { title: "H1", value: "h1" },
                { title: "H2", value: "h2" },
                { title: "H3", value: "h3" },
                { title: "Normal", value: "normal" },
              ],
            }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      content: "content",
    },
    prepare({ content = [] }) {
      const textObject: { text: PortableTextBlock[] } = content.find(
        (item: { _type: string }) => item._type == "textObject",
      );
      const image = content.find(
        (item: { _type: string }) => item._type == "image",
      );
      return {
        title: blockPreview(textObject?.text),
        subtitle: "Text Media",
        media: image,
      };
    },
  },
});
