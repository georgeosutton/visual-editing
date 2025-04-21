import type { ForwardRefExoticComponent } from "react";
import React from "react";

import type { ExternalLinkProps } from "./external-link";
import ExternalLink from "./external-link";
import type { InternalLinkProps } from "./internal-link";
import InternalLink from "./internal-link";

export type SanityLinkType = InternalLinkProps | ExternalLinkProps;

const links = {
  linkInternal: InternalLink,
  linkExternal: ExternalLink,
};

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  link: SanityLinkType;
};

const SanityLink = React.forwardRef<HTMLAnchorElement, LinkProps>(
  function LinkComponent(props, forwardedRef) {
    const { link, ...rest } = props;
    const type = link?._type;
    if (typeof links[type] !== "undefined") {
      const Link = links[type] as ForwardRefExoticComponent<
        SanityLinkType & React.RefAttributes<HTMLAnchorElement>
      >;

      return <Link ref={forwardedRef} {...link} {...rest} />;
    }

    return <div>Link type {type} missing</div>;
  },
);

export default SanityLink;
