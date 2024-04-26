import { client } from "@/sanity/lib/client";
import { AllSlugsQueryResult } from "@/typegen/sanity.fragment-types";
import { MetadataRoute } from "next";
import { groq } from "next-sanity";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const allSlugsQuery = groq`*[_type in ["page", "home"] && defined(slug.current)][]{"slug":slug.current, _updatedAt}`;

  const pages = await client.fetch<AllSlugsQueryResult>(allSlugsQuery);

  return pages.map((page) => {
    return {
      url: `${process.env.SITE_URL}${page.slug}`,
      lastModified: page._updatedAt,
    };
  });
}
