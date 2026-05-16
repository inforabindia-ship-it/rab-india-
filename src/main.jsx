import { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./styles.css";

import FloatingCtas from "./components/FloatingCtas";
import { LOCAL_SEO_ROUTES } from "./data/localSeoLandings.js";

const App = lazy(() => import("./App.jsx"));
const About = lazy(() => import("./about.jsx"));
const ProductDetail = lazy(() => import("./ProductDetail.jsx"));
const LocationPage = lazy(() => import("./pages/LocationPage.jsx"));
const LocationsIndex = lazy(() => import("./pages/LocationsIndex.jsx"));
const ServiceSeoPage = lazy(() => import("./pages/ServiceSeoPage.jsx"));
const ServicesIndex = lazy(() => import("./pages/ServicesIndex.jsx"));
const BlogIndex = lazy(() => import("./pages/BlogIndex.jsx"));
const BlogPost = lazy(() => import("./pages/BlogPost.jsx"));
const LocalServiceLanding = lazy(() => import("./pages/LocalServiceLanding.jsx"));

function PageSkeleton() {
  return (
    <div className="page-skeleton" aria-busy="true" aria-live="polite">
      <div className="page-skeleton-inner" />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <BrowserRouter>
      <FloatingCtas />
      <Suspense fallback={<PageSkeleton />}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/locations" element={<LocationsIndex />} />
          <Route path="/locations/:slug" element={<LocationPage />} />
          <Route path="/services" element={<ServicesIndex />} />
          <Route path="/services/:slug" element={<ServiceSeoPage />} />
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          {LOCAL_SEO_ROUTES.map((route) => (
            <Route key={route} path={route} element={<LocalServiceLanding />} />
          ))}
        </Routes>
      </Suspense>
    </BrowserRouter>
  </HelmetProvider>
);
