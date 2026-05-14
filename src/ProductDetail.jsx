import { useEffect, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { Link, Navigate, useParams } from "react-router-dom";
import SeoHead from "./seo/SeoHead";
import JsonLd from "./seo/JsonLd";
import SiteHeader from "./components/SiteHeader";
import Breadcrumbs from "./components/Breadcrumbs";
import { productDetails } from "./productDetails";
import { SITE_ORIGIN } from "./seo/site";
import { breadcrumbListNode, webPageNode, organizationNode } from "./seo/schemaBuilders";

export default function ProductDetail() {
  const { productId } = useParams();
  const detail = productId ? productDetails[productId] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  const metaDescription = useMemo(() => {
    if (!detail?.intro) return "";
    const t = detail.intro.trim();
    return t.length > 158 ? `${t.slice(0, 157)}…` : t;
  }, [detail]);

  if (!detail) {
    return <Navigate to="/" replace />;
  }

  const pathname = `/product/${productId}`;
  const pageUrl = `${SITE_ORIGIN}${pathname}`;
  const metaTitle = `${detail.title} — Solutions | RAB INDIA`;

  const graph = [
    organizationNode(),
    webPageNode({
      pathname,
      name: metaTitle,
      description: metaDescription
    }),
    breadcrumbListNode([
      { name: "Home", url: `${SITE_ORIGIN}/` },
      { name: detail.title, url: pageUrl }
    ])
  ];

  return (
    <div className="site-root">
      <SeoHead title={metaTitle} description={metaDescription} pathname={pathname} rawTitle />
      <JsonLd id={`rab-jsonld-product-${productId}`} data={{ "@context": "https://schema.org", "@graph": graph }} />
      <Helmet>
        <link rel="preload" as="image" href={detail.image} fetchPriority="high" />
      </Helmet>
      <SiteHeader />

      <main className="section product-page">
        <div className="container product-page-inner">
          <Breadcrumbs
            items={[
              { label: "Home", to: "/" },
              { label: detail.title, to: pathname }
            ]}
          />
          <Link className="product-page-back" to="/">
            ← Back to home
          </Link>

          <h1 className="product-page-title">{detail.title}</h1>
          <p className="product-page-lead">{detail.intro}</p>

          <div className="product-page-hero-media">
            <img
              src={detail.image}
              alt={detail.imageAlt || `${detail.title} — RAB INDIA industrial solution`}
              width={960}
              height={540}
              decoding="async"
              fetchPriority="high"
            />
          </div>

          <section className="product-page-block">
            <h2 className="product-page-h2">Key points</h2>
            <ul className="product-page-list">
              {detail.specs.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </section>

          {detail.featureItems?.length ? (
            <section className="product-page-block">
              <h2 className="product-page-h2">Product Items</h2>
              <div className="product-feature-list">
                {detail.featureItems.map((item) => (
                  <article className="product-feature-row" key={item.label}>
                    <div className="product-feature-copy">
                      <h3 className="product-feature-title">{item.label}</h3>
                      <p className="product-feature-text">{item.text}</p>
                    </div>
                    <div className="product-feature-media">
                      <img
                        src={item.image}
                        alt={item.alt || `${item.label} — ${detail.title}`}
                        width={640}
                        height={400}
                        loading="lazy"
                        decoding="async"
                        style={item.imagePosition ? { objectPosition: item.imagePosition } : undefined}
                      />
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ) : null}

          {detail.sections.map((section) => (
            <section className="product-page-block" key={section.heading}>
              <h2 className="product-page-h2">{section.heading}</h2>
              <ul className="product-page-list">
                {section.items.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </section>
          ))}

          <div className="product-page-actions">
            <Link to={{ pathname: "/", hash: "contact" }} className="button button-primary">
              Request a quote
            </Link>
            <Link to="/" className="button button-secondary">
              All solutions
            </Link>
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          © {new Date().getFullYear()} RAB India. Built for secure, modern industrial operations.
        </div>
      </footer>
    </div>
  );
}
