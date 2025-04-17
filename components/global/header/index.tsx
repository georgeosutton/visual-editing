import { sanityFetch } from "@/sanity/lib/live";
import { settingsQuery } from "@/sanity/lib/queries";

import HeaderLayout from "./header";

export async function Header() {
  const { data } = await sanityFetch({ query: settingsQuery });

  return <HeaderLayout data={data} />;
}
