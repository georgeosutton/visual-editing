import { IMAGE } from "@/sanity/lib/fragments/image";

export const TEXT_MEDIA = `//groq
content[]{
    (_type == "image")=>{
        ${IMAGE}
    },
    (_type == "textObject")=>{
       _type,
       _key,
       text[]{
        ...,
       },
    },
 },
 _type,
 _key,
 '_ts': 'TextMediaBlock'
`;
