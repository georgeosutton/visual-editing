import PlaceholderStringInput from "./PlaceholderStringInput";
import { defineType } from "sanity";

export default defineType({
  name: "placeholderString",
  title: "Title",
  type: "string",
  components: {
    input: PlaceholderStringInput,
  },
});
