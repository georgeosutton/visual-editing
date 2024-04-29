import LinkEmailAnnotation from "./LinkEmail";
import LinkExternalAnnotation from "./LinkExternal";
import LinkInternalAnnotation from "./LinkInternal";
import LinkTelAnnotation from "./LinkTel";

const Annotations = {
  annotationLinkExternal: LinkExternalAnnotation,
  annotationLinkInternal: LinkInternalAnnotation,
  annotationLinkEmail: LinkEmailAnnotation,
  annotationLinkTel: LinkTelAnnotation,
};

export default Annotations;
