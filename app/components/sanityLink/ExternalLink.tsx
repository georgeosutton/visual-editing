import React from "react";

export type ExternalLinkProps = {
  text?: string;
  url?: string;
  newWindow?: boolean;
  _key?: string;
  _type: "externalLink";
};

const ExternalLink = React.forwardRef<
  HTMLAnchorElement,
  ExternalLinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>
>(function LinkComponent(props, forwardedRef) {
  const { text, url, newWindow, children, ...rest } = props;

  if (!url) {
    return <a href="#">Missing URL</a>;
  }

  return (
    <a ref={forwardedRef} href={url} {...rest}>
      {text}
    </a>
  );
});

export default ExternalLink;
