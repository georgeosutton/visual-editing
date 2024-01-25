import Link from "next/link";
import React from "react";

export type InternalLinkProps = {
  text?: string;
  slug?: string;
  _type: "internalLink";
};

const InternalLink = React.forwardRef<
  HTMLAnchorElement,
  InternalLinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>
>(function LinkComponent(props, forwardedRef) {
  const { text, slug, ...rest } = props;

  if (!slug) {
    return <div>Missing Page</div>;
  }

  return (
    <Link ref={forwardedRef} href={slug} {...rest}>
      {text}
    </Link>
  );
});

export default InternalLink;
