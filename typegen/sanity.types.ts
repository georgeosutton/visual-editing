/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: "sanity.imagePaletteSwatch";
  background?: string;
  foreground?: string;
  population?: number;
  title?: string;
};

export type SanityImagePalette = {
  _type: "sanity.imagePalette";
  darkMuted?: SanityImagePaletteSwatch;
  lightVibrant?: SanityImagePaletteSwatch;
  darkVibrant?: SanityImagePaletteSwatch;
  vibrant?: SanityImagePaletteSwatch;
  dominant?: SanityImagePaletteSwatch;
  lightMuted?: SanityImagePaletteSwatch;
  muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
  _type: "sanity.imageDimensions";
  height?: number;
  width?: number;
  aspectRatio?: number;
};

export type SanityFileAsset = {
  _id: string;
  _type: "sanity.fileAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  source?: SanityAssetSourceData;
};

export type Geopoint = {
  _type: "geopoint";
  lat?: number;
  lng?: number;
  alt?: number;
};

export type TextMedia = {
  _type: "textMedia";
  content?: Array<
    | {
        asset?: {
          _ref: string;
          _type: "reference";
          _weak?: boolean;
          [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
        };
        hotspot?: SanityImageHotspot;
        crop?: SanityImageCrop;
        _type: "image";
        _key: string;
      }
    | {
        text?: Array<{
          children?: Array<{
            marks?: Array<string>;
            text?: string;
            _type: "span";
            _key: string;
          }>;
          style?: "h1" | "h2" | "h3" | "normal";
          listItem?: "bullet";
          markDefs?: Array<
            | ({
                _key: string;
              } & AnnotationLinkInternal)
            | ({
                _key: string;
              } & AnnotationLinkExternal)
          >;
          level?: number;
          _type: "block";
          _key: string;
        }>;
        _type: "textObject";
        _key: string;
      }
  >;
};

export type PlaceholderString = string;

export type LinkExternal = {
  _type: "linkExternal";
  text?: string;
  url?: string;
  newWindow?: boolean;
};

export type LinkInternal = {
  _type: "linkInternal";
  reference?:
    | {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "page";
      }
    | {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "home";
      };
  text?: string;
};

export type PageHero = {
  _type: "pageHero";
  text?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "h1" | "h2" | "normal";
    listItem?: never;
    markDefs?: null;
    level?: number;
    _type: "block";
    _key: string;
  }>;
  images?: Array<{
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
    _key: string;
  }>;
};

export type Settings = {
  _id: string;
  _type: "settings";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  menuItems?: Array<
    | ({
        _key: string;
      } & LinkInternal)
    | ({
        _key: string;
      } & LinkExternal)
  >;
  footerModules?: Array<{
    text?: Array<{
      children?: Array<{
        marks?: Array<string>;
        text?: string;
        _type: "span";
        _key: string;
      }>;
      style?: "h3" | "normal";
      listItem?: "bullet";
      markDefs?: Array<
        | ({
            _key: string;
          } & AnnotationLinkInternal)
        | ({
            _key: string;
          } & AnnotationLinkExternal)
        | ({
            _key: string;
          } & AnnotationLinkEmail)
        | ({
            _key: string;
          } & AnnotationLinkTel)
      >;
      level?: number;
      _type: "block";
      _key: string;
    }>;
    _type: "textObject";
    _key: string;
  }>;
};

export type AnnotationLinkTel = {
  _type: "annotationLinkTel";
  tel?: string;
};

export type AnnotationLinkInternal = {
  _type: "annotationLinkInternal";
  reference?:
    | {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "page";
      }
    | {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "home";
      };
};

export type Home = {
  _id: string;
  _type: "home";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  slug?: Slug;
  blocks?: Array<
    | ({
        _key: string;
      } & PageHero)
    | ({
        _key: string;
      } & TextMedia)
  >;
  seo?: SeoHome;
};

export type SeoHome = {
  _type: "seo.home";
  title?: string;
  description?: string;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
};

export type Page = {
  _id: string;
  _type: "page";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  blocks?: Array<
    | ({
        _key: string;
      } & PageHero)
    | ({
        _key: string;
      } & TextMedia)
  >;
  seo?: SeoPage;
};

export type SeoPage = {
  _type: "seo.page";
  title?: PlaceholderString;
  description?: string;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
};

export type SanityImageCrop = {
  _type: "sanity.imageCrop";
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityImageHotspot = {
  _type: "sanity.imageHotspot";
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageAsset = {
  _id: string;
  _type: "sanity.imageAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  metadata?: SanityImageMetadata;
  source?: SanityAssetSourceData;
};

export type SanityAssetSourceData = {
  _type: "sanity.assetSourceData";
  name?: string;
  id?: string;
  url?: string;
};

export type SanityImageMetadata = {
  _type: "sanity.imageMetadata";
  location?: Geopoint;
  dimensions?: SanityImageDimensions;
  palette?: SanityImagePalette;
  lqip?: string;
  blurHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
};

export type AnnotationLinkExternal = {
  _type: "annotationLinkExternal";
  url?: string;
  newWindow?: boolean;
};

export type AnnotationLinkEmail = {
  _type: "annotationLinkEmail";
  email?: string;
};

export type MediaTag = {
  _id: string;
  _type: "media.tag";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: Slug;
};

export type Slug = {
  _type: "slug";
  current?: string;
  source?: string;
};

export type AllSanitySchemaTypes =
  | SanityImagePaletteSwatch
  | SanityImagePalette
  | SanityImageDimensions
  | SanityFileAsset
  | Geopoint
  | TextMedia
  | PlaceholderString
  | LinkExternal
  | LinkInternal
  | PageHero
  | Settings
  | AnnotationLinkTel
  | AnnotationLinkInternal
  | Home
  | SeoHome
  | Page
  | SeoPage
  | SanityImageCrop
  | SanityImageHotspot
  | SanityImageAsset
  | SanityAssetSourceData
  | SanityImageMetadata
  | AnnotationLinkExternal
  | AnnotationLinkEmail
  | MediaTag
  | Slug;
export declare const internalGroqTypeReferenceTo: unique symbol;
// Source: sanity/lib/queries.ts
// Variable: pageQuery
// Query: *[slug.current == $slug][0]{blocks[]{//groq    (_type == "pageHero")=>{      //groqtext[]{...}, images[]{    //groq_key,_type,"id": asset._ref,hotspot { x, y },crop {  bottom,  left,  right,  top,},"alt":asset->altText,"tags": asset->opt.media.tags[]->name.current,"description": asset->description,"title": asset->title,'height': asset->metadata.dimensions.height,'url': asset->url,'width': asset->metadata.dimensions.width,'_ts':"SanityImageFragment" }, _type, _key, '_ts': 'PageHeroBlock'    },    (_type == "textMedia")=>{      //groqcontent[]{    (_type == "image")=>{        //groq_key,_type,"id": asset._ref,hotspot { x, y },crop {  bottom,  left,  right,  top,},"alt":asset->altText,"tags": asset->opt.media.tags[]->name.current,"description": asset->description,"title": asset->title,'height': asset->metadata.dimensions.height,'url': asset->url,'width': asset->metadata.dimensions.width,'_ts':"SanityImageFragment"    },    (_type == "textObject")=>{       _type,       _key,       text[]{        //groq  ...,  markDefs[] {    //groq	...,	(_type == 'annotationLinkExternal') => {	  //groq  _key,  _type,  text,  url,  newWindow,	},	(_type == 'annotationLinkInternal') => {	  //groq  _key,  _type,  text,  ...reference-> {    "slug": slug.current,  },	},  }       },    }, }, _type, _key, '_ts': 'TextMediaBlock'    },}, //groq  "seo": {    "description": seo.description,    "image": seo.image {      //groq_key,_type,"id": asset._ref,hotspot { x, y },crop {  bottom,  left,  right,  top,},"alt":asset->altText,"tags": asset->opt.media.tags[]->name.current,"description": asset->description,"title": asset->title,'height': asset->metadata.dimensions.height,'url': asset->url,'width': asset->metadata.dimensions.width,'_ts':"SanityImageFragment"    },    "title": coalesce(seo.title, title),  }}
export type PageQueryResult =
  | {
      blocks: null;
      seo: {
        description: null;
        image: null;
        title: null;
      };
    }
  | {
      blocks: null;
      seo: {
        description: null;
        image: null;
        title: null | string;
      };
    }
  | {
      blocks: Array<
        | {
            text: Array<{
              children?: Array<{
                marks?: Array<string>;
                text?: string;
                _type: "span";
                _key: string;
              }>;
              style?: "h1" | "h2" | "normal";
              listItem?: never;
              markDefs?: null;
              level?: number;
              _type: "block";
              _key: string;
            }> | null;
            images: Array<{
              _key: string;
              _type: "image";
              id: string | null;
              hotspot: {
                x: number | null;
                y: number | null;
              } | null;
              crop: {
                bottom: number | null;
                left: number | null;
                right: number | null;
                top: number | null;
              } | null;
              alt: string | null;
              tags: null;
              description: string | null;
              title: string | null;
              height: number | null;
              url: string | null;
              width: number | null;
              _ts: "SanityImageFragment";
            }> | null;
            _type: "pageHero";
            _key: string;
            _ts: "PageHeroBlock";
          }
        | {
            content: Array<
              | {
                  _key: string;
                  _type: "image";
                  id: string | null;
                  hotspot: {
                    x: number | null;
                    y: number | null;
                  } | null;
                  crop: {
                    bottom: number | null;
                    left: number | null;
                    right: number | null;
                    top: number | null;
                  } | null;
                  alt: string | null;
                  tags: null;
                  description: string | null;
                  title: string | null;
                  height: number | null;
                  url: string | null;
                  width: number | null;
                  _ts: "SanityImageFragment";
                }
              | {
                  _type: "textObject";
                  _key: string;
                  text: Array<{
                    children?: Array<{
                      marks?: Array<string>;
                      text?: string;
                      _type: "span";
                      _key: string;
                    }>;
                    style?: "h1" | "h2" | "h3" | "normal";
                    listItem?: "bullet";
                    markDefs: Array<
                      | {
                          _key: string;
                          _type: "annotationLinkExternal";
                          url: string | null;
                          newWindow: boolean | null;
                          text: null;
                        }
                      | {
                          _key: string;
                          _type: "annotationLinkInternal";
                          reference?:
                            | {
                                _ref: string;
                                _type: "reference";
                                _weak?: boolean;
                                [internalGroqTypeReferenceTo]?: "home";
                              }
                            | {
                                _ref: string;
                                _type: "reference";
                                _weak?: boolean;
                                [internalGroqTypeReferenceTo]?: "page";
                              };
                          text: null;
                          slug: string | null;
                        }
                      | {
                          _key: string;
                          _type: "annotationLinkInternal";
                          reference?:
                            | {
                                _ref: string;
                                _type: "reference";
                                _weak?: boolean;
                                [internalGroqTypeReferenceTo]?: "home";
                              }
                            | {
                                _ref: string;
                                _type: "reference";
                                _weak?: boolean;
                                [internalGroqTypeReferenceTo]?: "page";
                              };
                          text: null;
                        }
                    > | null;
                    level?: number;
                    _type: "block";
                    _key: string;
                  }> | null;
                }
            > | null;
            _type: "textMedia";
            _key: string;
            _ts: "TextMediaBlock";
          }
      > | null;
      seo: {
        description: string | null;
        image: {
          _key: null;
          _type: "image";
          id: string | null;
          hotspot: {
            x: number | null;
            y: number | null;
          } | null;
          crop: {
            bottom: number | null;
            left: number | null;
            right: number | null;
            top: number | null;
          } | null;
          alt: string | null;
          tags: null;
          description: string | null;
          title: string | null;
          height: number | null;
          url: string | null;
          width: number | null;
          _ts: "SanityImageFragment";
        } | null;
        title: PlaceholderString | string | null;
      };
    }
  | {
      blocks: Array<
        | {
            text: Array<{
              children?: Array<{
                marks?: Array<string>;
                text?: string;
                _type: "span";
                _key: string;
              }>;
              style?: "h1" | "h2" | "normal";
              listItem?: never;
              markDefs?: null;
              level?: number;
              _type: "block";
              _key: string;
            }> | null;
            images: Array<{
              _key: string;
              _type: "image";
              id: string | null;
              hotspot: {
                x: number | null;
                y: number | null;
              } | null;
              crop: {
                bottom: number | null;
                left: number | null;
                right: number | null;
                top: number | null;
              } | null;
              alt: string | null;
              tags: null;
              description: string | null;
              title: string | null;
              height: number | null;
              url: string | null;
              width: number | null;
              _ts: "SanityImageFragment";
            }> | null;
            _type: "pageHero";
            _key: string;
            _ts: "PageHeroBlock";
          }
        | {
            content: Array<
              | {
                  _key: string;
                  _type: "image";
                  id: string | null;
                  hotspot: {
                    x: number | null;
                    y: number | null;
                  } | null;
                  crop: {
                    bottom: number | null;
                    left: number | null;
                    right: number | null;
                    top: number | null;
                  } | null;
                  alt: string | null;
                  tags: null;
                  description: string | null;
                  title: string | null;
                  height: number | null;
                  url: string | null;
                  width: number | null;
                  _ts: "SanityImageFragment";
                }
              | {
                  _type: "textObject";
                  _key: string;
                  text: Array<{
                    children?: Array<{
                      marks?: Array<string>;
                      text?: string;
                      _type: "span";
                      _key: string;
                    }>;
                    style?: "h1" | "h2" | "h3" | "normal";
                    listItem?: "bullet";
                    markDefs: Array<
                      | {
                          _key: string;
                          _type: "annotationLinkExternal";
                          url: string | null;
                          newWindow: boolean | null;
                          text: null;
                        }
                      | {
                          _key: string;
                          _type: "annotationLinkInternal";
                          reference?:
                            | {
                                _ref: string;
                                _type: "reference";
                                _weak?: boolean;
                                [internalGroqTypeReferenceTo]?: "home";
                              }
                            | {
                                _ref: string;
                                _type: "reference";
                                _weak?: boolean;
                                [internalGroqTypeReferenceTo]?: "page";
                              };
                          text: null;
                          slug: string | null;
                        }
                      | {
                          _key: string;
                          _type: "annotationLinkInternal";
                          reference?:
                            | {
                                _ref: string;
                                _type: "reference";
                                _weak?: boolean;
                                [internalGroqTypeReferenceTo]?: "home";
                              }
                            | {
                                _ref: string;
                                _type: "reference";
                                _weak?: boolean;
                                [internalGroqTypeReferenceTo]?: "page";
                              };
                          text: null;
                        }
                    > | null;
                    level?: number;
                    _type: "block";
                    _key: string;
                  }> | null;
                }
            > | null;
            _type: "textMedia";
            _key: string;
            _ts: "TextMediaBlock";
          }
      > | null;
      seo: {
        description: string | null;
        image: {
          _key: null;
          _type: "image";
          id: string | null;
          hotspot: {
            x: number | null;
            y: number | null;
          } | null;
          crop: {
            bottom: number | null;
            left: number | null;
            right: number | null;
            top: number | null;
          } | null;
          alt: string | null;
          tags: null;
          description: string | null;
          title: string | null;
          height: number | null;
          url: string | null;
          width: number | null;
          _ts: "SanityImageFragment";
        } | null;
        title: string | null;
      };
    }
  | null;
// Variable: settingsQuery
// Query: *[_type == "settings"][0]{    menuItems[]{      (_type == 'linkInternal') => {//groq  _key,  _type,  text,  ...reference-> {    "slug": slug.current,  },},      (_type == 'linkExternal') => {//groq  _key,  _type,  text,  url,  newWindow,}    },    footerModules[]{      _key,      text[]{        //groq  ...,  markDefs[] {    //groq	...,	(_type == 'annotationLinkExternal') => {	  //groq  _key,  _type,  text,  url,  newWindow,	},	(_type == 'annotationLinkInternal') => {	  //groq  _key,  _type,  text,  ...reference-> {    "slug": slug.current,  },	},  }      }    }  }
export type SettingsQueryResult = {
  menuItems: Array<
    | {
        _key: string;
        _type: "linkExternal";
        text: string | null;
        url: string | null;
        newWindow: boolean | null;
      }
    | {
        _key: string;
        _type: "linkInternal";
        text: string | null;
        slug: string | null;
      }
    | {
        _key: string;
        _type: "linkInternal";
        text: string | null;
      }
  > | null;
  footerModules: Array<{
    _key: string;
    text: Array<{
      children?: Array<{
        marks?: Array<string>;
        text?: string;
        _type: "span";
        _key: string;
      }>;
      style?: "h3" | "normal";
      listItem?: "bullet";
      markDefs: Array<
        | {
            _key: string;
            _type: "annotationLinkEmail";
            email?: string;
          }
        | {
            _key: string;
            _type: "annotationLinkExternal";
            url: string | null;
            newWindow: boolean | null;
            text: null;
          }
        | {
            _key: string;
            _type: "annotationLinkInternal";
            reference?:
              | {
                  _ref: string;
                  _type: "reference";
                  _weak?: boolean;
                  [internalGroqTypeReferenceTo]?: "home";
                }
              | {
                  _ref: string;
                  _type: "reference";
                  _weak?: boolean;
                  [internalGroqTypeReferenceTo]?: "page";
                };
            text: null;
            slug: string | null;
          }
        | {
            _key: string;
            _type: "annotationLinkInternal";
            reference?:
              | {
                  _ref: string;
                  _type: "reference";
                  _weak?: boolean;
                  [internalGroqTypeReferenceTo]?: "home";
                }
              | {
                  _ref: string;
                  _type: "reference";
                  _weak?: boolean;
                  [internalGroqTypeReferenceTo]?: "page";
                };
            text: null;
          }
        | {
            _key: string;
            _type: "annotationLinkTel";
            tel?: string;
          }
      > | null;
      level?: number;
      _type: "block";
      _key: string;
    }> | null;
  }> | null;
} | null;

// Source: app/(www)/sitemap.xml/route.ts
// Variable: allSlugsQuery
// Query: *[_type in ["page", "home"] && defined(slug.current)][]{"slug":slug.current, _updatedAt}
export type AllSlugsQueryResult = Array<{
  slug: string | null;
  _updatedAt: string;
}>;

// Query TypeMap
import "@sanity/client";
declare module "@sanity/client" {
  interface SanityQueries {
    '*[slug.current == $slug][0]{blocks[]{//groq\n    (_type == "pageHero")=>{\n      //groq\ntext[]{\n...\n},\n images[]{\n    //groq\n_key,\n_type,\n"id": asset._ref,\nhotspot { x, y },\ncrop {\n  bottom,\n  left,\n  right,\n  top,\n},\n"alt":asset->altText,\n"tags": asset->opt.media.tags[]->name.current,\n"description": asset->description,\n"title": asset->title,\n\'height\': asset->metadata.dimensions.height,\n\'url\': asset->url,\n\'width\': asset->metadata.dimensions.width,\n\'_ts\':"SanityImageFragment"\n\n },\n _type,\n _key,\n \'_ts\': \'PageHeroBlock\'\n\n    },\n    (_type == "textMedia")=>{\n      //groq\ncontent[]{\n    (_type == "image")=>{\n        //groq\n_key,\n_type,\n"id": asset._ref,\nhotspot { x, y },\ncrop {\n  bottom,\n  left,\n  right,\n  top,\n},\n"alt":asset->altText,\n"tags": asset->opt.media.tags[]->name.current,\n"description": asset->description,\n"title": asset->title,\n\'height\': asset->metadata.dimensions.height,\n\'url\': asset->url,\n\'width\': asset->metadata.dimensions.width,\n\'_ts\':"SanityImageFragment"\n\n    },\n    (_type == "textObject")=>{\n       _type,\n       _key,\n       text[]{\n        //groq\n  ...,\n  markDefs[] {\n    //groq\n\t...,\n\t(_type == \'annotationLinkExternal\') => {\n\t  //groq\n  _key,\n  _type,\n  text,\n  url,\n  newWindow,\n\n\t},\n\t(_type == \'annotationLinkInternal\') => {\n\t  //groq\n  _key,\n  _type,\n  text,\n  ...reference-> {\n    "slug": slug.current,\n  },\n\n\t},\n\n  }\n\n       },\n    },\n },\n _type,\n _key,\n \'_ts\': \'TextMediaBlock\'\n\n    },\n}, //groq\n  "seo": {\n    "description": seo.description,\n    "image": seo.image {\n      //groq\n_key,\n_type,\n"id": asset._ref,\nhotspot { x, y },\ncrop {\n  bottom,\n  left,\n  right,\n  top,\n},\n"alt":asset->altText,\n"tags": asset->opt.media.tags[]->name.current,\n"description": asset->description,\n"title": asset->title,\n\'height\': asset->metadata.dimensions.height,\n\'url\': asset->url,\n\'width\': asset->metadata.dimensions.width,\n\'_ts\':"SanityImageFragment"\n\n    },\n    "title": coalesce(seo.title, title),\n  }\n}': PageQueryResult;
    "\n  *[_type == \"settings\"][0]{\n    menuItems[]{\n      (_type == 'linkInternal') => {//groq\n  _key,\n  _type,\n  text,\n  ...reference-> {\n    \"slug\": slug.current,\n  },\n},\n      (_type == 'linkExternal') => {//groq\n  _key,\n  _type,\n  text,\n  url,\n  newWindow,\n}\n    },\n    footerModules[]{\n      _key,\n      text[]{\n        //groq\n  ...,\n  markDefs[] {\n    //groq\n\t...,\n\t(_type == 'annotationLinkExternal') => {\n\t  //groq\n  _key,\n  _type,\n  text,\n  url,\n  newWindow,\n\n\t},\n\t(_type == 'annotationLinkInternal') => {\n\t  //groq\n  _key,\n  _type,\n  text,\n  ...reference-> {\n    \"slug\": slug.current,\n  },\n\n\t},\n\n  }\n\n      }\n    }\n  }\n": SettingsQueryResult;
    '*[_type in ["page", "home"] && defined(slug.current)][]{"slug":slug.current, _updatedAt}': AllSlugsQueryResult;
  }
}
