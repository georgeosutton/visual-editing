import type { PortableTextMarkComponentProps } from "@portabletext/react";
import Link from "next/link";

import { cn } from "@/lib/utils";

type Props = PortableTextMarkComponentProps & {
  value?: PortableTextMarkComponentProps["value"] & {
    slug?: string;
  };
};

export default function LinkInternalAnnotation({ children, value }: Props) {
  if (!value?.slug) {
    return <>{children}</>;
  }

  return (
    <Link
      className={cn(
        "inline-flex items-center underline transition-opacity duration-200",
        "hover:opacity-60",
      )}
      href={value?.slug}
    >
      {children}
    </Link>
  );
}
