import type { PagePayload } from "@/types";
import Link from "next/link";

export interface PageProps {
  data: PagePayload | null;
}

export function Page({ data }: PageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const { title, slug } = data ?? {};

  return <div>{slug?.current && <Link href={slug.current}>{title}</Link>}</div>;
}

export default Page;
