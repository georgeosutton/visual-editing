import { type SchemaTypeDefinition } from "sanity";

// Rich text annotations used in the block content editor
import annotationLinkEmail from "./annotations/linkEmail";
import annotationLinkExternal from "./annotations/linkExternal";
import annotationLinkInternal from "./annotations/linkInternal";
import annotationLinkTel from "./annotations/linkTel";

const annotations = [
  annotationLinkEmail,
  annotationLinkExternal,
  annotationLinkInternal,
  annotationLinkTel,
];

// Documents
import page from "./documents/page";
import home from "./singletons/home";
import settings from "./singletons/settings";

// Objects
import linkInternal from "./links/linkInternal";
import linkExternal from "./links/linkExternal";
import seoHome from "./seo/home";
import seoPage from "./seo/page";
import placeholderString from "./placeholderString";

// Page Blocks
import pageHero from "./pageBlocks/pageHero";
import textMedia from "./pageBlocks/textMedia";

// Order matters for annotations
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    ...annotations,
    page,
    home,
    settings,
    pageHero,
    linkInternal,
    linkExternal,
    seoHome,
    seoPage,
    placeholderString,
    textMedia,
  ],
};
