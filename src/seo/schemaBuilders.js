import {
  SITE_ORIGIN,
  SITE_NAME,
  BUSINESS_LEGAL_NAME,
  PHONE_E164,
  EMAIL,
  ADDRESS,
  GEO
} from "./site";

const ORG_ID = `${SITE_ORIGIN}/#organization`;
const LOCAL_ID = `${SITE_ORIGIN}/#localbusiness`;
const WEBSITE_ID = `${SITE_ORIGIN}/#website`;

export function organizationNode() {
  return {
    "@type": "Organization",
    "@id": ORG_ID,
    name: BUSINESS_LEGAL_NAME,
    url: SITE_ORIGIN,
    email: EMAIL,
    telephone: PHONE_E164,
    sameAs: ["https://rabindia.co.in/"],
    address: {
      "@type": "PostalAddress",
      streetAddress: ADDRESS.streetAddress,
      addressLocality: ADDRESS.addressLocality,
      addressRegion: ADDRESS.addressRegion,
      postalCode: ADDRESS.postalCode,
      addressCountry: ADDRESS.addressCountry
    }
  };
}

export function localBusinessNode(areaServedNames) {
  return {
    "@type": "LocalBusiness",
    "@id": LOCAL_ID,
    name: BUSINESS_LEGAL_NAME,
    url: SITE_ORIGIN,
    telephone: PHONE_E164,
    email: EMAIL,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: ADDRESS.streetAddress,
      addressLocality: ADDRESS.addressLocality,
      addressRegion: ADDRESS.addressRegion,
      postalCode: ADDRESS.postalCode,
      addressCountry: ADDRESS.addressCountry
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: GEO.latitude,
      longitude: GEO.longitude
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:30",
        closes: "18:30"
      }
    ],
    areaServed: areaServedNames.map((name) => ({
      "@type": "AdministrativeArea",
      name
    })),
    parentOrganization: { "@id": ORG_ID }
  };
}

export function websiteNode() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_ORIGIN,
    name: SITE_NAME,
    publisher: { "@id": ORG_ID },
    inLanguage: "en-IN"
  };
}

export function webPageNode({ pathname, name, description }) {
  const pageUrl = `${SITE_ORIGIN}${pathname}`;
  return {
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name,
    description,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    inLanguage: "en-IN"
  };
}

export function breadcrumbListNode(items) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url
    }))
  };
}

export function serviceNode({ idSuffix, name, description, areaServed }) {
  const pageUrl = `${SITE_ORIGIN}/services/${idSuffix}`;
  return {
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    name,
    description,
    provider: { "@id": ORG_ID },
    areaServed: areaServed.map((n) => ({ "@type": "AdministrativeArea", name: n })),
    serviceType: name,
    url: pageUrl
  };
}

export function faqPageNode(faqs) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer
      }
    }))
  };
}

export const PRIMARY_SERVICE_DEFS = [
  {
    idSuffix: "cctv-solutions",
    name: "CCTV & Video Surveillance Solutions",
    description:
      "Design, supply, installation, and commissioning of industrial CCTV, NVR/DVR, analytics, and perimeter monitoring."
  },
  {
    idSuffix: "biometric-attendance-machine",
    name: "Biometric Attendance & Access Control",
    description:
      "Biometric attendance terminals, door access, turnstiles, and workforce visibility for plants and campuses."
  },
  {
    idSuffix: "weighing-scale",
    name: "Industrial Weighing & Automation",
    description:
      "Industrial scales, load cells, pallet weighing, label printing, and calibration support for manufacturing lines."
  },
  {
    idSuffix: "intercom-systems",
    name: "Intercom & Enterprise Telecom",
    description:
      "PBX, IP-PBX, intercom extensions, and voice infrastructure for offices, plants, and gate communication."
  },
  {
    idSuffix: "boom-barrier",
    name: "Boom Barriers & Vehicle Access",
    description:
      "Vehicle boom barriers, integration with access control, and safe traffic flow for industrial gates."
  },
  {
    idSuffix: "hotel-locks",
    name: "Hotel Locks & Hospitality Access",
    description:
      "Electronic hotel locks, master keying logic, and guest-room access systems for hospitality properties."
  },
  {
    idSuffix: "metal-detectors",
    name: "Metal Detection & Screening",
    description:
      "Walk-through and handheld metal detection, DFMD, baggage screening, and checkpoint design for facilities."
  },
  {
    idSuffix: "door-interlocking",
    name: "Door Interlocking & Airlock Control",
    description:
      "Fail-safe door interlocks for clean rooms, critical zones, and regulated industrial environments."
  }
];

/** Area names for LocalBusiness + Service schema (matches location SEO pages). */
export const AREA_SERVED_NAMES = [
  "Baddi",
  "Nalagarh",
  "Barotiwala",
  "Chandigarh",
  "New Chandigarh",
  "Mohali",
  "Panchkula",
  "Dera Bassi",
  "Haridwar",
  "Kala Amb",
  "Paonta Sahib",
  "Jammu",
  "Jammu and Kashmir",
  "Shimla",
  "Kasauli"
];
