import { LINK } from "@/sanity/lib/fragments/link";

export const CTA_BLOCK = `//groq
text[]{
...
},
ctas[]{
  (_type == 'linkObject') => {_key, link[]{${LINK}}},
},
 _type,
 _key,
 '_ts': 'CtaBlock'
`;
