import { ComponentType } from "react";

import PageHero from "./blocks/PageHero";
import TextMedia from "./blocks/TextMedia";

export interface SanityBlock {
  _key: string;
  _type: keyof typeof blocks;
}

const blocks = {
  pageHero: PageHero,
  textMedia: TextMedia,
};

const PageBuilder = (props: { block: SanityBlock }) => {
  const { block } = props;
  const type = block?._type;

  if (typeof blocks[type] !== "undefined") {
    const BlockComponent = blocks[type] as ComponentType<SanityBlock>;
    return <BlockComponent {...block} />;
  }

  return (
    <p className="py-8 text-center text-xl font-bold">
      The component <strong>{type}</strong> has not been created yet.
    </p>
  );
};

export default PageBuilder;
