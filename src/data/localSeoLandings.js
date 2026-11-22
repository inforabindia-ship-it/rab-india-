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
        title: "Plan for peak shift movement, not average daily attendance",
        body:
          "Mohali workplaces can have very different entry patterns: an office may see a short morning rush, while a plant may process several shift changes and contractor batches. Before selecting terminals, map the number of people arriving in each time window, the available lanes, and the time allowed for each person to authenticate. This helps estimate reader quantity and avoid queues caused by an undersized entry point."
      },
      {
        title: "Choose the right reader and enrolment process",
        body:
          "Fingerprint, face, card, or a combined method should be selected around the actual work environment, hygiene rules, user comfort, and site policy. Plan enrolment for employees and contractors, define how lost credentials or failed reads are handled, and assign responsibility for keeping records current. A short pilot at one gate or department can reveal practical issues before a wider rollout."
      },
      {
        title: "Make attendance data useful to HR and security",
        body:
          "Confirm the report format, shift rules, exception approvals, and payroll hand-off before installation. Agree who can view or edit records and how corrections are documented. RAB INDIA can assess the site workflow, recommend a suitable configuration, and explain the information needed to scope installation and support."
      }
    ],
    faqs: [
      {
        q: "Which biometric attendance machine is best for factories?",
        a: "There is no single best model for every factory. Selection depends on the number of users, peak entry rate, working conditions, authentication preference, and the attendance software or payroll process. We recommend shortlisting after reviewing these requirements."
      },
      {
        q: "Can biometric attendance handle multiple shifts and contractors?",
        a: "Yes, when shift rules, contractor enrolment, exceptions, and reporting permissions are configured clearly. These requirements should be documented before choosing the terminal and software."
      },
      {
        q: "Can we start with one gate before covering the whole site?",
        a: "A phased pilot can help validate user throughput, enrolment, and reporting. The pilot scope should include the intended shift pattern and a representative group of users."
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
        title: "Design the communication points around daily operations",
        body:
          "Nalagarh industrial sites may need communication between the main gate, security desk, production areas, stores, maintenance teams, and administration. Start by listing each point, who needs to call it, whether calls are internal or external, and what should happen when the first recipient is unavailable. This creates a practical extension plan instead of adding handsets without a clear operating purpose."
      },
      {
        title: "Choose between an intercom, PBX, or IP-PBX approach",
        body:
          "The right platform depends on the number of users, existing telephone infrastructure, call routing needs, available network, and expansion plans. If an existing PBX is to be retained, check compatibility, capacity, licensing, and the condition of cabling and handsets. For an IP-based system, review network readiness and power arrangements before deciding where endpoints and equipment will be installed."
      },
      {
        title: "Make the system maintainable after commissioning",
        body:
          "Label extensions and cable routes, keep a current endpoint list, and document call groups, transfer rules, and administrator access. Test calls from each important location and confirm how faults are reported. RAB INDIA can assess the current setup and outline an intercom or PBX scope suited to the site's communication requirements."
      }
    ],
    faqs: [
      {
        q: "Can an intercom system work with our existing PBX?",
        a: "It may be possible, depending on the PBX model, available ports or SIP support, licensing, and the existing cabling. These details should be checked before confirming compatibility."
      },
      {
        q: "Should an industrial site choose a traditional or IP-based intercom?",
        a: "The decision depends on endpoint count, distance, existing network infrastructure, call features, power availability, and future expansion. A site and system review can help compare the options."
      },
      {
        q: "What should be included in an intercom handover?",
        a: "The handover should identify extensions and locations, call-routing or group settings, equipment details, administrator access arrangements, and basic fault-reporting steps."
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
        title: "Match the lock to the guest-room door",
        body:
          "Hotel lock selection starts with the door rather than the card reader. Confirm door thickness, mortise preparation, handle arrangement, handing, frame condition, and the existing latch before finalising hardware. For properties in Shimla, also review exposure to seasonal temperature and humidity changes, access to rooms during installation, and the availability of replacement batteries and compatible spares."
      },
      {
        title: "Map front-desk, housekeeping, and management workflows",
        body:
          "The system should support the property's actual operating routine: issuing a guest credential at check-in, setting its validity, handling a room change, cancelling a lost card, and providing authorised staff access. Define separate permissions for reception, housekeeping, and maintenance, and agree how emergency or mechanical overrides are controlled. Staff training should include the everyday tasks as well as common exceptions."
      },
      {
        title: "Plan installation with guest operations in mind",
        body:
          "A room-by-room schedule can reduce disruption to occupied rooms and help the property coordinate housekeeping and reception. Before rollout, confirm the number and type of doors, lock finish, credential method, software or encoder requirements, and the process for handover. RAB INDIA can review these details and help define a suitable hotel-lock scope."
      }
    ],
    faqs: [
      {
        q: "What information is needed to select electronic hotel locks?",
        a: "Share the number of guest-room doors, door thickness and type, existing mortise or lock preparation, preferred credential method, and front-desk workflow. A physical door check may be needed before confirming compatibility."
      },
      {
        q: "Can hotel staff have different access permissions?",
        a: "Access roles can generally be planned for guests, reception, housekeeping, and maintenance, subject to the selected lock platform and software. The property should define who can issue, change, and cancel credentials."
      },
      {
        q: "How can installation be managed in an operating hotel?",
        a: "Use a room-wise installation and testing schedule coordinated with reception and housekeeping. Confirm room availability, guest communication, and handover checks before starting each batch."
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
        title: "Select the screening equipment for the entry point",
        body:
          "Walk-through metal detectors and handheld detectors serve different roles. A walk-through unit is generally used for a controlled screening lane, while a handheld device supports secondary checks or targeted inspection. For a Chandigarh institution, campus, or industrial checkpoint, first estimate visitor volume, available queue space, screening policy, and the level of operator supervision before choosing the equipment."
      },
      {
        title: "Balance detection settings with people flow",
        body:
          "Sensitivity settings, alarm procedures, lane width, and the position of the operator all affect how a checkpoint works in practice. A high-throughput entrance needs a clear process for responding to alarms without creating confusion or unsafe crowding. The screening procedure should be set by the organisation's security team and applied consistently by trained operators."
      },
      {
        title: "Include installation, training, and operating procedures",
        body:
          "Before deployment, confirm the power point, installation location, access control around the lane, and the responsible operating team. Handover should cover start-up checks, routine testing, alarm response, escalation, and basic care of the equipment. RAB INDIA can review the checkpoint layout and help define the appropriate walk-through or handheld detector requirement."
      }
    ],
    faqs: [
      {
        q: "What is the difference between a walk-through and handheld metal detector?",
        a: "A walk-through detector is used to screen people passing through a designated lane. A handheld detector is commonly used for secondary or targeted checks. The required combination depends on the site's screening procedure."
      },
      {
        q: "How many walk-through detectors does an entrance need?",
        a: "That depends on visitor volume, arrival peaks, lane layout, screening time, and the organisation's operating procedure. Assess the queue area and expected throughput before deciding the number of lanes."
      },
      {
        q: "Do operators need training to use metal detectors?",
        a: "Yes. Operators should understand start-up checks, the site's alarm-response procedure, consistent screening practice, and escalation steps. Training should follow the organisation's security policy."
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
        title: "Define the door sequence and operating purpose",
        body:
          "A door interlocking system is used where two or more doors must follow an agreed access sequence, such as an airlock or controlled transition. For a Haridwar plant, the first step is to document which doors are part of the sequence, who is authorised to enter, what conditions release each door, and what should happen during an alarm or power interruption. The sequence should reflect the site's approved operating and safety procedures."
      },
      {
        title: "Check the existing doors, hardware, and controls",
        body:
          "A retrofit assessment should review door construction, frames, locking hardware, release devices, power availability, cable routes, and the condition of existing access-control equipment. The design must account for emergency egress and the site's required fail-safe or fail-secure behaviour; these decisions should be confirmed with the client's safety and engineering teams rather than assumed."
      },
      {
        title: "Test, document, and hand over the interlock",
        body:
          "Commissioning should exercise normal entry, denied access, door-held-open conditions, emergency release, and recovery after a power interruption. Record the agreed sequence and test results so operators and maintenance staff understand the system. RAB INDIA can review the door arrangement and prepare a scope around the required sequence and site conditions."
      }
    ],
    faqs: [
      {
        q: "Can you retrofit interlocks on existing Haridwar plant doors?",
        a: "A retrofit may be possible after checking the door construction, locking hardware, power, cable routes, access-control equipment, and emergency-release requirements. The final design depends on the site assessment."
      },
      {
        q: "What is the difference between a door interlock and ordinary access control?",
        a: "Access control decides whether a person may enter a door. An interlock also coordinates multiple doors so they cannot be opened in an unintended sequence. The required logic depends on the process and safety procedure."
      },
      {
        q: "What should be tested before handover?",
        a: "Test normal access, denied access, door-held-open conditions, emergency release, and recovery from power interruption. The test plan should follow the site's approved safety requirements."
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
        title: "Start with a site-wise security and infrastructure review",
        body:
          "Industrial sites rarely need every security system in the same combination. A factory may prioritise perimeter CCTV, gate control, and dispatch verification, while an office or campus may need visitor management, attendance, and network infrastructure. Across Himachal Pradesh, the practical first step is to list each facility, its operating hours, critical areas, current systems, and the problems the project must solve."
      },
      {
        title: "Coordinate CCTV, access, weighing, and voice systems",
        body:
          "Where multiple systems are planned, define how they will be used together without assuming that every platform needs a technical integration. CCTV supports visual review; access control and attendance manage authorised movement and records; weighing systems support material or dispatch checks; and intercom or PBX supports communication between gates and operating teams. Clear scope boundaries make procurement and future maintenance easier."
      },
      {
        title: "Plan delivery around geography and site readiness",
        body:
          "Mobilisation, travel, material movement, civil readiness, cable pathways, power, network availability, and access to work areas all affect project scheduling. RAB INDIA's established focus includes the Baddi–Nalagarh–Barotiwala belt, with projects in other Himachal locations assessed according to scope, logistics, and timelines. A site survey helps establish a realistic sequence for supply, installation, commissioning, and operator handover."
      }
    ],
    faqs: [
      {
        q: "Do you cover only Baddi or other parts of Himachal Pradesh too?",
        a: "Baddi, Nalagarh, and Barotiwala are a key industrial focus. Projects in locations such as Shimla, Kasauli, Kala Amb, and Paonta Sahib can be assessed based on the site, scope, logistics, and schedule."
      },
      {
        q: "Which security systems can be planned for an industrial facility?",
        a: "Depending on the site, the scope may include CCTV, biometric attendance, access control, boom barriers, metal detection, intercom or PBX, networking, and industrial weighing. A site review helps identify which systems are relevant."
      },
      {
        q: "Can multiple facilities be covered under one project?",
        a: "A multi-site project can be planned with common equipment standards and documentation where appropriate. Each location still needs its own assessment of infrastructure, operating requirements, and delivery schedule."
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
