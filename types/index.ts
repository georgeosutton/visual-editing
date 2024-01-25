export interface PagePayload {
  title?: string;
  slug?: { current?: string };
  blocks?: any;
}

export interface MenuItem {
  _type: "internalLink" | "externalLink";
  _key: string;
  slug?: string;
  text?: string;
}

export interface SettingsPayload {
  menuItems?: MenuItem[];
}

export interface SanityImageProps {
  _key?: string;
  id?: string;
  hotspot?: any;
  crop?: any;
  lqip?: string;
  alt?: string;
}
