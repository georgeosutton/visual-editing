import { IMAGE } from "@/sanity/lib/fragments/image";

export const PAGE_HERO = `//groq
text[]{
...
},
 images[]{
    ${IMAGE}
 },
 _type,
 _key,
 '_ts': 'PageHeroBlock'
`;
