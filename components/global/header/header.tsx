import Link from "next/link";

import { SettingsQueryResult } from "@/typegen/sanity.fragment-types";

import SanityLink from "../../sanityLink/sanity-link";

type HeaderProps = {
  data: SettingsQueryResult;
};
export default function HeaderLayout(props: HeaderProps) {
  const { data } = props;
  const menuItems = data?.menuItems;

  return (
    <header>
      <div className="container mx-auto h-16 px-8 lg:h-24">
        <div className="flex h-full items-center justify-between gap-6">
          <Link href="/" className="mb-0.5 shrink md:mb-1">
            Logo
          </Link>
          <nav className="flex gap-10">
            {menuItems?.map((menuItem) => {
              return (
                <SanityLink
                  link={menuItem}
                  key={menuItem._key}
                  className="whitespace-nowrap text-[1.3125rem] font-light text-primary md:text-[1.875rem]"
                />
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
