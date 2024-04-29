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
