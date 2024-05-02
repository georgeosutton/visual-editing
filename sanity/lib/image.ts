import { SanityImageFragment } from "@/typegen/sanity.fragment-types";

export const baseUrl = `https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/production/`;

export function validateImage(fragment: SanityImageFragment) {
  const { _key, id, hotspot, crop, alt, height, url, width } = fragment;

  return {
    id: id ?? undefined,
    baseUrl: baseUrl,
    hotspot: hotspot ? { x: hotspot.x ?? 0, y: hotspot.y ?? 0 } : undefined,
    crop: crop
      ? {
          bottom: crop.bottom ?? 0,
          left: crop.left ?? 0,
          right: crop.right ?? 0,
          top: crop.top ?? 0,
        }
      : undefined,
    alt: alt ?? undefined,
    height: height ?? 0,
    url: url ?? "",
    width: width ?? 0,
    key: _key,
  };
}
