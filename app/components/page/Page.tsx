import type { PagePayload } from "@/types";

export interface PageProps {
  data: PagePayload | null;
}

export function Page({ data }: PageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const { title, slug } = data ?? {};

  return <div>{title}</div>;
}

export default Page;
