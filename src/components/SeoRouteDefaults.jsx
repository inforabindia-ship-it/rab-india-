import { useLocation } from "react-router-dom";
import SeoHead from "../seo/SeoHead";
import { HOME_META_DESCRIPTION, HOME_TITLE_SEGMENT } from "../seo/homeMeta";

/**
 * Renders homepage SEO immediately (outside lazy routes) so OG/Twitter tags
 * exist before the App chunk loads. Per-route pages override via their own SeoHead.
 */
export default function SeoRouteDefaults() {
  const { pathname } = useLocation();

  if (pathname !== "/") {
    return null;
  }

  return (
    <SeoHead title={HOME_TITLE_SEGMENT} description={HOME_META_DESCRIPTION} pathname="/" />
  );
}
