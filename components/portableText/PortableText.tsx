import { cn } from "@/lib/utils";
import { PortableTextComponents, PortableTextProps } from "@portabletext/react";
import { PortableText as PortableTextReact } from "@portabletext/react";
import { useMemo } from "react";
import LinkExternalAnnotation from "./annotations/LinkExternal";
import LinkInternalAnnotation from "./annotations/LinkInternal";
import LinkEmailAnnotation from "./annotations/LinkEmail";
import LinkTelAnnotation from "./annotations/LinkTel";

type Props = {
  value: PortableTextProps["value"];
  className?: string;
  marks?: PortableTextComponents["marks"];
};

export default function PortableText({ value, className, marks }: Props) {
  const portableText = useMemo(() => {
    const components: PortableTextComponents = {
      list: {
        bullet: ({ children }) => <ul>{children}</ul>,
      },
      marks: {
        annotationLinkExternal: LinkExternalAnnotation,
        annotationLinkInternal: LinkInternalAnnotation,
        annotationLinkEmail: LinkEmailAnnotation,
        annotationLinkTel: LinkTelAnnotation,
        ...marks,
      },
    };
    return (
      <div className={cn(className)}>
        <PortableTextReact value={value} components={components} />
      </div>
    );
  }, [value, marks, className]);

  return portableText;
}
