import { defineType } from "sanity";

import PlaceholderStringInput from "./PlaceholderStringInput";

export default defineType({
  name: "placeholderString",
  title: "Title",
  type: "string",
  components: {
    input: PlaceholderStringInput,
  },
});
