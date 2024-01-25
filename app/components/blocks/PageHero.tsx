import { baseUrl, urlForImage } from "@/sanity/lib/image";
import React from "react";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import { Image as ImageType, PortableTextBlock } from "sanity";
import Image from "next/image";
import { SanityImage } from "sanity-image";
import { SanityImageProps } from "@/types";

const components: PortableTextComponents = {
  block: {
    h1: ({ children }) => {
      return (
        <h1 className="px-1 text-center text-6xlHeading text-white md:text-7xlHeading ">
          {children}
        </h1>
      );
    },
  },
};

export default function PageHero(props: {
  images: SanityImageProps[];
  text: PortableTextBlock[];
}) {
  const { images, text } = props;
  return (
    <div className="grid overflow-hidden">
      <div className="relative z-20 col-start-1 row-start-1 flex h-full items-center justify-center text-5xl">
        <PortableText value={text} components={components} />
      </div>
      <div className="relative z-10 col-start-1 row-start-1 h-full w-full bg-darkGradientHorizonal md:bg-darkGradientVertical " />
      {images && (
        <div className="col-start-1 row-start-1 grid md:grid-cols-2">
          {images.map((image, index) => {
            if (!image?.id) {
              return null;
            }

            return (
              <SanityImage
                baseUrl={baseUrl}
                id={image.id}
                key={index}
                className="w-full object-cover relative md:h-[70vh] h-[40vh]"
                sizes="(min-width: 768px) 50vw, 100vw"
                alt=""
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
