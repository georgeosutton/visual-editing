import { EarthGlobeIcon } from "@sanity/icons";
import { defineType } from "sanity";

export default defineType({
  title: "External Link",
  name: "externalLink",
  type: "object",
  icon: EarthGlobeIcon,
  fields: [
    {
      name: "text",
      type: "string",
      validation: Rule => Rule.required().error("Please add link text."),
      title: "Link Text",
    },
    {
      name: "url",
      title: "URL",
      type: "url",
      validation: Rule => Rule.required().uri({ scheme: ["http", "https"] }),
    },
    {
      title: "Open in a new window?",
      name: "newWindow",
      type: "boolean",
      initialValue: true,
    },
  ],
  preview: {
    select: {
      title: "text",
      url: "url",
    },
    prepare({ url, title }) {
      return {
        subtitle: url ? `→ ${url}` : "",
        title,
      };
    },
  },
});
