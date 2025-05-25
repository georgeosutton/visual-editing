import type { LinkProps } from "next/link";
import Link from "next/link";
import React from "react";

export type InternalLinkProps = {
  _type: "linkInternal";
  text?: string | null;
  slug?: string | null;
};

const InternalLink = (
  props: InternalLinkProps &
    Omit<LinkProps, "href"> &
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
) => {
  const { text, slug, children, ...rest } = props;

  if (!slug) {
    return <div>Missing Page</div>;
  }

  return (
    <Link href={slug} {...rest}>
      {children ? children : text}
    </Link>
  );
};

export default InternalLink;
