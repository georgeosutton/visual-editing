import "./globals.css";

import dynamic from "next/dynamic";
import { draftMode } from "next/headers";
import { Suspense } from "react";
import { Header } from "../components/global/Header";

const VisualEditing = dynamic(() => import("@/sanity/loader/VisualEditing"));

export default async function CatchAllRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <Suspense>{children}</Suspense>
      {draftMode().isEnabled && <VisualEditing />}
    </>
  );
}
