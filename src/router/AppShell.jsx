import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import FloatingCtas from "../components/FloatingCtas.jsx";
import SeoRouteDefaults from "../components/SeoRouteDefaults.jsx";
import { LOCAL_SEO_ROUTES } from "../data/localSeoLandings.js";
import { CCTV_LOCAL_ROUTES } from "../data/cctvLocalLandings.js";

const App = lazy(() => import("../App.jsx"));
const About = lazy(() => import("../about.jsx"));
const ProductDetail = lazy(() => import("../ProductDetail.jsx"));
const LocationPage = lazy(() => import("../pages/LocationPage.jsx"));
const LocationsIndex = lazy(() => import("../pages/LocationsIndex.jsx"));
const ServiceSeoPage = lazy(() => import("../pages/ServiceSeoPage.jsx"));
const CctvSolutionsPage = lazy(() => import("../pages/CctvSolutionsPage.jsx"));
const ServicesIndex = lazy(() => import("../pages/ServicesIndex.jsx"));
const BlogIndex = lazy(() => import("../pages/BlogIndex.jsx"));
const BlogPost = lazy(() => import("../pages/BlogPost.jsx"));
const LocalServiceLanding = lazy(() => import("../pages/LocalServiceLanding.jsx"));
const CctvLocalLandingPage = lazy(() => import("../pages/CctvLocalLandingPage.jsx"));

function PageSkeleton() {
  return (
    <div className="page-skeleton" aria-busy="true" aria-live="polite">
      <div className="page-skeleton-inner" />
    </div>
  );
}

/** Shared route tree for client and SSG (wrapped in BrowserRouter or StaticRouter). */
export default function AppShell() {
  return (
    <>
      <SeoRouteDefaults />
      <FloatingCtas />
      <Suspense fallback={<PageSkeleton />}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/locations" element={<LocationsIndex />} />
          <Route path="/locations/:slug" element={<LocationPage />} />
          <Route path="/services" element={<ServicesIndex />} />
          <Route path="/services/cctv-solutions" element={<CctvSolutionsPage />} />
          <Route path="/services/:slug" element={<ServiceSeoPage />} />
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          {CCTV_LOCAL_ROUTES.map((route) => (
            <Route key={route} path={route} element={<CctvLocalLandingPage />} />
          ))}
          {LOCAL_SEO_ROUTES.map((route) => (
            <Route key={route} path={route} element={<LocalServiceLanding />} />
          ))}
        </Routes>
      </Suspense>
    </>
  );
}
