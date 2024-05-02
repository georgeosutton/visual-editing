import React from "react";

import { LinkExternalType } from "@/typegen/sanity.fragment-types";

const ExternalLink = React.forwardRef<
  HTMLAnchorElement,
  LinkExternalType & React.AnchorHTMLAttributes<HTMLAnchorElement>
>(function LinkComponent(props, forwardedRef) {
  const { text, url, newWindow, ...rest } = props;

  if (!url) {
    return <div>Missing URL</div>;
  }

  return (
    <a
      ref={forwardedRef}
      href={url}
      target={newWindow ? "_blank" : undefined}
      rel={newWindow ? "noopener noreferrer" : undefined}
      {...rest}
    >
      {text}
    </a>
  );
});

export default ExternalLink;
