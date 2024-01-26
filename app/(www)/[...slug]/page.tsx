import { loadPage } from "@/sanity/loader/loadQuery";
import { notFound } from "next/navigation";
import { draftMode } from "next/headers";
import PagePreview from "@/app/components/pages/page/PreviewPage";
import Page from "@/app/components/pages/page/Page";

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
