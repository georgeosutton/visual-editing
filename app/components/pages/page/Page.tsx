import type { PagePayload } from "@/types";
import PageBuilder from "../../PageBuilder";

export interface PageProps {
  data: PagePayload | null;
}

export function Page({ data }: PageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const { blocks } = data ?? {};

  return blocks?.map((block: { _key: string; _type: string }) => {
    return <PageBuilder key={block._key} block={block} />;
  });
}

export default Page;
