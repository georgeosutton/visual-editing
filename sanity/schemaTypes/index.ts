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

import page from "./documents/page";
import linkExternal from "./links/linkExternal";
import linkInternal from "./links/linkInternal";
import pageHero from "./pageBlocks/pageHero";
import textMedia from "./pageBlocks/textMedia";
import placeholderString from "./placeholderString";
import seoHome from "./seo/home";
import seoPage from "./seo/page";
import home from "./singletons/home";
import settings from "./singletons/settings";

// Order matters for annotations
export const schemaTypes = [
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
];
