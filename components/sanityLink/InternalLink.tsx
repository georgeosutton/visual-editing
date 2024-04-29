import { LinkInternalType } from "@/typegen/sanity.fragment-types";
import Link, { LinkProps } from "next/link";
import React from "react";

const InternalLink = React.forwardRef<
  HTMLAnchorElement,
  LinkInternalType &
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
