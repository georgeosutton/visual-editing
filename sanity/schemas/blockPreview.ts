import { PortableTextBlock, toPlainText } from "@portabletext/react";

export const blockPreview = (
  content?: PortableTextBlock[] | PortableTextBlock,
) => {
  if (!content) return "";
  if (!Array.isArray(content)) {
    return toPlainText(content);
  }

  return toPlainText(content?.[0]);
};
