import type { PageQueryResult } from "@/typegen/sanity.fragment-types";

import type { SanityBlock } from "../page-builder";
import PageBuilder from "../page-builder";

export interface PageProps {
  data: PageQueryResult;
}

export function Page({ data }: PageProps) {
  const blocks = data?.blocks as SanityBlock[];

  return blocks?.map((block) => {
    return <PageBuilder key={block._key} block={block} />;
  });
}

export default Page;
