import { defineType } from "sanity";
import { blocks } from "../../constant";

export default defineType({
  name: "pageBlocks",
  type: "array",
  title: "Page Blocks",
  validation: (Rule) => Rule.min(1).error("The page has no content."),
  of: [...blocks],
});
