import { ComponentType } from "react";
import PageHero from "./blocks/PageHero";
import { SanityBlock } from "@/types";
import Gallery from "./blocks/Gallery";

const blocks: Record<string, ComponentType<any>> = {
  pageHero: PageHero,
  gallery: Gallery,
};

const PageBuilder = (props: { block: SanityBlock }) => {
  const { block } = props;
  const type = block?._type;

  if (typeof blocks[type] !== "undefined") {
    const BlockComponent = blocks[type];
    return <BlockComponent {...block} />;
  }

  return (
    <p className="py-8 text-center text-xl font-bold">
      The component <strong>{type}</strong> has not been created yet.
    </p>
  );
};

export default PageBuilder;
