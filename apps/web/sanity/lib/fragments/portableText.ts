import { MARK_DEFS } from "./markDefs";

export const PORTABLE_TEXT = `//groq
  ...,
  markDefs[] {
    ${MARK_DEFS}
  }
`;
