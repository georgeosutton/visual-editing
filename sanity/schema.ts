import { type SchemaTypeDefinition } from "sanity";
import page from "./schemas/documents/page";
import home from "./schemas/singletons/home";
import settings from "./schemas/singletons/settings";
import gallery from "./schemas/objects/gallery";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [page, home, settings, gallery],
};
