import { defineField, defineType, defineArrayMember } from "sanity";
import { GrGallery } from "react-icons/gr";

export default defineType({
  name: "gallery",
  type: "object",
  title: "Gallery",
  icon: GrGallery,
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
