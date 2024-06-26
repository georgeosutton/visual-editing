import React from "react";

import { Button, ButtonProps } from "./Button";
import SanityLink, { SanityLinkType } from "./sanityLink/SanityLink";

export default function CallToAction({
  link,
  variant,
  className,
}: {
  link: SanityLinkType;
  variant?: ButtonProps["variant"];
  className?: string;
}) {
  if (!link) {
    return null;
  }

  return (
    <Button asChild variant={variant} className={className}>
      <SanityLink link={link}>{link?.text}</SanityLink>
    </Button>
  );
}
