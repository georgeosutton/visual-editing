"use client";

import { useSettings } from "@/sanity/loader/useQuery";

import HeaderLayout from "./HeaderLayout";

type Props = {
  initial: Parameters<typeof useSettings>[0];
};

export default function NavbarPreview(props: Props) {
  const { data } = useSettings(props.initial);

  return <HeaderLayout data={data} />;
}
