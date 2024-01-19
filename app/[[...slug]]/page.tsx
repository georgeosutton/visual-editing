import { loadPage } from "@/sanity/loader/loadQuery";
import { notFound } from "next/navigation";

export const revalidate = 90;

export default async function PageRoute({
  params,
}: {
  params: { slug: string[] };
}) {
  const slug = params?.slug || [];
  const initial = await loadPage(slug);

  if (!initial.data) {
    notFound();
  }

  return <div>{initial.data.title}</div>;
}
