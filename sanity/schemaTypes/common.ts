import { defineField } from "sanity";

export const links = defineField({
  name: "links",
  type: "array",
  of: [{ type: "linkObject" }],
});
