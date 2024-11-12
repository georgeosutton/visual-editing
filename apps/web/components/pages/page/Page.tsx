import { PageQueryResult } from "@/typegen/sanity.fragment-types";

import PageBuilder, { SanityBlock } from "../../PageBuilder";

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
