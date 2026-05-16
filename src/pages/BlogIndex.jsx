import { Link } from "react-router-dom";
import SeoHead from "../seo/SeoHead";
import JsonLd from "../seo/JsonLd";
import SiteHeader from "../components/SiteHeader";
import Breadcrumbs from "../components/Breadcrumbs";
import { SITE_ORIGIN } from "../seo/site";
import { breadcrumbListNode, webPageNode, coreEntityGraph } from "../seo/schemaBuilders";
import { BLOG_CATEGORIES, BLOG_POSTS } from "../data/blogPosts";
import { BLOG_TOPIC_SUGGESTIONS } from "../data/blogTopicSuggestions";

const title = "Industrial Security & Automation Blog | RAB INDIA";
const description =
  "Practical articles on CCTV storage planning, biometric attendance throughput, industrial weighing, structured cabling, fire monitoring context, and gate security design — written for Indian plant and IT teams.";

export default function BlogIndex() {
  const pathname = "/blog";
  const graph = [
    ...coreEntityGraph(),
    webPageNode({ pathname, name: title, description }),
    breadcrumbListNode([
      { name: "Home", url: `${SITE_ORIGIN}/` },
      { name: "Blog", url: `${SITE_ORIGIN}/blog` }
    ])
  ];

  return (
    <div className="site-root">
      <SeoHead title={title} description={description} pathname={pathname} rawTitle />
      <JsonLd id="rab-jsonld-blog-index" data={{ "@context": "https://schema.org", "@graph": graph }} />
      <SiteHeader />
      <main className="seo-page-main">
        <div className="container seo-page-inner">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Blog", to: "/blog" }]} />
          <header className="seo-hero">
            <p className="seo-hero-eyebrow">Technical blog</p>
            <h1>Planning notes for industrial CCTV, access, weighing, and networks</h1>
            <p className="seo-hero-lead">
              These articles are structured for featured snippets and AI summaries: direct answers, scannable headings,
              and internal links back to service routes where deeper procurement context lives.
            </p>
          </header>

          {BLOG_CATEGORIES.map((cat) => {
            const posts = BLOG_POSTS.filter((p) => p.category === cat);
            if (!posts.length) return null;
            return (
              <section className="seo-panel" key={cat} aria-labelledby={`cat-${cat}`}>
                <h2 id={`cat-${cat}`} className="seo-panel-title">
                  {cat}
                </h2>
                <ul className="seo-card-grid seo-card-grid--blog">
                  {posts.map((p) => (
                    <li key={p.slug}>
                      <article className="seo-card">
                        <h3 className="seo-card-title">
                          <Link to={`/blog/${p.slug}`}>{p.title}</Link>
                        </h3>
                        <p className="seo-card-meta">
                          <time dateTime={p.datePublished}>{p.datePublished}</time> · {p.author}
                        </p>
                        <p className="seo-card-desc">{p.excerpt}</p>
                        <Link className="seo-card-cta" to={`/blog/${p.slug}`}>
                          Read article →
                        </Link>
                      </article>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}

          <section className="seo-panel" aria-labelledby="blog-topic-queue">
            <h2 id="blog-topic-queue" className="seo-panel-title">
              Editorial queue (industrial + local SEO angles)
            </h2>
            <p className="seo-prose-block">
              Draft titles we publish as engineering-ready articles—each will cross-link to relevant{" "}
              <Link to="/services">service pages</Link> and <Link to="/locations">location context</Link> without
              repeating city names in every paragraph.
            </p>
            <ul className="seo-topic-suggestions">
              {BLOG_TOPIC_SUGGESTIONS.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </section>
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
