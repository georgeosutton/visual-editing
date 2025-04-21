import type { PortableTextBlock } from "@portabletext/react";
import { BlockContentIcon, ImageIcon } from "@sanity/icons";
import type { ReactNode } from "react";
import { GrTextWrap } from "react-icons/gr";
import type { Image } from "sanity";
import { defineArrayMember, defineField, defineType } from "sanity";

import { blockPreview } from "../blockPreview";
import { createBlockField } from "../createBlockField";

export default defineType({
  name: "textMedia",
  title: "Text Media",
  type: "object",
  icon: GrTextWrap,
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
