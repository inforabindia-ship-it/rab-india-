import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import SeoHead from "../seo/SeoHead";
import JsonLd from "../seo/JsonLd";
import SiteHeader from "../components/SiteHeader";
import Breadcrumbs from "../components/Breadcrumbs";
import { SITE_ORIGIN } from "../seo/site";
import {
  breadcrumbListNode,
  webPageNode,
  coreEntityGraph,
  faqPageNode
} from "../seo/schemaBuilders";
import { getBlogPost } from "../data/blogPosts";

function articleNode(post, pageUrl) {
  return {
    "@type": "Article",
    "@id": `${pageUrl}#article`,
    headline: post.title,
    description: post.excerpt,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    author: {
      "@type": "Organization",
      name: "RAB INDIA"
    },
    publisher: {
      "@type": "Organization",
      name: "RAB INDIA",
      url: SITE_ORIGIN
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`
    },
    articleSection: post.category,
    inLanguage: "en-IN"
  };
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = slug ? getBlogPost(slug) : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const pathname = `/blog/${post.slug}`;
  const pageUrl = `${SITE_ORIGIN}${pathname}`;
  const description = post.excerpt;

  const graph = [
    ...coreEntityGraph(),
    webPageNode({
      pathname,
      name: post.title,
      description
    }),
    articleNode(post, pageUrl),
    breadcrumbListNode([
      { name: "Home", url: `${SITE_ORIGIN}/` },
      { name: "Blog", url: `${SITE_ORIGIN}/blog` },
      { name: post.title, url: pageUrl }
    ])
  ];

  if (post.faqs?.length) {
    graph.push(faqPageNode(post.faqs.map((f) => ({ question: f.q, answer: f.a })), { pathname }));
  }

  return (
    <div className="site-root">
      <SeoHead
        title={`${post.title} | RAB INDIA Blog`}
        description={description}
        pathname={pathname}
        type="article"
        rawTitle
        articlePublishedTime={`${post.datePublished}T08:00:00+05:30`}
        articleModifiedTime={`${post.dateModified}T08:00:00+05:30`}
      />
      <JsonLd id={`rab-jsonld-blog-${post.slug}`} data={{ "@context": "https://schema.org", "@graph": graph }} />
      <SiteHeader />
      <main className="seo-page-main">
        <article className="container seo-page-inner">
          <Breadcrumbs
            items={[
              { label: "Home", to: "/" },
              { label: "Blog", to: "/blog" },
              { label: post.title, to: pathname }
            ]}
          />
          <header className="seo-hero">
            <p className="seo-hero-eyebrow">{post.category}</p>
            <h1>{post.title}</h1>
            <p className="seo-card-meta">
              <time dateTime={post.datePublished}>{post.datePublished}</time>
              {post.dateModified !== post.datePublished ? (
                <>
                  {" "}
                  · Updated <time dateTime={post.dateModified}>{post.dateModified}</time>
                </>
              ) : null}{" "}
              · {post.author}
            </p>
            <p className="seo-hero-lead">{post.excerpt}</p>
          </header>

          {post.quickAnswer ? (
            <aside className="seo-panel seo-panel--answer" aria-label="Quick answer">
              <p className="seo-answer-label">In short</p>
              <p className="seo-answer-text">{post.quickAnswer}</p>
            </aside>
          ) : null}

          {post.keyTakeaways?.length ? (
            <section className="seo-panel seo-panel--takeaways" aria-labelledby={`takeaways-${post.slug}`}>
              <h2 id={`takeaways-${post.slug}`} className="seo-panel-title">
                Key takeaways
              </h2>
              <ul className="seo-bullet-list">
                {post.keyTakeaways.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ) : null}

          <div className="seo-prose">
            {post.sections.map((sec) => (
              <section key={sec.h2} aria-labelledby={`sec-${post.slug}-${sec.h2.slice(0, 24)}`}>
                <h2 id={`sec-${post.slug}-${sec.h2.slice(0, 24)}`} className="seo-prose-h2">
                  {sec.h2}
                </h2>
                {sec.paragraphs?.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
                {sec.bullets?.length ? (
                  <ul className="seo-bullet-list">
                    {sec.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
                {sec.subsections?.map((sub) => (
                  <div key={sub.h3}>
                    <h3 className="seo-prose-h3">{sub.h3}</h3>
                    {sub.paragraphs?.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                    {sub.bullets?.length ? (
                      <ul className="seo-bullet-list">
                        {sub.bullets.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                ))}
              </section>
            ))}
          </div>

          {post.faqs?.length ? (
            <section className="seo-panel" aria-labelledby={`faq-${post.slug}`}>
              <h2 id={`faq-${post.slug}`} className="seo-panel-title">
                FAQ
              </h2>
              <dl className="seo-faq">
                {post.faqs.map((f) => (
                  <div className="seo-faq-item" key={f.q}>
                    <dt className="seo-faq-q">{f.q}</dt>
                    <dd className="seo-faq-a">{f.a}</dd>
                  </div>
                ))}
              </dl>
            </section>
          ) : null}

          <section className="seo-panel seo-panel--cta" aria-labelledby={`cta-${post.slug}`}>
            <h2 id={`cta-${post.slug}`} className="seo-panel-title">
              {post.cta?.title ?? "Want this implemented on your site?"}
            </h2>
            <p>
              {post.cta?.body ??
                "Share your city, plant type, and what you are trying to prove with data (security, compliance, or operations). We will recommend a realistic deployment sequence."}
            </p>
            <div className="seo-hero-actions">
              <a className="button button-primary" href="tel:+917814421210">
                Call +91 7814421210
              </a>
              <a className="button button-secondary" href="mailto:info@rabindia.co.in">
                Email info@rabindia.co.in
              </a>
              <Link className="button button-secondary" to={{ pathname: "/", hash: "contact" }}>
                Contact &amp; map
              </Link>
            </div>
          </section>

          <nav className="seo-inline-nav" aria-label="Related reading">
            <span className="seo-inline-label">Related:</span>
            <Link to="/blog">All articles</Link>
            {(post.relatedLinks ?? []).map((link) => (
              <Link key={link.to} to={link.to}>
                {link.label}
              </Link>
            ))}
            <Link to="/services">Service pages</Link>
            {!post.relatedLinks?.some((l) => l.to === "/services/cctv-solutions") ? (
              <Link to="/services/cctv-solutions">CCTV service overview</Link>
            ) : null}
            <Link to="/locations">Local pages</Link>
          </nav>
        </article>
      </main>
      <footer className="footer">
        <div className="container">
          © {new Date().getFullYear()} RAB India. Built for secure, modern industrial operations.
        </div>
      </footer>
    </div>
  );
}
