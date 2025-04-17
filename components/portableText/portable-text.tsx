import {
  PortableTextBlockComponent,
  PortableTextComponents,
  PortableTextListComponent,
  PortableTextProps,
} from "@portabletext/react";
import { PortableText as PortableTextReact } from "@portabletext/react";
import { useMemo } from "react";

import { cn } from "@/lib/utils";

import LinkEmailAnnotation from "./annotations/link-email";
import LinkExternalAnnotation from "./annotations/link-external";
import LinkInternalAnnotation from "./annotations/link-internal";
import LinkTelAnnotation from "./annotations/link-tel";

type Props = {
  block?: Record<string, PortableTextBlockComponent>;
  value: PortableTextProps["value"];
  className?: string;
  marks?: PortableTextComponents["marks"];
  list?: Record<string, PortableTextListComponent>;
};

export default function PortableText({
  value,
  className,
  marks,
  block,
  list,
}: Props) {
  const portableText = useMemo(() => {
    const components: PortableTextComponents = {
      block,
      list: {
        bullet: ({ children }) => <ul>{children}</ul>,
        ...list,
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
      <div className={cn("flex flex-col gap-y-6", className)}>
        <PortableTextReact value={value} components={components} />
      </div>
    );
  }, [value, marks, className, block, list]);

  return portableText;
}
