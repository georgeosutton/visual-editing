import { defineLocations } from "sanity/presentation";

export const locations = {
  settings: defineLocations({
    message: "This document is used on all pages",
    tone: "caution",
  }),
  home: defineLocations({
    message: "Presentation Shortcut",
    tone: "positive",
    locations: [{ title: "Home", href: "/" }],
  }),
  page: defineLocations({
    select: { title: "title", slug: "slug.current" },
    resolve: (value) => {
      const doc = value as { title?: string; slug?: string };
      return {
        message: "Presentation Shortcut",
        tone: "positive",
        locations: [
          {
            title: doc?.title || "Untitled",
            href: doc?.slug || "/",
          },
        ],
      };
    },
  }),
};
