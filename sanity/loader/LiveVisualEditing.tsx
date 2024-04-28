"use client";

import { useLiveMode } from "@sanity/react-loader";
import { VisualEditing } from "next-sanity";
import React, { useEffect, useState } from "react";

import { client } from "@/sanity/lib/client";

export default function LiveVisualEditing() {
  const [stegaClient, setStegaClient] = useState(
    client.withConfig({ stega: true }),
  );
  useLiveMode({ client: stegaClient });

  useEffect(() => {
    // If not an iframe or a Vercel Preview deployment, turn off Stega
    if (process.env.NEXT_PUBLIC_VERCEL_ENV !== "preview" && window === parent) {
      setStegaClient(client.withConfig({ stega: false }));
    }
  }, []);

  return <VisualEditing />;
}
