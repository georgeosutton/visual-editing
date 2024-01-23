import { CogIcon } from "@sanity/icons";
import { defineType } from "sanity";

export default defineType({
  name: "settings",
  title: "Settings",
  type: "document",
  icon: CogIcon,
  fields: [
    {
      title: "Menu Items",
      name: "menuItems",
      type: "array",
      of: [{ type: "internalLink" }],
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Settings",
      };
    },
  },
});
