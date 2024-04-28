"use client";

import { useLiveMode } from "@sanity/react-loader";
import { VisualEditing } from "next-sanity";
import React, { useEffect, useState } from "react";

import { client } from "@/sanity/lib/client";

// Always enable stega in Live Mode
const stegaClient = client.withConfig({ stega: true });

export default function LiveVisualEditing() {
  const [showOverlays, setShowOverlays] = useState(true);
  useLiveMode({ client: stegaClient });

  useEffect(() => {
    // If not an iframe or a Vercel Preview deployment.
    if (process.env.NEXT_PUBLIC_VERCEL_ENV !== "preview" && window === parent) {
      setShowOverlays(false);
    }
  }, []);

  if (!showOverlays) {
    return null;
  }

  return <VisualEditing />;
}
