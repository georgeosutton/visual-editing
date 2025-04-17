import "./globals.css";

import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity";
import { Suspense } from "react";

import { Footer } from "@/components/global/footer";
import { SanityLive } from "@/sanity/lib/live";

import { Header } from "../../components/global/header";
import { handleError } from "./client-functions";
import { ftPolar, ivar } from "./fonts";

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
      <SanityLive onError={handleError} />
      {draftMode().isEnabled && (
        <>
          <VisualEditing />
        </>
      )}
    </div>
  );
}
