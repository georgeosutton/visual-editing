"use client";

import { type QueryResponseInitial } from "@sanity/react-loader";
import React from "react";

import { homePageQuery } from "@/sanity/lib/queries";
import { useQuery } from "@/sanity/loader/useQuery";
import { PagePayload } from "@/types";

import Page from "../page/Page";

type Props = {
  initial: QueryResponseInitial<PagePayload | null>;
};

export default function HomePagePreview(props: Props) {
  const { initial } = props;
  const { data } = useQuery<PagePayload | null>(homePageQuery, {}, { initial });

  if (!data) {
    return (
      <div className="text-center">
        Please start editing your Home document to see the preview!
      </div>
    );
  }

  return <Page data={data} />;
}
