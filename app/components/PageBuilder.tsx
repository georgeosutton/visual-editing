import PageHero from "./blocks/PageHero";

const blocks: Record<string, React.ComponentType<any>> = {
  pageHero: PageHero,
};

const PageBuilder = (props: { block: { _type: string } }) => {
  const { block } = props;
  const type = block?._type;

  if (typeof blocks[type] !== "undefined") {
    const Block = blocks[type];
    return <Block {...block} />;
  }

  return (
    <p className="py-8 text-center text-xl font-bold">
      The component <strong>{type}</strong> has not been created yet.
    </p>
  );
};

export default PageBuilder;
