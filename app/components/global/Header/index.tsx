import dynamic from "next/dynamic";
import { draftMode } from "next/headers";

import { loadSettings } from "@/sanity/loader/loadQuery";

import HeaderLayout from "./HeaderLayout";
const HeaderPreview = dynamic(() => import("./HeaderPreview"));

export async function Header() {
  const initial = await loadSettings();

  if (draftMode().isEnabled) {
    return <HeaderPreview initial={initial} />;
  }

  return <HeaderLayout data={initial.data} />;
}
