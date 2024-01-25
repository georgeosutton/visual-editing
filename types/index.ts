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

type CropData = {
  bottom: number;
  left: number;
  right: number;
  top: number;
};

export interface SanityImageProps {
  _key?: string;
  id?: string;
  hotspot?: {
    x: number;
    y: number;
  };
  crop?: CropData;
  lqip?: string;
  alt?: string;
}
