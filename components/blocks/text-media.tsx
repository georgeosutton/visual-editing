import {
  PortableTextBlockComponent,
  PortableTextListComponent,
} from "@portabletext/react";
import React from "react";

import { validateImage } from "@/sanity/lib/image";
import { TextMediaBlock } from "@/typegen/sanity.fragment-types";

import PortableText from "../portableText/portable-text";
import SanityImage from "../sanity-image";

const block: Record<string, PortableTextBlockComponent> = {
  h1: ({ children }) => {
    return <h1 className="text-5xl">{children}</h1>;
  },
  h2: ({ children }) => {
    return <h2 className="text-5xl">{children}</h2>;
  },
  h3: ({ children }) => {
    return <h3 className="text-5xl">{children}</h3>;
  },
  normal: ({ children }) => {
    return <p className="">{children}</p>;
  },
};

const list: Record<string, PortableTextListComponent> = {
  bullet: ({ children }) => (
    <ul className="list-inside list-disc">{children}</ul>
  ),
};

export default function TextMedia(props: TextMediaBlock) {
  const { content } = props;
  return (
    <div className="container grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-20">
      {content?.map((item) => {
        if (item._type == "image") {
          const { id, ...imageProps } = validateImage(item);

          if (!id) {
            return null;
          }

          return (
            <div key={item._key}>
              <SanityImage
                {...imageProps}
                className="h-auto w-full"
                width={1200}
                height={1200}
                id={id}
                mode="cover"
              />
            </div>
          );
        }

        if (item._type == "textObject") {
          const { text } = item;
          if (!text) {
            return null;
          }
          return (
            <PortableText
              className="flex flex-col justify-center text-center"
              block={block}
              list={list}
              key={item._key}
              value={text}
            />
          );
        }
      })}
    </div>
  );
}
