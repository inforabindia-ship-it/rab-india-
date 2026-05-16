/**
 * Service + city intent pages (flat URLs). Copy is written for humans first; city/service terms appear where they add clarity, not in every sentence.
 * `serviceSlug` links back to /services/:slug; `locationSlug` to /locations/:slug.
 *
 * Dedicated CCTV city pages use `cctvLocalLandings.js` + `CctvLocalLandingPage` (see `CCTV_LOCAL_ROUTES`).
 */

import { CCTV_LOCAL_LANDINGS, CCTV_LOCAL_ROUTES } from "./cctvLocalLandings.js";

function L(config) {
  return { ...config };
}

export const LOCAL_SEO_LANDINGS = [
  L({
    route: "cctv-installation-baddi",
    serviceSlug: "cctv-solutions",
    locationSlug: "baddi",
    metaTitle: "CCTV Installation in Baddi | RAB INDIA",
    metaDescription:
      "CCTV installation in Baddi for factories and warehouses—industrial cameras, NVR sizing, cabling, and commissioning. RAB INDIA serves Baddi, Nalagarh, and Barotiwala.",
    h1: "CCTV installation in Baddi for factories, warehouses, and commercial sites",
    lead:
      "Dense industrial belts need CCTV that survives dust, vibration, and night-time truck cycles—not consumer kits behind glass. We plan sightlines, storage, and access policies so your team can investigate incidents without guesswork.",
    sections: [
      {
        title: "What a strong Baddi-area CCTV scope usually includes",
        body:
          "Most clients want perimeter clarity, dock visibility, and selective internal coverage for quality or safety disputes. We align camera models to lighting and distance, then size NVR resources so retention does not silently degrade after a few months of full recording."
      },
      {
        title: "Factory and warehouse realities we design around",
        body:
          "Cable routes, IDF placement, and power backup assumptions are validated early. Where the network is shared, we discuss VLAN separation with your IT team so surveillance traffic does not compete with ERP traffic during peak shifts."
      }
    ],
    faqs: [
      {
        q: "Do you provide CCTV installation in Baddi?",
        a: "Yes. We survey sites around Baddi, Nalagarh, and Barotiwala, then deliver structured installation with commissioning checklists and operator training."
      },
      {
        q: "Which CCTV setup is best for factories?",
        a: "There is no single SKU. The right design depends on lighting, mounting height, retention targets, and how your team reviews footage. We shortlist after a walkthrough, not from a catalogue guess."
      }
    ],
    navLabel: "CCTV in Baddi"
  }),
  L({
    route: "cctv-solutions-chandigarh",
    serviceSlug: "cctv-solutions",
    locationSlug: "chandigarh",
    metaTitle: "CCTV Solutions in Chandigarh | RAB INDIA",
    metaDescription:
      "Enterprise-grade CCTV for Chandigarh offices, campuses, and nearby industrial units—clean cabling, role-based viewing, and storage sized for real retention targets. Enquire: +91 7814421210.",
    h1: "CCTV solutions for Chandigarh enterprises and campuses",
    lead:
      "Chandigarh projects often mix corporate standards with practical guard-desk workflows. We keep designs serviceable: labelled homeruns, predictable storage growth, and remote access paths that respect your IT policy.",
    sections: [
      {
        title: "When Chandigarh sites need more than extra cameras",
        body:
          "If you are expanding floors or towers, we help avoid reactive add-ons that overload uplinks. A short network readiness review often saves rework after false ceilings close."
      },
      {
        title: "Voice-search friendly summary",
        body:
          "If you are searching for CCTV solutions in Chandigarh, expect a process that starts with a survey, proposes camera and storage sizing, and ends with documented training—not a rushed camera count."
      }
    ],
    faqs: [
      {
        q: "Do you install CCTV in Chandigarh only, or nearby belts too?",
        a: "We routinely support Mohali, Panchkula, New Chandigarh, and Dera Bassi from the same delivery practice, with mileage and timelines agreed up front."
      }
    ],
    navLabel: "CCTV in Chandigarh"
  }),
  L({
    route: "biometric-attendance-mohali",
    serviceSlug: "biometric-attendance-machine",
    locationSlug: "mohali",
    metaTitle: "Biometric Attendance System in Mohali | RAB INDIA",
    metaDescription:
      "Biometric attendance and access terminals for Mohali IT parks and plants—throughput-aware gate design, export-friendly logs, and AMC thinking from day one. Phone +91 7814421210.",
    h1: "Biometric attendance systems for Mohali workplaces",
    lead:
      "Shift change bottlenecks are expensive. We choose modalities and reader counts after observing peak ingress, then align exports with payroll expectations so disputes drop instead of rising after go-live.",
    sections: [
      {
        title: "Why Mohali IT and light industrial sites ask for structured attendance",
        body:
          "Mixed contractor traffic, multi-tenant floors, and audit requests reward clear batching rules. We document enrollment hygiene and exception handling so security and HR share the same playbook."
      }
    ],
    faqs: [
      {
        q: "Which biometric attendance machine is best for factories?",
        a: "It depends on gloves, hygiene rules, and environment. We pilot a lane or department before scaling so you learn throughput truth early rather than after full rollout."
      }
    ],
    navLabel: "Attendance in Mohali"
  }),
  L({
    route: "boom-barrier-panchkula",
    serviceSlug: "boom-barrier",
    locationSlug: "panchkula",
    metaTitle: "Boom Barrier Installation in Panchkula | RAB INDIA",
    metaDescription:
      "Vehicle boom barriers for Panchkula campuses and logistics gates—safety accessories, loop planning, and integration options that match real traffic. Call +91 7814421210.",
    h1: "Boom barrier installation for Panchkula gates",
    lead:
      "Queues form when barriers, readers, and guard habits disagree. We commission with signage, loop sensors, and clear override steps so peak hours stay predictable for both security and visitors.",
    sections: [
      {
        title: "Boom barriers for industries in Chandigarh Tricity context",
        body:
          "Many Panchkula deployments coordinate with the same fleets that serve Chandigarh and Mohali. If you need consistent vehicle policy across sites, we can template naming and logging so multi-location estates stay supportable."
      }
    ],
    faqs: [
      {
        q: "Do you install boom barriers in Chandigarh as well?",
        a: "Yes. The same delivery team supports Tricity gates; scope and civil readiness are confirmed before we lock barrier models and foundation expectations."
      }
    ],
    navLabel: "Boom barriers in Panchkula"
  }),
  L({
    route: "intercom-system-nalagarh",
    serviceSlug: "intercom-systems",
    locationSlug: "nalagarh",
    metaTitle: "Intercom System Provider in Nalagarh | RAB INDIA",
    metaDescription:
      "Intercom and voice systems for Nalagarh plants—gate desks, workshops, and PBX/IP extensions with disciplined cabling and documented MAC moves. +91 7814421210.",
    h1: "Intercom systems for Nalagarh industrial units",
    lead:
      "When a gate calls a desk, clarity matters. We design intercom and PBX paths for industrial noise, cable distances, and the maintenance access your team will actually use after commissioning.",
    sections: [
      {
        title: "Commercial access control and voice, without mixing metaphors",
        body:
          "Intercom is not CCTV; it is coordination infrastructure. We keep scope crisp so procurement sees a voice outcome, not a vague unified platform promise."
      }
    ],
    faqs: [
      {
        q: "Can intercom work with our existing PBX?",
        a: "Often yes, depending on SIP compatibility and licensing. We validate VLAN and power design before committing to integration outcomes."
      }
    ],
    navLabel: "Intercom in Nalagarh"
  }),
  L({
    route: "hotel-locks-shimla",
    serviceSlug: "hotel-locks",
    locationSlug: "shimla",
    metaTitle: "Hotel Lock System in Shimla | RAB INDIA",
    metaDescription:
      "Electronic hotel locks and guest-room access for Shimla properties—battery strategy, staff workflows, and hillside installation realities handled pragmatically. +91 7814421210.",
    h1: "Hotel lock systems for Shimla hospitality",
    lead:
      "Hillside humidity and winter cycles punish poor lock choices. We select hardware for mortise fit, egress rules, and front-desk workflows so night audits stay calm during peak tourist weeks.",
    sections: [
      {
        title: "Hotel lock installation in Shimla without guest friction",
        body:
          "Training matters as much as hardware. We focus on check-in, overrides, and lost-card scenarios so staff confidence matches the technology investment."
      }
    ],
    faqs: [
      {
        q: "Do you install hotel locks in Shimla year-round?",
        a: "Yes, with weather-aware scheduling for exposed façades and realistic timelines for battery and spare planning before busy seasons."
      }
    ],
    navLabel: "Hotel locks in Shimla"
  }),
  L({
    route: "metal-detectors-chandigarh",
    serviceSlug: "metal-detectors",
    locationSlug: "chandigarh",
    metaTitle: "Metal Detector Supplier in Chandigarh | RAB INDIA",
    metaDescription:
      "Walk-through and handheld metal detection for Chandigarh institutions and industrial checkpoints—queue geometry, sensitivity targets, and operator training included. +91 7814421210.",
    h1: "Metal detection programs for Chandigarh checkpoints",
    lead:
      "Screening fails when sensitivity goals fight throughput. We design queue geometry and device classes for your visitor peaks, then train operators on consistent calibration habits.",
    sections: [
      {
        title: "Industrial metal detector supplier with integration discipline",
        body:
          "If you also run access control or CCTV, we align naming and incident steps so security desks do not maintain three unrelated playbooks."
      }
    ],
    faqs: [
      {
        q: "Industrial metal detector supplier in Punjab region—do you cover that?",
        a: "Yes. Chandigarh Tricity and nearby industrial belts are within our normal deployment radius, with logistics agreed in the project plan."
      }
    ],
    navLabel: "Metal detection in Chandigarh"
  }),
  L({
    route: "door-interlocking-haridwar",
    serviceSlug: "door-interlocking",
    locationSlug: "haridwar",
    metaTitle: "Door Interlocking System in Haridwar | RAB INDIA",
    metaDescription:
      "Door interlocks and airlock logic for Haridwar plants—fail-safe sequences, documentation your safety team can audit, and commissioning evidence that matches SOPs. Call +91 7814421210.",
    h1: "Door interlocking systems for Haridwar process plants",
    lead:
      "Large footprints amplify risk when interlock logic is opaque. We make states legible for operators and maintenance, with labelled interfaces and test evidence appropriate to your governance model.",
    sections: [
      {
        title: "Warehouse security systems vs interlocks—different intent",
        body:
          "Interlocks protect sequences and people; perimeter CCTV protects evidence. We keep messaging clear so budgets land on the right layer first."
      }
    ],
    faqs: [
      {
        q: "Can you retrofit interlocks on existing Haridwar plant doors?",
        a: "Often yes, after strike and structural assessment. We prototype logic on a pilot pair when risk warrants it."
      }
    ],
    navLabel: "Interlocks in Haridwar"
  }),
  L({
    route: "weighing-scale-baddi",
    serviceSlug: "weighing-scale",
    locationSlug: "baddi",
    metaTitle: "Weighing Scale Supplier in Baddi | RAB INDIA",
    metaDescription:
      "Industrial weighing scales, load cells, and dispatch verification for Baddi-area logistics—commissioning, operator training, and calibration coordination when required. +91 7814421210.",
    h1: "Industrial weighing scales for Baddi logistics and production",
    lead:
      "Weighing arguments usually trace to unclear ticket flows or unstable foundations—not only the indicator model. We pair hardware to your loads and then train desks on consistent ticket and exception habits.",
    sections: [
      {
        title: "Smart security solutions complement—but do not replace—weights discipline",
        body:
          "If CCTV watches a gate and weighing proves dispatch, both systems should tell the same story. We encourage aligned timestamps and naming so investigations stay short."
      }
    ],
    faqs: [
      {
        q: "Do you calibrate industrial scales in Baddi?",
        a: "We commission equipment and coordinate statutory calibration through accredited partners when your process requires traceable certificates."
      }
    ],
    navLabel: "Weighing in Baddi"
  }),
  L({
    route: "industrial-security-himachal-pradesh",
    serviceSlug: null,
    locationSlug: null,
    metaTitle: "Industrial Security Solutions in Himachal Pradesh | RAB INDIA",
    metaDescription:
      "Industrial CCTV, access, weighing, and voice systems across Himachal Pradesh—Baddi belt expertise with documentation-first delivery and long-term support. Phone +91 7814421210.",
    h1: "Industrial security solutions across Himachal Pradesh",
    lead:
      "From pharma corridors to logistics-heavy valleys, clients want a partner who understands mountain roads, spare lead times, and the difference between a demo rack and a plant IDF. We plan projects for service access, not just day-one go-live photos.",
    sections: [
      {
        title: "Factory security solutions with a regional delivery lens",
        body:
          "That means realistic mobilisation schedules, fewer single-vendor miracles, and operator training that matches shift literacy—not slide decks that never reach the guard room."
      },
      {
        title: "Commercial access control without buzzword soup",
        body:
          "We speak plainly about turnstiles, barriers, attendance exports, and audit trails so finance, HR, and security can approve the same scope."
      }
    ],
    faqs: [
      {
        q: "Do you cover only Baddi or all of Himachal Pradesh?",
        a: "Baddi–Nalagarh–Barotiwala is our highest-density belt, but we also support Shimla, Kasauli, Kala Amb, Paonta Sahib, and other industrial pockets when timelines and logistics align."
      }
    ],
    navLabel: "Himachal industrial security"
  })
];

/** All local landing route segments (sitemap includes every entry). */
export const ALL_LOCAL_LANDING_ROUTES = LOCAL_SEO_LANDINGS.map((p) => p.route);

/** Routes handled by generic `LocalServiceLanding` (dedicated pages excluded). */
export const LOCAL_SEO_ROUTES = ALL_LOCAL_LANDING_ROUTES.filter((route) => !CCTV_LOCAL_ROUTES.includes(route));

const byRoute = Object.fromEntries(LOCAL_SEO_LANDINGS.map((p) => [`/${p.route}`, p]));

export function getLocalLandingByPathname(pathname) {
  const key = pathname.endsWith("/") && pathname.length > 1 ? pathname.slice(0, -1) : pathname;
  return byRoute[key] ?? null;
}

/** A few related landings for a service page (not exhaustive; avoids stuffing). */
export function getRelatedLandingsForService(serviceSlug, limit = 6) {
  const fromGeneric = LOCAL_SEO_LANDINGS.filter((p) => p.serviceSlug === serviceSlug);
  const cctvMapped = CCTV_LOCAL_LANDINGS.filter((p) => p.serviceSlug === serviceSlug).map((p) => ({
    route: p.route,
    navLabel: p.breadcrumbLabel,
    serviceSlug: p.serviceSlug
  }));
  const seen = new Set();
  const merged = [];
  for (const p of [...fromGeneric, ...cctvMapped]) {
    if (seen.has(p.route)) continue;
    seen.add(p.route);
    merged.push(p);
  }
  return merged.slice(0, limit);
}
