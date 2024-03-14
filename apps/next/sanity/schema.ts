import { type SchemaTypeDefinition } from "sanity";

// Documents
import page from "./schemas/documents/page";
// Objects
import externalLink from "./schemas/objects/links/externalLink";
import internalLink from "./schemas/objects/links/internalLink";
import gallery from "./schemas/objects/pageBlocks/gallery";
import pageHero from "./schemas/objects/pageBlocks/pageHero";
import placeholderString from "./schemas/objects/placeholderString";
import seoHome from "./schemas/objects/seo/home";
import seoPage from "./schemas/objects/seo/page";
// Page Blocks
import home from "./schemas/singletons/home";
import settings from "./schemas/singletons/settings";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    page,
    home,
    settings,
    gallery,
    pageHero,
    internalLink,
    externalLink,
    seoHome,
    seoPage,
    placeholderString,
  ],
};
