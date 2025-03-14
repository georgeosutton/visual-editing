import { IMAGE } from "./image";

export const SEO = `//groq
  "seo": {
    "description": seo.description,
    "image": seo.image {
      ${IMAGE}
    },
    "title": coalesce(seo.title, title),
  }
`;
