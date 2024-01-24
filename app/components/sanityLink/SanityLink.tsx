import React from "react";

import InternalLink, { InternalLinkProps } from "./InternalLink";
import ExternalLink, { ExternalLinkProps } from "./ExternalLink";

type SanityLinkType = InternalLinkProps | ExternalLinkProps;

const links: Record<string, React.ComponentType<any>> = {
  internalLink: InternalLink,
  externalLink: ExternalLink,
};

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  link: SanityLinkType;
};

const SanityLink = React.forwardRef<HTMLAnchorElement, LinkProps>(
  function LinkComponent(props, forwardedRef) {
    const { link, ...rest } = props;
    const type = link?._type;
    if (typeof links[type] !== "undefined") {
      const Link = links[type];
      return <Link ref={forwardedRef} {...link} {...rest} />;
    }

    return <a href="#">Link type {type} missing</a>;
  }
);

export default SanityLink;
