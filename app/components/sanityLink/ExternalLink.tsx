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
