import { BlockContentIcon, CogIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

import { createBlockField } from "../createBlockField";

export default defineType({
  name: "settings",
  title: "Settings",
  type: "document",
  icon: CogIcon,
  fields: [
    defineField({
      title: "Menu Items",
      name: "menuItems",
      type: "array",
      of: [
        defineArrayMember({ type: "linkInternal" }),
        defineArrayMember({ type: "linkExternal" }),
      ],
    }),
    defineField({
      title: "Footer Modules",
      name: "footerModules",
      type: "array",
      of: [
        defineArrayMember({
          name: "textObject",
          title: "Text",
          type: "object",
          icon: BlockContentIcon,
          fields: [
            createBlockField({
              styles: [
                { title: "H3", value: "h3" },
                { title: "Normal", value: "normal" },
              ],
              lists: [{ title: "Bullet", value: "bullet" }],
              marks: {
                decorators: [{ title: "Strong", value: "strong" }],
                annotations: [
                  {
                    name: "annotationLinkInternal",
                    type: "annotationLinkInternal",
                  },
                  {
                    name: "annotationLinkExternal",
                    type: "annotationLinkExternal",
                  },
                  {
                    name: "annotationLinkEmail",
                    type: "annotationLinkEmail",
                  },
                  {
                    name: "annotationLinkTel",
                    type: "annotationLinkTel",
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
    prepare() {
      return {
        title: "Settings",
      };
    },
  },
});
