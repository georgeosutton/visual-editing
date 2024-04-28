import {
  ArrayOfType,
  BlockListDefinition,
  BlockMarksDefinition,
  BlockStyleDefinition,
  defineField,
} from "sanity";

export const createBlockField = ({
  of = [],
  styles = [],
  marks = { decorators: [], annotations: [] },
  lists = [],
  name = "text",
  title = "Text",
  description,
  fieldset,
}: {
  of?: ArrayOfType[];
  styles?: BlockStyleDefinition[];
  marks?: BlockMarksDefinition;
  lists?: BlockListDefinition[];
  name?: string;
  title?: string;
  description?: string;
  fieldset?: string;
} = {}) =>
  defineField({
    type: "array",
    title,
    name,
    description,
    fieldset,
    of: [
      {
        type: "block",
        styles,
        marks,
        lists,
      },
      ...of,
    ],
  });
