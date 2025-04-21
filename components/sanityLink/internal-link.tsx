import type { LinkProps } from "next/link";
import Link from "next/link";
import React from "react";

export type InternalLinkProps = {
  _type: "linkInternal";
  text?: string | null;
  slug?: string | null;
};

const InternalLink = React.forwardRef<
  HTMLAnchorElement,
  InternalLinkProps &
    Omit<LinkProps, "href"> &
    React.AnchorHTMLAttributes<HTMLAnchorElement>
>(function LinkComponent(props, forwardedRef) {
  const { text, slug, children, ...rest } = props;

  if (!slug) {
    return <div>Missing Page</div>;
  }

  return (
    <Link ref={forwardedRef} href={slug} {...rest}>
      {children ? children : text}
    </Link>
  );
});

export default InternalLink;
