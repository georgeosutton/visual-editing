import { IMAGE } from "@/sanity/lib/fragments/image";

import { PORTABLE_TEXT } from "./portableText";

export const TEXT_MEDIA = `//groq
content[]{
    (_type == "image")=>{
        ${IMAGE}
    },
    (_type == "textObject")=>{
       _type,
       _key,
       text[]{
        ${PORTABLE_TEXT}
       },
    },
 },
 _type,
 _key,
 '_ts': 'TextMediaBlock'
`;
