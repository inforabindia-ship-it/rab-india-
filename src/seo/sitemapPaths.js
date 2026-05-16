import { LOCATION_SLUGS } from "../data/localPages.js";
import { SERVICE_SLUGS } from "../data/servicePages.js";
import { BLOG_SLUGS } from "../data/blogPosts.js";
import { PRODUCT_ROUTE_IDS } from "../data/productRouteIds.js";
import { ALL_LOCAL_LANDING_ROUTES } from "../data/localSeoLandings.js";
import { CCTV_LOCAL_ROUTES } from "../data/cctvLocalLandings.js";

/** All public pathnames for sitemap generation (no hash routes). */
export function getAllSitemapPathnames() {
  const paths = new Set(["/", "/about", "/blog", "/locations", "/services"]);
  PRODUCT_ROUTE_IDS.forEach((id) => paths.add(`/product/${id}`));
  LOCATION_SLUGS.forEach((s) => paths.add(`/locations/${s}`));
  SERVICE_SLUGS.forEach((s) => paths.add(`/services/${s}`));
  BLOG_SLUGS.forEach((s) => paths.add(`/blog/${s}`));
  ALL_LOCAL_LANDING_ROUTES.forEach((r) => paths.add(`/${r}`));
  CCTV_LOCAL_ROUTES.forEach((r) => paths.add(`/${r}`));
  return [...paths].sort();
}
