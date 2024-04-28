import { BlockElementIcon } from "@sanity/icons";
import { ComponentType, ReactNode } from "react";
import { FieldDefinition, defineType, PreviewConfig } from "sanity";

export const createPageBlock = ({
  fields,
  title = "Page Block",
  name,
  icon = BlockElementIcon,
  preview,
}: {
  fields: FieldDefinition[];
  name: string;
  title?: string;
  icon?: ComponentType | ReactNode;
  preview?: PreviewConfig;
}) => {
  return defineType({
    name,
    type: "object",
    title,
    fields,
    icon,
    preview: {
      prepare() {
        return {
          title: title,
        };
      },
      ...preview,
    },
  });
};
