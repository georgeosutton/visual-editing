/**
 * This plugin contains all the logic for setting up the singletons
 */

import {
  DocumentActionComponent,
  type DocumentDefinition,
  type NewDocumentOptionsContext,
  type TemplateItem,
} from "sanity";
import { StructureResolver } from "sanity/structure";

export const singletonPlugin = (types: string[]) => {
  return {
    name: "singletonPlugin",
    document: {
      // Hide 'Singletons (such as Home)' from new document options
      // https://user-images.githubusercontent.com/81981/195728798-e0c6cf7e-d442-4e58-af3a-8cd99d7fcc28.png
      newDocumentOptions: (
        prev: TemplateItem[],
        { creationContext }: NewDocumentOptionsContext,
      ) => {
        if (creationContext.type === "global") {
          return prev.filter(
            (templateItem) => !types.includes(templateItem.templateId),
          );
        }

        return prev;
      },
      // Removes the "duplicate" action on the Singletons (such as Home)
      actions: (
        prev: DocumentActionComponent[],
        { schemaType }: { schemaType: string },
      ) => {
        if (types.includes(schemaType)) {
          return prev.filter(({ action }) => action !== "duplicate");
        }

        return prev;
      },
    },
  };
};

// If you add document types to desk structure manually, you can add them to this array to prevent duplicates in the root pane
const DOCUMENT_TYPES_IN_STRUCTURE = ["home", "media.tag", "settings"];

// The StructureResolver is how we're changing the DeskTool structure to linking to document (named Singleton)
// like how "Home" is handled.
export const pageStructure = (
  typeDefArray: DocumentDefinition[],
): StructureResolver => {
  return (S) => {
    // Goes through all of the singletons that were provided and translates them into something the
    // Desktool can understand
    const singletonItems = typeDefArray.map((typeDef) => {
      return S.listItem()
        .title(typeDef.title!)
        .icon(typeDef.icon)
        .child(
          S.editor()
            .id(typeDef.name)
            .schemaType(typeDef.name)
            .documentId(typeDef.name),
        );
    });

    // The default root list items (except custom ones)
    const defaultListItems = S.documentTypeListItems().filter((listItem) => {
      const type = listItem.getId();
      if (!type) {
        return true;
      }
      return !DOCUMENT_TYPES_IN_STRUCTURE.includes(type);
    });

    return S.list()
      .title("Content")
      .items([...singletonItems, S.divider(), ...defaultListItems]);
  };
};
