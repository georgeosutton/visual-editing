import { PortableTextBlock } from "@portabletext/react";
import { BlockContentIcon, ImageIcon } from "@sanity/icons";
import { ReactNode } from "react";
import { defineArrayMember, defineField, defineType, Image } from "sanity";

import { blockPreview } from "../blockPreview";
import { createBlockField } from "../createBlockField";

export default defineType({
  name: "textMedia",
  title: "Text Media",
  type: "object",
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
    prepare({
      content,
    }: {
      content: (
        | { text: PortableTextBlock[]; _type: "textObject" }
        | ({ _type: "image" } & Image)
      )[];
    }) {
      const textObject = content?.find(
        (item) => item._type === "textObject",
      ) as { text: PortableTextBlock[]; _type: "textObject" };

      const image = content?.find((item) => item._type == "image") as
        | ReactNode
        | undefined;

      return {
        title: blockPreview(textObject?.text),
        subtitle: "Text Media",
        media: image,
      };
    },
  },
});

const bar = { value: 123 };
const foo = { value: 456 };
const foobar = [foo, bar];

console.log(foobar.find((obj) => obj.value === 123));
