import { groq } from "next-sanity";

export const EXTERNAL_LINK = groq`
  _key,
  _type,
  text,
  url,
  newWindow,
`;
