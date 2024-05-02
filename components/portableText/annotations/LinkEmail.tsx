import type { PortableTextMarkComponentProps } from "@portabletext/react";

import { cn } from "@/lib/utils";

type Props = PortableTextMarkComponentProps & {
  value?: PortableTextMarkComponentProps["value"] & {
    email: string;
  };
};

const LinkEmailAnnotation = ({ children, value }: Props) => {
  if (!value?.email) {
    return <>{children}</>;
  }

  return (
    <a
      className={cn(
        "underline transition-opacity duration-200", //
        "hover:opacity-60",
      )}
      href={`mailto:${value?.email}`}
    >
      {children}
    </a>
  );
};

export default LinkEmailAnnotation;
