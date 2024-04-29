import { cn } from "@/lib/utils";
import { PortableTextMarkComponentProps } from "@portabletext/react";

type Props = PortableTextMarkComponentProps & {
  value?: PortableTextMarkComponentProps["value"] & {
    tel?: string;
  };
};

const LinkTelAnnotation = ({ children, value }: Props) => {
  if (!value?.slug) {
    return <>{children}</>;
  }
  return (
    <a
      className={cn(
        "underline transition-opacity duration-200", //
        "hover:opacity-60",
      )}
      href={`tel:${value?.tel}`}
    >
      {children}
    </a>
  );
};

export default LinkTelAnnotation;
