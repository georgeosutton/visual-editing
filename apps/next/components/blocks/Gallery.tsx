import React from "react";
import { PortableTextBlock } from "sanity";
import { SanityImageProps } from "@/types";

export default function Gallery(props: {
  images: SanityImageProps[];
  text: PortableTextBlock[];
  _type: "gallery";
}) {
  const { images, text } = props;
  return <div>Gallery</div>;
}
