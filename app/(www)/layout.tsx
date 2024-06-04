import "./globals.css";

import dynamic from "next/dynamic";
import { draftMode } from "next/headers";
import { Suspense } from "react";

import { Footer } from "@/components/global/footer";

import { Header } from "../../components/global/header";
import { ftPolar, ivar } from "./fonts";

const VisualEditing = dynamic(
  () => import("@/sanity/loader/LiveVisualEditing"),
);

export const metadata = {
  metadataBase: new URL(
    process.env.SITE_URL ||
      `https://${process.env.VERCEL_URL}` ||
      `http://localhost:${process.env.PORT || 3000}`,
  ),
};

export default function CatchAllRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${ivar.variable} ${ftPolar.variable} page-container`}>
      <Suspense>
        <Header />
      </Suspense>
      <main>
        <Suspense>{children}</Suspense>
      </main>
      <Suspense>
        <Footer />
      </Suspense>
      {draftMode().isEnabled && <VisualEditing />}
    </div>
  );
}
