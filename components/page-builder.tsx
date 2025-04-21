import type { ComponentType } from "react";

import PageHero from "./blocks/page-hero";
import TextMedia from "./blocks/text-media";

export type BlockTypes = keyof typeof blocks;

export interface SanityBlock {
  _key: string;
  _type: BlockTypes;
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
    return (
      <div className="pb-14 md:pb-20 lg:pb-28">
        <BlockComponent {...block} />
      </div>
    );
  }

  return (
    <p className="py-8 text-center text-xl font-bold">
      The component <strong>{type}</strong> has not been created yet.
    </p>
  );
};

export default PageBuilder;
