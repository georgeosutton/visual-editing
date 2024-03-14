import { BlockContentIcon } from "@sanity/icons";
import {
  defineField,
  defineType,
  defineArrayMember,
  PortableTextBlock,
  PortableTextChild,
} from "sanity";

export default defineType({
  name: "pageHero",
  type: "object",
  title: "Page Hero",
  fields: [
    defineField({
      title: "Text",
      name: "text",
      type: "array",
      icon: BlockContentIcon,
      validation: Rule =>
        Rule.custom(blocks => {
          const emptyBlocks = ((blocks as PortableTextBlock[]) || []).filter(
            block =>
              block._type === "block" &&
              (block.children as PortableTextChild[]).every(
                span =>
                  span._type === "span" && (span.text as string).trim() === ""
              )
          );

          const emptyPaths = emptyBlocks.map(
            (block, index) => [{ _key: block._key }] || [index]
          );

          return emptyPaths.length === 0
            ? true
            : {
                message: "Paragraph cannot be empty",
                paths: emptyPaths,
              };
        }),
      of: [
        {
          title: "Block",
          type: "block",
          styles: [
            { title: "H1", value: "h1" },
            { title: "H2", value: "h2" },
            { title: "Normal", value: "normal" },
          ],
          lists: [],
          marks: {
            decorators: [],
            annotations: [],
          },
        },
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
    prepare() {
      return {
        title: "Page Hero",
      };
    },
  },
});
