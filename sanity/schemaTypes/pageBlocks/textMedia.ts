import { PortableTextBlock } from "@portabletext/react";
import { BlockContentIcon, ImageIcon } from "@sanity/icons";
import { defineArrayMember, defineField } from "sanity";

import { blockPreview } from "../blockPreview";
import { createBlockField } from "../createBlockField";
import { createPageBlock } from "../createPageBlock";

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
              lists: [{ title: "Bullet", value: "bullet" }],
              marks: {
                decorators: [],
                annotations: [
                  {
                    name: "annotationLinkInternal",
                    type: "annotationLinkInternal",
                  },
                  {
                    name: "annotationLinkExternal",
                    type: "annotationLinkExternal",
                  },
                ],
              },
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
