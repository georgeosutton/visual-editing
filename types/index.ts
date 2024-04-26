export type InternalLinkProps = {
  text: string | null;
  slug: string | null;
  _type: "internalLink";
  _key: string;
};

export type ExternalLinkProps = {
  text: string | null;
  url: string | null;
  newWindow: boolean | null;
  _key: string;
  _type: "externalLink";
};

export type MenuItem = InternalLinkProps | ExternalLinkProps;

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
  baseUrl: string;
  id?: string | null;
  key: string;
  hotspot?: {
    x: number;
    y: number;
  };
  crop?: CropData;
  preview?: string;
  title?: string;
  description?: string;
  alt?: string;
  height: number;
  url: string;
  width: number;
}

export interface SanityBlock {
  _key: string;
  _type: string;
}
