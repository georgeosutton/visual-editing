import dynamic from "next/dynamic";
import { draftMode } from "next/headers";
import Link from "next/link";

import { studioUrl } from "@/sanity/lib/api";
import { loadHomePage } from "@/sanity/loader/loadQuery";
import Page from "../components/pages/page/Page";
const HomePagePreview = dynamic(
  () => import("@/app/components/pages/home/HomePreview"),
);

export default async function IndexRoute() {
  const initial = await loadHomePage();

  if (draftMode().isEnabled) {
    return <HomePagePreview initial={initial} />;
  }

  if (!initial.data) {
    return (
      <div className="text-center">
        You don&rsquo;t have a homepage yet,{" "}
        <Link href={`${studioUrl}/desk/home`} className="underline">
          create one now
        </Link>
        !
      </div>
    );
  }

  return <Page data={initial.data} />;
}
