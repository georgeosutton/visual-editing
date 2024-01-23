import Link from "next/link";

import type { MenuItem, SettingsPayload } from "@/types";

interface HeaderProps {
  data: SettingsPayload;
}
export default function HeaderLayout(props: HeaderProps) {
  const { data } = props;
  const menuItems = data?.menuItems || ([] as MenuItem[]);
  return (
    <div className="sticky top-0">
      <nav className="container">
        {menuItems &&
          menuItems.map(menuItem => {
            const href = menuItem?.slug;
            if (!href) {
              return null;
            }
            return (
              <Link key={menuItem._key} className="text-white" href={href}>
                {menuItem.text}
              </Link>
            );
          })}
      </nav>
    </div>
  );
}
