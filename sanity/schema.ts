import { type SchemaTypeDefinition } from "sanity";
import page from "./schemas/documents/page";
import home from "./schemas/singletons/home";
import settings from "./schemas/singletons/settings";
import internalLink from "./schemas/objects/links/internalLink";
import externalLink from "./schemas/objects/links/externalLink";

// Page Blocks
import gallery from "./schemas/objects/pageBlocks/gallery";
import pageHero from "./schemas/objects/pageBlocks/pageHero";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [page, home, settings, gallery, pageHero, internalLink, externalLink],
};
