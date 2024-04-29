import { TextMediaBlock } from "@/typegen/sanity.fragment-types";
import { PortableText } from "@portabletext/react";
import React from "react";
import SanityImage from "../SanityImage";
import { validateImage } from "@/sanity/lib/image";

export default function TextMedia(props: TextMediaBlock) {
  const { content } = props;
  return (
    <div className="container">
      {content?.map((item) => {
        if (item._type == "image") {
          const { id, key, ...imageProps } = validateImage(item);

          if (!id) {
            return null;
          }

          return (
            <div key={key}>
              <SanityImage id={id} mode="cover" {...imageProps} />
            </div>
          );
        }

        if (item._type == "textObject") {
          const { text } = item;

          return (
            <div key={item._key}>{text && <PortableText value={text} />}</div>
          );
        }
      })}
    </div>
  );
}
