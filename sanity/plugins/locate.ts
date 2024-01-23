import { map, Observable } from "rxjs";
import {
  DocumentLocationResolver,
  DocumentLocationsState,
} from "sanity/presentation";

export const locate: DocumentLocationResolver = (params, context) => {
  if (params.type === "settings") {
    return {
      message: "This document is used on all pages",
      tone: "caution",
    } satisfies DocumentLocationsState;
  }

  if (params.type === "home" || params.type === "page") {
    const doc$ = context.documentStore.listenQuery(
      `*[_id==$id || references($id)]{_type,slug,title}`,
      params,
      { perspective: "previewDrafts" }
    ) as Observable<
      | {
          _type: string;
          slug: { current: string };
          title: string | null;
        }[]
      | null
    >;
    return doc$.pipe(
      map(docs => {
        switch (params.type) {
          case "home":
            return {
              locations: [
                {
                  title:
                    docs?.find(doc => doc._type === "home")?.title || "Home",
                  href: "/",
                },
              ],
              tone: "positive",
              message: "This document is used to render the front page",
            } satisfies DocumentLocationsState;

          case "page":
            return {
              locations: docs
                ?.map(doc => {
                  const href = doc?.slug?.current;
                  return {
                    title: doc?.title || "Untitled",
                    href: href!,
                  };
                })
                .filter(doc => doc.href !== undefined),
              tone: "positive",
              message: "Visual Editing Preview",
            } satisfies DocumentLocationsState;
          default:
            return {
              message: "Unable to map document type to locations",
              tone: "critical",
            } satisfies DocumentLocationsState;
        }
      })
    );
  }

  return null;
};
