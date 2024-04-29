import { MARK_DEFS } from "@/sanity/lib/fragments/markDefs";

export const PORTABLE_TEXT = `//groq
  ...,
  markDefs[] {
    ${MARK_DEFS}
  }
`;
