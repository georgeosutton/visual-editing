import "./globals.css";

import dynamic from "next/dynamic";
import { draftMode } from "next/headers";
import { Suspense } from "react";
import { Header } from "../components/global/header";
import { ftPolar, ivar } from "./fonts";

const VisualEditing = dynamic(() => import("@/sanity/loader/VisualEditing"));

export default async function CatchAllRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${ivar.variable} ${ftPolar.variable} page-container`}>
      <Suspense>
        <Header />
      </Suspense>
      <Suspense>{children}</Suspense>
      {draftMode().isEnabled && <VisualEditing />}
    </div>
  );
}
