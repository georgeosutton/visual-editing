import type { SanityImageFragment } from "@/typegen/sanity.fragment-types";

export const baseUrl = `https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/production/`;

export function validateImage(fragment: SanityImageFragment | null) {
  if (!fragment) {
    return {};
  }

  return {
    id: fragment?.id ?? undefined,
    baseUrl: baseUrl,
    hotspot: fragment?.hotspot
      ? { x: fragment?.hotspot.x ?? 0, y: fragment?.hotspot.y ?? 0 }
      : undefined,
    crop: fragment?.crop
      ? {
          bottom: fragment?.crop?.bottom ?? 0,
          left: fragment?.crop?.left ?? 0,
          right: fragment?.crop?.right ?? 0,
          top: fragment?.crop?.top ?? 0,
        }
      : undefined,
    alt: fragment?.alt ?? undefined,
    height: fragment?.height ?? 0,
    width: fragment?.width ?? 0,
  };
}
