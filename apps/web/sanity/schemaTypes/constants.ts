import { defineArrayMember } from "sanity";

export const PAGE_REFERENCES = [{ type: "page" }, { type: "home" }];

export const BLOCK_TYPES = [
  defineArrayMember({ type: "pageHero" }),
  defineArrayMember({ type: "textMedia" }),
];
