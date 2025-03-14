import { defineField } from "sanity";

export default defineField({
  name: "seo.page",
  title: "SEO",
  type: "object",
  options: {
    collapsed: false,
    collapsible: true,
  },
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "placeholderString",
      description: (
        <>
          If empty, displays the document title (<code>title</code>)
        </>
      ),
      options: { field: "title" },
      validation: (rule) =>
        rule
          .max(50)
          .warning("Longer titles may be truncated by search engines"),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      validation: (rule) =>
        rule
          .max(150)
          .warning("Longer descriptions may be truncated by search engines"),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
    }),
  ],
});
