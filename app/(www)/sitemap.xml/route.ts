import { defineQuery } from "next-sanity";
import { getServerSideSitemap } from "next-sitemap";

import { sanityFetch } from "@/sanity/lib/live";

export async function GET() {
  const allSlugsSitemapQuery = defineQuery(
    `*[_type in ["page", "home"] && defined(slug.current)][]{"slug":slug.current, _updatedAt}`,
  );

  const { data: pages } = await sanityFetch({
    query: allSlugsSitemapQuery,
    stega: false,
    perspective: "published",
  });

  return getServerSideSitemap(
    pages.map((page) => {
      return {
        loc: `${process.env.SITE_URL}${page.slug}`,
        lastMod: page._updatedAt,
      };
    }),
  );
}
