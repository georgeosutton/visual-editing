export type InternalLinkProps = {
  text: string | null;
  slug: string | null;
  _type: "linkInternal";
  _key: string;
};

export type ExternalLinkProps = {
  text: string | null;
  url: string | null;
  newWindow: boolean | null;
  _key: string;
  _type: "linkExternal";
};

export type MenuItem = InternalLinkProps | ExternalLinkProps;

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
  _type: "pageHero" | "textMedia";
}
