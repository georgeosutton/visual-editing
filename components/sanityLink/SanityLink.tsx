import React, { ForwardRefExoticComponent } from "react";
import { ExternalLinkProps, InternalLinkProps } from "@/types";
import ExternalLink from "./ExternalLink";
import InternalLink from "./InternalLink";

type SanityLinkType = InternalLinkProps | ExternalLinkProps;

const links = {
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
      const Link = links[type] as ForwardRefExoticComponent<
        SanityLinkType & React.RefAttributes<HTMLAnchorElement>
      >;

      return <Link ref={forwardedRef} {...link} {...rest} />;
    }

    return <div>Link type {type} missing</div>;
  },
);

export default SanityLink;
