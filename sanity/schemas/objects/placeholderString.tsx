import PlaceholderStringInput from "@/sanity/components/inputs/PlaceholderString";
import { defineType } from "sanity";

export default defineType({
  name: "placeholderString",
  title: "Title",
  type: "string",
  components: {
    input: PlaceholderStringInput,
  },
});
