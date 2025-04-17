import { sanityFetch } from "@/sanity/lib/live";
import { settingsQuery } from "@/sanity/lib/queries";

import FooterLayout from "./footer";

export async function Footer() {
  const { data } = await sanityFetch({ query: settingsQuery });

  return <FooterLayout data={data} />;
}
