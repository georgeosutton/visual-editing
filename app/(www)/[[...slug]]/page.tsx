import { Metadata } from "next";
import { notFound } from "next/navigation";

import Page from "@/components/pages/page";
import { sanityFetch } from "@/sanity/lib/live";
import { allSlugsQuery, pageQuery } from "@/sanity/lib/queries";

type Props = {
  params: { slug: string[] };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params?.slug || [];

  const queryParams = { slug: `/${slug.join("/")}` };
  const { data: page } = await sanityFetch({
    query: pageQuery,
    params: queryParams,
    stega: false,
    perspective: "published",
  });
  const seo = page?.seo;

  if (!seo) {
    return {
      alternates: {
        canonical: `/${slug.join("/")}`,
      },
    };
  }

  const { title, description, image } = seo;

  return {
    title: title,
    description: description,
    alternates: {
      canonical: `/${slug.join("/")}`,
    },
    openGraph: {
      images: image?.url
        ? {
            url: image?.url,
            width: image?.width || undefined,
            height: image?.height || undefined,
            alt: image?.alt || undefined,
          }
        : undefined,
    },
  };
}

export async function generateStaticParams() {
  const { data: pages } = await sanityFetch({
    query: allSlugsQuery,
    stega: false,
    perspective: "published",
  });

  const paths = pages
    .filter((slug) => slug != null)
    .map((slug) => ({
      slug: slug.split("/").filter((p) => p),
    }));

  return paths;
}

export default async function PageRoute({ params }: Props) {
  const slug = params?.slug || [];

  const queryParams = { slug: `/${slug.join("/")}` };
  const { data } = await sanityFetch({ query: pageQuery, params: queryParams });

  if (!data) {
    notFound();
  }

  return <Page data={data} />;
}
