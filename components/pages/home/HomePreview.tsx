"use client";

import { type QueryResponseInitial } from "@sanity/react-loader";

import { homePageQuery } from "@/sanity/lib/queries";
import { useQuery } from "@/sanity/loader/useQuery";
import Page from "../page/Page";
import { PageQueryResult } from "@/typegen/sanity.fragment-types";

type Props = {
  initial: QueryResponseInitial<PageQueryResult>;
};

export default function HomePagePreview(props: Props) {
  const { initial } = props;
  const { data } = useQuery<PageQueryResult>(homePageQuery, {}, { initial });

  if (!data) {
    return (
      <div className="text-center">
        Please start editing your Home document to see the preview!
      </div>
    );
  }

  return <Page data={data} />;
}
