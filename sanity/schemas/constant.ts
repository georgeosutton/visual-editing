import { defineArrayMember } from "sanity";

export const links = [{ type: "page" }];

export const blocks = [
  defineArrayMember({ type: "gallery" }),
  defineArrayMember({ type: "pageHero" }),
  defineArrayMember({ type: "textMedia" }),
];
