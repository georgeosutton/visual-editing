import React, { ComponentType } from "react";

import { PageBlocks } from "@/types";

import PageHero from "./blocks/PageHero";

const blocks = {
  pageHero: PageHero,
};

const PageBuilder = (props: { block: PageBlocks }) => {
  const { block } = props;
  const type = block?._type;

  if (typeof blocks[type] !== "undefined") {
    const Block = blocks[type] as ComponentType<PageBlocks>;
    return <Block {...block} />;
  }

  return (
    <p className="py-8 text-center text-xl font-bold">
      The component <strong>{type}</strong> has not been created yet.
    </p>
  );
};

export default PageBuilder;
