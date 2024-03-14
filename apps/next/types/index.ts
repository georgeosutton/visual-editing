import { PortableTextBlock } from "sanity";

export type PageHeroProps = {
  images?: SanityImageProps[];
  text?: PortableTextBlock[];
  _type: "pageHero";
  _key: string;
};

export type PageBlocks = PageHeroProps;

export interface PagePayload {
  title?: string;
  slug?: { current?: string };
  blocks?: PageBlocks[];
  seo?: {
    title?: string;
    description?: string;
    image?: SanityImageProps;
  };
}

export type InternalLinkProps = {
  text?: string;
  slug?: string;
  _type: "internalLink";
  _key?: string;
};

export type ExternalLinkProps = {
  text?: string;
  url?: string;
  newWindow?: boolean;
  _key?: string;
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
  _key?: string;
  id?: string;
  hotspot?: {
    x: number;
    y: number;
  };
  crop?: CropData;
  preview?: string;
  title?: string;
  description?: string;
  altText?: string;
  height: number;
  url: string;
  width: number;
}
