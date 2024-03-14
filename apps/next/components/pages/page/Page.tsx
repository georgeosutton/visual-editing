import React from "react";

import PageBuilder from "../../PageBuilder";

import type { PagePayload } from "@/types";

export interface PageProps {
  data: PagePayload | null;
}

export function Page({ data }: PageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const { blocks } = data ?? {};

  return blocks?.map((block) => {
    return <PageBuilder key={block._key} block={block} />;
  });
}

export default Page;
