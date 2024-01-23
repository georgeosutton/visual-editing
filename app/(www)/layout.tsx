import "./globals.css";

import { Viewport } from "next";
import dynamic from "next/dynamic";
import { draftMode } from "next/headers";
import { Suspense } from "react";

const VisualEditing = dynamic(() => import("@/sanity/loader/VisualEditing"));

export const viewport: Viewport = {
  themeColor: "#000",
};

export default async function CatchAllRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Suspense>{children}</Suspense>
      {draftMode().isEnabled && <VisualEditing />}
    </>
  );
}
