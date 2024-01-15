import { defineField, defineType, defineArrayMember } from "sanity";

export default defineType({
  name: "gallery",
  type: "object",
  title: "Gallery",
  fields: [
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
        title: "Gallery",
      };
    },
  },
});
