import { sanityFetch } from "@/sanity/lib/live";
import { settingsQuery } from "@/sanity/lib/queries";

import HeaderLayout from "./HeaderLayout";

export async function Header() {
  const { data } = await sanityFetch({ query: settingsQuery });

  return <HeaderLayout data={data} />;
}
