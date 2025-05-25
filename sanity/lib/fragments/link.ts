import { LINK_EXTERNAL } from "@/sanity/lib/fragments/linkExternal";
import { LINK_INTERNAL } from "@/sanity/lib/fragments/linkInternal";

export const LINK = `//groq
   (_type == 'linkInternal') => {${LINK_INTERNAL}},
   (_type == 'linkExternal') => {${LINK_EXTERNAL}}
`;
