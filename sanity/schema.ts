import { type SchemaTypeDefinition } from "sanity";

// Rich text annotations used in the block content editor
import annotationLinkEmail from "./schemas/annotations/linkEmail";
import annotationLinkExternal from "./schemas/annotations/linkExternal";
import annotationLinkInternal from "./schemas/annotations/linkInternal";
import annotationLinkTel from "./schemas/annotations/linkTel";

const annotations = [
  annotationLinkEmail,
  annotationLinkExternal,
  annotationLinkInternal,
  annotationLinkTel,
];

// Documents
import page from "./schemas/documents/page";
import home from "./schemas/singletons/home";
import settings from "./schemas/singletons/settings";

// Objects
import linkInternal from "./schemas/objects/links/linkInternal";
import linkExternal from "./schemas/objects/links/linkExternal";
import seoHome from "./schemas/objects/seo/home";
import seoPage from "./schemas/objects/seo/page";
import placeholderString from "./schemas/objects/placeholderString";

// Page Blocks
import pageHero from "./schemas/objects/pageBlocks/pageHero";
import textMedia from "./schemas/objects/pageBlocks/textMedia";

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
