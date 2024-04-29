import { LINK_EXTERNAL } from "@/sanity/lib/fragments/linkExternal";
import { LINK_INTERNAL } from "@/sanity/lib/fragments/linkInternal";

export const MARK_DEFS = `//groq
	...,
	(_type == 'annotationLinkExternal') => {
	  ${LINK_EXTERNAL}
	},
	(_type == 'annotationLinkInternal') => {
	  ${LINK_INTERNAL}
	},
`;
