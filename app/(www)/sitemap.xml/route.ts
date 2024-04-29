import { client } from "@/sanity/lib/client";
import { AllSlugsQueryResult } from "@/typegen/sanity.fragment-types";
import { groq } from "next-sanity";
import { getServerSideSitemap } from "next-sitemap";

const usingCdn = client.config().useCdn;

export async function GET() {
  const allSlugsQuery = groq`*[_type in ["page", "home"] && defined(slug.current)][]{"slug":slug.current, _updatedAt}`;

  let revalidate: NextFetchRequestConfig["revalidate"] = 0;

  if (!usingCdn) {
    revalidate = false;
  } else if (usingCdn) {
    revalidate = 60;
  }

  const pages = await client.fetch<AllSlugsQueryResult>(
    allSlugsQuery,
    {},
    { next: { revalidate, tags: ["sitemap"] } },
  );

  return getServerSideSitemap(
    pages.map((page) => {
      return {
        loc: `${process.env.SITE_URL}${page.slug}`,
        lastMod: page._updatedAt,
      };
    }),
  );
}
