import { groq } from "next-sanity";

export const INTERNAL_LINK = groq`
  _key,
  _type,
  text,
  ...reference-> {
    "slug": slug.current,
  }
`;
