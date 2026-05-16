import { SITE_ORIGIN, SITE_NAME, DEFAULT_OG_IMAGE } from "./site";
import { HOME_META_DESCRIPTION, HOME_TITLE_SEGMENT } from "./homeMeta";

/** Recommended Open Graph share image dimensions (1200×630). */
export const DEFAULT_OG_IMAGE_WIDTH = 1200;
export const DEFAULT_OG_IMAGE_HEIGHT = 630;

export const DEFAULT_OG_IMAGE_ALT =
  "RAB INDIA — industrial CCTV, access control, and IT infrastructure";

/** Default `<title>` / `og:title` when a page does not pass `rawTitle`. */
export const DEFAULT_DOCUMENT_TITLE = `${HOME_TITLE_SEGMENT} | ${SITE_NAME}`;

/** Fallback meta / `og:description` when a page omits `description`. */
export const DEFAULT_META_DESCRIPTION = HOME_META_DESCRIPTION;

export const DEFAULT_OG_TYPE = "website";

export const DEFAULT_OG_URL = `${SITE_ORIGIN}/`;

/** Static shell + crawler defaults — keep `index.html` in sync with these values. */
export const STATIC_SHELL_META = {
  title: DEFAULT_DOCUMENT_TITLE,
  description: DEFAULT_META_DESCRIPTION,
  url: DEFAULT_OG_URL,
  type: DEFAULT_OG_TYPE,
  image: DEFAULT_OG_IMAGE,
  imageWidth: DEFAULT_OG_IMAGE_WIDTH,
  imageHeight: DEFAULT_OG_IMAGE_HEIGHT,
  imageAlt: DEFAULT_OG_IMAGE_ALT,
  twitterCard: "summary_large_image"
};
