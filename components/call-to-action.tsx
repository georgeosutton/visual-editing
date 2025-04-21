import React from "react";

import type { ButtonProps } from "./button";
import { Button } from "./button";
import type { SanityLinkType } from "./sanityLink/sanity-link";
import SanityLink from "./sanityLink/sanity-link";

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
