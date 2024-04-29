import { loadPage } from "@/sanity/loader/loadQuery";
import { notFound } from "next/navigation";
import { draftMode } from "next/headers";
import Page from "@/components/pages/page/Page";
import dynamic from "next/dynamic";
import { Metadata } from "next";
import { client } from "@/sanity/lib/client";

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
  const allSlugsQuery = `//groq *[_type in ["page", "home"] && defined(slug.current)][].slug.current`;
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
