import { defineType } from "sanity";

export default defineType({
  type: "array",
  name: "link",
  title: "link",
  of: [{ type: "linkInternal" }, { type: "linkExternal" }],
  validation: (Rule) => Rule.max(1),
});
