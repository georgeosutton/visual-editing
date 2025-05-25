import { defineQuery } from "next-sanity";

import { CTA_BLOCK } from "./fragments/cta";
import { IMAGE } from "./fragments/image";
import { LINK_EXTERNAL } from "./fragments/linkExternal";
import { LINK_INTERNAL } from "./fragments/linkInternal";
import { PAGE_HERO } from "./fragments/pageHero";
import { PORTABLE_TEXT } from "./fragments/portableText";
import { TEXT_MEDIA } from "./fragments/textMedia";

const BLOCKS = `//groq
    (_type == "pageHero")=>{
      ${PAGE_HERO}
    },
    (_type == "textMedia")=>{
      ${TEXT_MEDIA}
    },
    (_type == "ctaBlock")=>{
      ${CTA_BLOCK}
    },
`;

const SEO = `//groq
  "seo": {
    "description": seo.description,
    "image": seo.image {
      ${IMAGE}
    },
    "title": coalesce(seo.title, title),
  }
`;

export const pageQuery = defineQuery(`
*[slug.current == $slug][0]{blocks[]{${BLOCKS}}, ${SEO}}
`);

export const settingsQuery = defineQuery(`
  *[_type == "settings"][0]{
    menuItems[]{
      (_type == 'linkInternal') => {${LINK_INTERNAL}},
      (_type == 'linkExternal') => {${LINK_EXTERNAL}}
    },
    footerModules[]{
      _key,
      text[]{
        ${PORTABLE_TEXT}
      }
    }
  }
`);

export const allSlugsQuery = defineQuery(`
*[_type in ["page", "home"] && defined(slug.current)][].slug.current
`);
