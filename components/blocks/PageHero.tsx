import { PortableText, PortableTextComponents } from "@portabletext/react";
import React from "react";

import { validateImage } from "@/sanity/lib/image";
import { PageHeroBlock } from "@/typegen/sanity.fragment-types";

import SanityImage from "../SanityImage";

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

export default function PageHero(props: PageHeroBlock) {
  const { images, text } = props;
  return (
    <div className="grid overflow-hidden">
      {text && (
        <div className="relative z-20 col-start-1 row-start-1 flex h-full items-center justify-center text-5xl">
          <PortableText value={text} components={components} />
        </div>
      )}
      <div className="relative z-10 col-start-1 row-start-1 size-full bg-darkGradientHorizonal md:bg-darkGradientVertical " />
      {images && (
        <div className="col-start-1 row-start-1 grid md:grid-cols-2">
          {images.map((imageData) => {
            const { id, ...imageProps } = validateImage(imageData);

            if (!id) {
              return null;
            }

            return (
              <SanityImage
                id={id}
                key={imageData._key}
                className="relative h-[40vh] w-full object-cover md:h-[70vh]"
                sizes="(min-width: 768px) 50vw, 100vw"
                mode="cover"
                loading="eager"
                {...imageProps}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
