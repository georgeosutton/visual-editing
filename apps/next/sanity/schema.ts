import { type SchemaTypeDefinition } from "sanity";

// Documents
import page from "./schemas/documents/page";
import home from "./schemas/singletons/home";
import settings from "./schemas/singletons/settings";

// Objects
import internalLink from "./schemas/objects/links/internalLink";
import externalLink from "./schemas/objects/links/externalLink";
import seoHome from "./schemas/objects/seo/home";
import seoPage from "./schemas/objects/seo/page";
import placeholderString from "./schemas/objects/placeholderString";

// Page Blocks
import gallery from "./schemas/objects/pageBlocks/gallery";
import pageHero from "./schemas/objects/pageBlocks/pageHero";

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
