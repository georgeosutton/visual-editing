import { Metadata } from "next";
import dynamic from "next/dynamic";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";

import Page from "@/components/pages/page/Page";
import { client } from "@/sanity/lib/client";
import { allSlugsQuery } from "@/sanity/lib/queries";
import { loadPage } from "@/sanity/loader/loadQuery";

const PagePreview = dynamic(
  () => import("@/components/pages/page/PagePreview"),
);

type Props = {
  params: { slug: string[] };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params?.slug || [];
  const { data: page } = await loadPage(slug);
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
  const pages = await client.fetch<string[]>(allSlugsQuery);

  const paths = pages.map((slug: string) => ({
    slug: slug.split("/").filter((p) => p),
  }));

  return paths;
}

export default async function PageRoute({ params }: Props) {
  const slug = params?.slug || [];
  const initial = await loadPage(slug);

  if (draftMode().isEnabled) {
    return (
      <PagePreview params={{ slug: `/${slug.join("/")}` }} initial={initial} />
    );
  }

  if (!initial.data) {
    notFound();
  }

  return <Page data={initial.data} />;
}
