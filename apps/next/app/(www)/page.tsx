import dynamic from "next/dynamic";
import { draftMode } from "next/headers";
import Link from "next/link";
import { studioUrl } from "@/sanity/lib/api";
import { loadHomePage } from "@/sanity/loader/loadQuery";
import Page from "@/components/pages/page/Page";
import { Metadata } from "next";

const HomePagePreview = dynamic(
  () => import("@/components/pages/home/HomePreview"),
);

export async function generateMetadata(): Promise<Metadata> {
  const { data: page } = await loadHomePage();
  const { seo = {} } = page ?? {};
  const { title, description, image } = seo;

  return {
    title: title,
    description: description,
    alternates: {
      canonical: "/",
    },
    openGraph: {
      images: image?.url
        ? {
            url: image?.url,
            width: image?.width,
            height: image?.height,
            alt: image?.altText,
          }
        : undefined,
    },
  };
}

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
      </div>
    );
  }

  return <Page data={initial.data} />;
}
