import { Helmet } from "react-helmet-async";
import {
  SITE_ORIGIN,
  SITE_NAME,
  DEFAULT_OG_IMAGE,
  TWITTER_SITE,
  DEFAULT_LOCALE
} from "../seo/site";
import {
  DEFAULT_META_DESCRIPTION,
  DEFAULT_OG_IMAGE_ALT,
  DEFAULT_OG_IMAGE_HEIGHT,
  DEFAULT_OG_IMAGE_WIDTH,
  DEFAULT_OG_TYPE
} from "../seo/defaultMeta";

/**
 * Reusable SEO / document head via react-helmet-async.
 *
 * @param {object} props
 * @param {string} props.title Page title segment (`{title} | {SITE_NAME}` unless `rawTitle`)
 * @param {string} [props.description] Meta description (falls back to site default)
 * @param {string} [props.pathname="/"] Path for canonical + `og:url` (leading slash)
 * @param {string} [props.ogImage] Absolute Open Graph / Twitter image URL
 * @param {string} [props.type] open graph type: website | article
 * @param {boolean} [props.noindex]
 * @param {boolean} [props.rawTitle] Use `title` as the full document title
 * @param {string} [props.articlePublishedTime] ISO date for `article:published_time`
 * @param {string} [props.articleModifiedTime] ISO date for `article:modified_time`
 * @param {React.ReactNode} [props.children] Extra tags inside the same `<Helmet>`
 */
export default function SEO({
  title,
  description,
  pathname = "/",
  ogImage,
  type = DEFAULT_OG_TYPE,
  noindex = false,
  rawTitle = false,
  articlePublishedTime,
  articleModifiedTime,
  children
}) {
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`;
  const canonical = `${SITE_ORIGIN}${path}`;
  const documentTitle = rawTitle ? title : `${title} | ${SITE_NAME}`;
  const metaDescription = (description && description.trim()) || DEFAULT_META_DESCRIPTION;
  const image = ogImage || DEFAULT_OG_IMAGE;

  return (
    <Helmet htmlAttributes={{ lang: "en-IN" }} prioritizeSeoTags>
      <title>{documentTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={canonical} />

      <meta name="robots" content={noindex ? "noindex,nofollow" : "index,follow"} />

      <meta property="og:locale" content={DEFAULT_LOCALE.replace("_", "-")} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={documentTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:image:secure_url" content={image} />
      <meta property="og:image:width" content={String(DEFAULT_OG_IMAGE_WIDTH)} />
      <meta property="og:image:height" content={String(DEFAULT_OG_IMAGE_HEIGHT)} />
      <meta property="og:image:alt" content={DEFAULT_OG_IMAGE_ALT} />
      <meta property="og:image:type" content="image/png" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={documentTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={image} />
      {TWITTER_SITE ? <meta name="twitter:site" content={TWITTER_SITE} /> : null}

      {type === "article" && articlePublishedTime ? (
        <meta property="article:published_time" content={articlePublishedTime} />
      ) : null}
      {type === "article" && articleModifiedTime ? (
        <meta property="article:modified_time" content={articleModifiedTime} />
      ) : null}
      {children}
    </Helmet>
  );
}
