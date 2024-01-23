import { loadPage } from "@/sanity/loader/loadQuery";
import { notFound } from "next/navigation";
import NextLink from "next/link";
import { draftMode } from "next/headers";
import PagePreview from "@/app/components/page/PreviewPage";
import Page from "@/app/components/page/Page";

export const revalidate = 90;

export default async function PageRoute({
  params,
}: {
  params: { slug: string[] };
}) {
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
