import { HOME_FAQS } from "../data/homeFaqs";
import JsonLd from "./JsonLd";
import {
  coreEntityGraph,
  websiteNode,
  webPageNode,
  faqPageNode,
  PRIMARY_SERVICE_DEFS,
  serviceNode,
  AREA_SERVED_NAMES
} from "./schemaBuilders";
import { SITE_NAME } from "./site";
import { HOME_H1, HOME_META_DESCRIPTION } from "./homeMeta";

export default function HomePageSchema() {
  const faqs = HOME_FAQS.map((f) => ({ question: f.question, answer: f.answer }));
  const graph = [
    ...coreEntityGraph(),
    websiteNode(),
    webPageNode({
      pathname: "/",
      name: `${SITE_NAME} — ${HOME_H1}`,
      description: HOME_META_DESCRIPTION
    }),
    faqPageNode(faqs, { pathname: "/" }),
    ...PRIMARY_SERVICE_DEFS.map((s) =>
      serviceNode({
        idSuffix: s.idSuffix,
        name: s.name,
        description: s.description,
        areaServed: AREA_SERVED_NAMES
      })
    )
  ];

  return <JsonLd id="rab-jsonld-home" data={{ "@context": "https://schema.org", "@graph": graph }} />;
}
