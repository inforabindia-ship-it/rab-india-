/** Production site origin — used for canonicals, OG URLs, and JSON-LD @id bases. */
export const SITE_ORIGIN = "https://rabindia.co.in";

export const SITE_NAME = "RAB INDIA";

export const BUSINESS_LEGAL_NAME = "RAB INDIA";

export const DEFAULT_LOCALE = "en_IN";

export const PHONE_E164 = "+917814421210";

export const PHONE_DISPLAY = "+91 7814421210";

export const WHATSAPP_E164 = "917814421210";

export const EMAIL = "info@rabindia.co.in";

export const ADDRESS = {
  streetAddress: "Baddi",
  addressLocality: "Baddi",
  addressRegion: "Himachal Pradesh",
  postalCode: "173205",
  addressCountry: "IN"
};

export const GEO = {
  latitude: 30.934212275869584,
  longitude: 76.79660137439747
};

/**
 * Default Open Graph / Twitter preview image (served from `/public/og-share.png`).
 * Absolute URL so crawlers resolve it correctly. Override per page via `SeoHead` `ogImage` when needed.
 */
export const DEFAULT_OG_IMAGE = `${SITE_ORIGIN}/og-share.png`;

export const TWITTER_SITE = null;
