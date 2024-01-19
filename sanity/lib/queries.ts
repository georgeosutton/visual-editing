import { groq } from "next-sanity";

export const pageQuery = groq`*[slug.current == $slug][0]{...}`;
