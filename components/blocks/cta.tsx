import type { PortableTextComponents } from "@portabletext/react";
import { PortableText } from "@portabletext/react";

import { Button } from "@/components/button";
import type { CtaBlock } from "@/typegen/sanity.fragment-types";

import SanityLink from "../sanityLink/sanity-link";

const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => {
      return <h2 className="text-3xl md:text-4xl">{children}</h2>;
    },
    h3: ({ children }) => {
      return <h3 className="text-3xl md:text-4xl">{children}</h3>;
    },
  },
};

export function Cta(props: CtaBlock) {
  const { text, ctas } = props;
  console.log(props);

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 text-center md:px-6">
        <div className="mx-auto max-w-3xl space-y-6">
          {text && <PortableText components={components} value={text} />}
          <div className="flex flex-wrap justify-center gap-4 pt-4 sm:flex-row">
            {ctas?.map((cta) => {
              return (
                <Button asChild key={cta._key}>
                  {cta?.link && <SanityLink link={cta?.link?.[0]} />}
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
