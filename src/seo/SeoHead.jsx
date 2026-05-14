import { Helmet } from "react-helmet-async";
import {
  SITE_ORIGIN,
  SITE_NAME,
  DEFAULT_OG_IMAGE,
  TWITTER_SITE,
  DEFAULT_LOCALE
} from "./site";

/**
 * @param {object} props
 * @param {string} props.title Page title (brand suffix added unless `rawTitle`)
 * @param {string} props.description Meta description (keep ~140–160 chars)
 * @param {string} props.pathname Path with leading slash (e.g. `/about`)
 * @param {string} [props.ogImage] Absolute URL for og:image
 * @param {string} [props.type] open graph type: website | article
 * @param {boolean} [props.noindex]
 * @param {boolean} [props.rawTitle] If true, `title` is used as the full document title
 * @param {string} [props.articlePublishedTime] ISO date for article OG tags
 * @param {string} [props.articleModifiedTime] ISO date
 */
export default function SeoHead({
  title,
  description,
  pathname = "/",
  ogImage,
  type = "website",
  noindex = false,
  rawTitle = false,
  articlePublishedTime,
  articleModifiedTime
}) {
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`;
  const canonical = `${SITE_ORIGIN}${path === "//" ? "/" : path}`;
  const documentTitle = rawTitle ? title : `${title} | ${SITE_NAME}`;
  const image = ogImage || DEFAULT_OG_IMAGE;

  return (
    <Helmet htmlAttributes={{ lang: "en-IN" }} prioritizeSeoTags>
      <title>{documentTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta name="robots" content={noindex ? "noindex,nofollow" : "index,follow"} />
      <meta property="og:locale" content={DEFAULT_LOCALE.replace("_", "-")} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={documentTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      {image ? <meta property="og:image" content={image} /> : null}
      <meta name="twitter:card" content={image ? "summary_large_image" : "summary"} />
      <meta name="twitter:title" content={documentTitle} />
      <meta name="twitter:description" content={description} />
      {TWITTER_SITE ? <meta name="twitter:site" content={TWITTER_SITE} /> : null}
      {image ? <meta name="twitter:image" content={image} /> : null}
      {type === "article" && articlePublishedTime ? (
        <meta property="article:published_time" content={articlePublishedTime} />
      ) : null}
      {type === "article" && articleModifiedTime ? (
        <meta property="article:modified_time" content={articleModifiedTime} />
      ) : null}
    </Helmet>
  );
}
