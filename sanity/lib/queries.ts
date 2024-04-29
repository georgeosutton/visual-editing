import { groq } from "next-sanity";

// Relative import paths is awaiting a fix to be released https://github.com/sanity-io/sanity/pull/6457
import { IMAGE } from "@/sanity/lib/fragments/image";
import { TEXT_MEDIA } from "@/sanity/lib/fragments/textMedia";
import { PAGE_HERO } from "@/sanity/lib/fragments/pageHero";
import { LINK_INTERNAL } from "@/sanity/lib/fragments/linkInternal";
import { LINK_EXTERNAL } from "@/sanity/lib/fragments/linkExternal";
import { PORTABLE_TEXT } from "@/sanity/lib/fragments/portableText";

const BLOCKS = `//groq
    (_type == "pageHero")=>{
      ${PAGE_HERO}
    },
    (_type == "textMedia")=>{
      ${TEXT_MEDIA}
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

export const pageQuery = groq`*[slug.current == $slug][0]{blocks[]{${BLOCKS}}, ${SEO}}`;

export const settingsQuery = groq`
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
`;

export const homePageQuery = groq`
  *[_type == "home"][0]{..., blocks[]{${BLOCKS}}, ${SEO}}
`;
