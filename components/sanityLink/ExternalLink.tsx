import React from "react";

export type ExternalLinkProps = {
  _type: "linkExternal";
  text?: string | null;
  url?: string | null;
  newWindow?: boolean | null;
};

const ExternalLink = React.forwardRef<
  HTMLAnchorElement,
  ExternalLinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>
>(function LinkComponent(props, forwardedRef) {
  const { text, url, newWindow, children, ...rest } = props;

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
      {children ? children : text}
    </a>
  );
});

export default ExternalLink;
