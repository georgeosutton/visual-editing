"use client";

import React from "react";

import { useSettings } from "@/sanity/loader/useQuery";

import HeaderLayout from "./HeaderLayout";

type Props = {
  initial: Parameters<typeof useSettings>[0];
};

export default function NavbarPreview(props: Props) {
  const { initial } = props;
  const { data } = useSettings(initial);

  return <HeaderLayout data={data} />;
}
