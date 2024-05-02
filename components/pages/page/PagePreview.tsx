"use client";

import { type QueryResponseInitial } from "@sanity/react-loader";

import { pageQuery } from "@/sanity/lib/queries";
import { useQuery } from "@/sanity/loader/useQuery";
import { PageQueryResult } from "@/typegen/sanity.fragment-types";

import Page from "./Page";

type Props = {
  params: { slug: string };
  initial: QueryResponseInitial<PageQueryResult>;
};

export default function PagePreview(props: Props) {
  const { params, initial } = props;
  const { data } = useQuery<PageQueryResult>(pageQuery, params, {
    initial,
  });

  return <Page data={data} />;
}
