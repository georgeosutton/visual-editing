import Link, { LinkProps } from "next/link";
import React from "react";

import { InternalLinkProps } from "@/types";

const InternalLink = React.forwardRef<
  HTMLAnchorElement,
  InternalLinkProps &
    Omit<LinkProps, "href"> &
    React.AnchorHTMLAttributes<HTMLAnchorElement>
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
