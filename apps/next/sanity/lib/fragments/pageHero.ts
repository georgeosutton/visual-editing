import { groq } from "next-sanity";
import { IMAGE } from "./image";

export const PAGE_HERO = groq`
text[]{
...
},
 images[]{
    ${IMAGE}
 }
`;
