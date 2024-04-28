import { groq } from "next-sanity";

// Relative import paths is awaiting a fix to be released https://github.com/sanity-io/sanity/pull/6457
import { INTERNAL_LINK } from "@/sanity/lib/fragments/internalLink";
import { EXTERNAL_LINK } from "@/sanity/lib/fragments/externalLink";
import { IMAGE } from "@/sanity/lib/fragments/image";
import { TEXT_MEDIA } from "@/sanity/lib/fragments/textMedia";
import { PAGE_HERO } from "@/sanity/lib/fragments/pageHero";

const BLOCKS = `//groq
    _type,
    _key,
    (_type == "pageHero")=>{
      ${PAGE_HERO}
    },
    (_type == "textMedia")=>{
      ${TEXT_MEDIA}
    }
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
      (_type == 'internalLink') => {${INTERNAL_LINK}},
      (_type == 'externalLink') => {${EXTERNAL_LINK}}
    },
  }
`;

export const homePageQuery = groq`
  *[_type == "home"][0]{..., blocks[]{${BLOCKS}}, ${SEO}}
`;
