import { Helmet } from "react-helmet-async";

/**
 * Renders JSON-LD. Prefer a single script with @graph for multiple entities.
 * @param {object} props
 * @param {string} [props.id] Unique id for Helmet script deduplication on route changes
 * @param {object|object[]} props.data Schema.org object or array merged into @graph
 */
export default function JsonLd({ id = "json-ld-default", data }) {
  const payload =
    data["@graph"] && data["@context"]
      ? data
      : Array.isArray(data)
        ? { "@context": "https://schema.org", "@graph": data }
        : { "@context": "https://schema.org", ...data };

  const json = JSON.stringify(payload).replace(/</g, "\\u003c");

  return (
    <Helmet>
      <script id={id} type="application/ld+json">
        {json}
      </script>
    </Helmet>
  );
}
