import { groq } from "next-sanity";
import { INTERNAL_LINK } from "./fragments/internalLink";
import { EXTERNAL_LINK } from "./fragments/externalLink";

export const pageQuery = groq`*[slug.current == $slug][0]{...}`;

export const settingsQuery = groq`
  *[_type == "settings"][0]{
    menuItems[]{
      (_type == 'internalLink') => {${INTERNAL_LINK}},
      (_type == 'externalLink') => {${EXTERNAL_LINK}}
    },
  }
`;
