import { groq } from "next-sanity";

export const IMAGE = groq`
_key,
"id": asset._ref,
"preview": asset->metadata.lqip,
hotspot { x, y },
crop {
  bottom,
  left,
  right,
  top,
},
"alt":asset->altText,
"tags": asset->opt.media.tags[]->name.current,
"description": asset->description,
"title": asset->title,
`;
