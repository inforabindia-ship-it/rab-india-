/**
 * Dedicated local CCTV landing pages (flat URLs). Each entry powers `CctvLocalLandingPage`.
 */

function city(config) {
  return { serviceSlug: "cctv-solutions", ...config };
}

export const CCTV_LOCAL_LANDINGS = [
  city({
    route: "cctv-installation-baddi",
    locationSlug: "baddi",
    metaTitle: "CCTV Installation in Baddi | RAB INDIA",
    metaDescription:
      "CCTV installation in Baddi for factories and warehouses—industrial cameras, NVR sizing, cabling, and commissioning. RAB INDIA serves Baddi, Nalagarh, and Barotiwala.",
    h1: "CCTV installation in Baddi for factories, warehouses, and commercial sites",
    heroLead:
      "The Baddi industrial belt runs on tight shift cycles, truck traffic, and dust-heavy shop floors. RAB INDIA installs industrial CCTV and factory surveillance systems sized for real retention—perimeter clarity, dock visibility, and footage your security team can actually use.",
    eyebrow: "Baddi industrial belt · CCTV",
    breadcrumbLabel: "CCTV in Baddi",
    whyTitle: "Why plants in Baddi choose RAB INDIA",
    whyIntro:
      "You need a partner who shows up on the belt, speaks factory language, and leaves documentation your IT and security teams can maintain.",
    whyChoose: [
      { title: "Local mobilisation from Baddi", text: "Nalagarh, Barotiwala, and nearby logistics corridors stay within practical survey and commissioning windows." },
      { title: "Industrial-grade scope", text: "Camera models and recorder sizing follow your lighting and distance—not consumer kits that fail after one dusty season." },
      { title: "Commercial security that scales", text: "Admin blocks and light industrial units get the same labelled homeruns and handover discipline as large plants." },
      { title: "IT-friendly delivery", text: "VLAN guidance and role-based viewing are agreed before ceilings close and cable routes are trapped." },
      { title: "Structured commissioning", text: "Time sync, retention checks, and operator training are part of close-out." },
      { title: "Support after go-live", text: "AMC-minded paths for recorder health, firmware, and spare planning." }
    ],
    industries: [
      "Pharma and API manufacturing units",
      "FMCG and packaging plants",
      "Warehousing, 3PL, and dispatch yards",
      "Engineering and auto-ancillary shops",
      "Cold chain and food-processing facilities",
      "Commercial blocks on industrial estates"
    ],
    industriesIntro:
      "Coverage patterns differ by sector, but the goal is evidence you can retrieve quickly when operations or compliance teams ask.",
    faqs: [
      { q: "Do you provide CCTV installation in Baddi?", a: "Yes. We survey Baddi-area sites, propose camera and storage sizing, then install and commission with checklists and operator training." },
      { q: "What industrial CCTV solutions suit Baddi factories best?", a: "There is no single SKU. We match cameras and NVR resources after a walkthrough of gates, bays, and critical aisles." },
      { q: "Can you cover factory surveillance for night shifts and truck gates?", a: "Yes. Perimeter and dock lines are planned for glare and distance so night incidents remain reviewable." },
      { q: "Do you install commercial security systems on the same estates?", a: "We support mixed estates where plant, warehouse, and admin blocks share gates with distinct scopes." },
      { q: "How far from Baddi do you routinely work?", a: "Nalagarh and Barotiwala are common extensions; Tricity projects are scheduled when your programme needs one partner." }
    ],
    contextLinks: [
      { label: "Industrial CCTV overview", to: "/services/cctv-solutions" },
      { label: "Baddi service area", to: "/locations/baddi" },
      { label: "Nalagarh", to: "/locations/nalagarh" }
    ],
    exploreLinks: [
      { label: "Chandigarh CCTV", to: "/cctv-solutions-chandigarh" },
      { label: "Storage planning guide", to: "/blog/how-to-plan-cctv-storage-for-factories" }
    ],
    ctaTitle: "Book a Baddi-area CCTV survey",
    ctaBody: "Share your plant or warehouse location, gate and bay count, and retention targets. We respond with a survey date and realistic scope outline.",
    imageAlt: "CCTV installation at an industrial site in the Baddi area"
  }),
  city({
    route: "cctv-solutions-chandigarh",
    locationSlug: "chandigarh",
    metaTitle: "CCTV Solutions in Chandigarh | RAB INDIA",
    metaDescription:
      "CCTV solutions in Chandigarh for offices, campuses, and industrial units—role-based viewing, structured cabling, and NVR sizing. Mohali and Panchkula supported.",
    h1: "CCTV solutions in Chandigarh for enterprises, campuses, and industrial sites",
    heroLead:
      "Chandigarh projects often mix corporate standards with practical guard-desk workflows. RAB INDIA delivers industrial CCTV and commercial security systems with labelled homeruns, predictable storage growth, and remote access that respects your IT policy—not a rushed camera count.",
    eyebrow: "Chandigarh Tricity · CCTV",
    breadcrumbLabel: "CCTV in Chandigarh",
    whyTitle: "Why Chandigarh teams choose RAB INDIA",
    whyIntro:
      "Whether you are a campus, institution, or plant on the industrial outskirts, you need CCTV a facilities team can maintain after handover.",
    whyChoose: [
      { title: "Tricity delivery practice", text: "Mohali, Panchkula, and New Chandigarh sites are supported from the same accountable team with agreed mileage and timelines." },
      { title: "Enterprise-ready documentation", text: "Scope, as-builts, and user roles are written for procurement and IT review—not informal verbal promises." },
      { title: "Industrial CCTV where needed", text: "Factory surveillance on the periphery gets the same retention and cable discipline as corporate floors." },
      { title: "Storage sized honestly", text: "Bitrate and retention targets are modelled so performance does not degrade silently after month six." },
      { title: "Guard-desk friendly workflows", text: "Live view and playback paths match how your security desk actually works shifts." },
      { title: "Long-term support", text: "AMC thinking for firmware, spares, and recorder health is discussed before go-live." }
    ],
    industries: [
      "Corporate offices and institutions",
      "IT parks and commercial campuses",
      "Hospitality and mixed-use properties",
      "Warehousing and logistics on city outskirts",
      "Light manufacturing and workshops",
      "Healthcare and education facilities"
    ],
    industriesIntro:
      "Each sector stresses different sightlines—lobbies, docks, or perimeter—but the delivery method stays structured: survey, design, install, train.",
    faqs: [
      { q: "Do you install CCTV in Chandigarh only, or nearby cities too?", a: "We routinely support Mohali, Panchkula, New Chandigarh, and Dera Bassi from the same practice, with logistics agreed up front." },
      { q: "Are you a CCTV company in Chandigarh for industrial sites?", a: "Yes. We specify industrial cameras and recorders for plants and logistics gates, not only office corridors." },
      { q: "What should I expect from a Chandigarh CCTV survey?", a: "A walkthrough of sightlines, cable routes, retention needs, and IT constraints—then a written scope you can circulate internally." },
      { q: "Can factory surveillance systems share our office network?", a: "Often on a segregated VLAN or dedicated recorder network. We align with your IT team before installation starts." },
      { q: "Do you provide commercial security solutions for multi-building estates?", a: "Yes. We keep naming, time sync, and access policies consistent so multi-building reviews stay practical." }
    ],
    contextLinks: [
      { label: "Full CCTV service page", to: "/services/cctv-solutions" },
      { label: "Chandigarh service area", to: "/locations/chandigarh" },
      { label: "Mohali", to: "/cctv-installation-mohali" }
    ],
    exploreLinks: [
      { label: "CCTV in Baddi", to: "/cctv-installation-baddi" },
      { label: "Panchkula CCTV", to: "/cctv-installation-panchkula" }
    ],
    ctaTitle: "Request a Chandigarh CCTV survey",
    ctaBody: "Tell us your building or campus, approximate camera count, and retention goals. We reply with a clear next step—not a generic brochure.",
    imageAlt: "CCTV solutions for a Chandigarh enterprise or campus"
  }),
  city({
    route: "cctv-installation-mohali",
    locationSlug: "mohali",
    metaTitle: "CCTV Installation in Mohali | RAB INDIA",
    metaDescription:
      "CCTV installation in Mohali for IT parks and plants—industrial cameras, structured cabling, and NVR sizing. RAB INDIA supports Mohali, Chandigarh, and Panchkula.",
    h1: "CCTV installation in Mohali for IT parks, plants, and commercial sites",
    heroLead:
      "Mohali mixes high-throughput IT parks with light industrial units that need practical factory surveillance—not showroom demos. RAB INDIA installs industrial CCTV with retention you can defend, clean cabling, and handover your facilities team can support.",
    eyebrow: "Mohali · CCTV",
    breadcrumbLabel: "CCTV in Mohali",
    whyTitle: "Why Mohali sites choose RAB INDIA",
    whyIntro:
      "IT parks and plants share one need: footage and access policies that still make sense after the integrator leaves site.",
    whyChoose: [
      { title: "IT park experience", text: "Uplinks, IDF placement, and VLAN conversations happen early so CCTV does not fight ERP traffic at month three." },
      { title: "Industrial CCTV on the same programme", text: "Shop-floor and gate coverage uses industrial camera classes where distance and lighting demand it." },
      { title: "Tricity coordination", text: "Chandigarh and Panchkula sister sites can share naming and support contacts when you run multi-location estates." },
      { title: "Throughput-aware design", text: "Gate and lobby cameras are placed for real footfall, not theoretical coverage maps." },
      { title: "Documented commissioning", text: "Operator training and retention verification are part of close-out." },
      { title: "AMC-ready delivery", text: "Spare and firmware planning is discussed before sign-off." }
    ],
    industries: [
      "IT parks and tech campuses",
      "Electronics and light manufacturing",
      "Warehousing and last-mile logistics",
      "Commercial towers and business centres",
      "Educational and training institutes",
      "Mixed industrial estates"
    ],
    industriesIntro:
      "Mohali deployments often blend lobby visibility with yard and dock evidence—scopes stay separate so procurement stays clear.",
    faqs: [
      { q: "Do you provide CCTV installation in Mohali?", a: "Yes. We survey Mohali IT parks and industrial units, then deliver structured installation with commissioning checklists." },
      { q: "Can you install industrial CCTV solutions with our existing network team?", a: "We work alongside your IT contact on VLANs, uplinks, and remote access policy before ceilings close." },
      { q: "Do you cover factory surveillance for Mohali plants?", a: "Yes. Perimeter, production, and dock lines are planned for lighting and retention targets from a walkthrough." },
      { q: "Is Chandigarh Tricity covered from the same team?", a: "Chandigarh and Panchkula are routine extensions with timelines agreed in the project plan." },
      { q: "What commercial security solutions do you offer beyond cameras?", a: "We focus on CCTV and video evidence; access control scopes are kept distinct unless you ask for a combined programme." }
    ],
    contextLinks: [
      { label: "CCTV services overview", to: "/services/cctv-solutions" },
      { label: "Mohali service area", to: "/locations/mohali" },
      { label: "Chandigarh CCTV", to: "/cctv-solutions-chandigarh" }
    ],
    exploreLinks: [
      { label: "Panchkula", to: "/cctv-installation-panchkula" },
      { label: "All service areas", to: "/locations" }
    ],
    ctaTitle: "Book a Mohali CCTV survey",
    ctaBody: "Share your park or plant address, gate count, and how long you need recordings kept. We respond with survey timing and scope clarity.",
    imageAlt: "CCTV installation at a Mohali IT park or industrial site"
  }),
  city({
    route: "cctv-installation-panchkula",
    locationSlug: "panchkula",
    metaTitle: "CCTV Installation in Panchkula | RAB INDIA",
    metaDescription:
      "CCTV installation in Panchkula for campuses and logistics gates—industrial cameras, NVR sizing, and clean handover. Chandigarh Tricity coverage from RAB INDIA.",
    h1: "CCTV installation in Panchkula for campuses, industries, and logistics gates",
    heroLead:
      "Panchkula sites often coordinate with the same fleets and security policies as Chandigarh and Mohali. RAB INDIA installs industrial CCTV and commercial security systems with consistent naming, retention targets, and documentation your multi-site team can reuse.",
    eyebrow: "Panchkula · CCTV",
    breadcrumbLabel: "CCTV in Panchkula",
    whyTitle: "Why Panchkula clients choose RAB INDIA",
    whyIntro:
      "Gate-heavy campuses and industrial pockets need CCTV that survives daily traffic and still produces reviewable evidence.",
    whyChoose: [
      { title: "Tricity templates", text: "Multi-location estates can align user roles and incident steps across Panchkula, Mohali, and Chandigarh." },
      { title: "Gate and yard focus", text: "Vehicle approaches, docks, and lobbies are planned for glare and queue geometry—not just camera count." },
      { title: "Industrial CCTV discipline", text: "Plants on the belt get industrial camera classes and cable routes suited to dust and vibration." },
      { title: "Commercial security clarity", text: "Institutional and commercial blocks receive the same structured handover as industrial gates." },
      { title: "Honest storage sizing", text: "NVR resources are modelled for your retention promise, not a demo-day bitrate." },
      { title: "Support after commissioning", text: "AMC paths for recorder health and firmware hygiene are part of planning." }
    ],
    industries: [
      "Institutional and government campuses",
      "Logistics and transport yards",
      "Manufacturing on the Tricity periphery",
      "Commercial complexes",
      "Healthcare facilities",
      "Residential society back-of-house and gates"
    ],
    industriesIntro:
      "Panchkula mixes institutional calm with active gates—design balances privacy expectations with operational evidence needs.",
    faqs: [
      { q: "Do you install CCTV in Panchkula?", a: "Yes. We survey Panchkula campuses and industrial gates, then install and commission with documented training." },
      { q: "Do you work across Chandigarh Tricity?", a: "Chandigarh and Mohali are supported from the same delivery practice with agreed logistics." },
      { q: "What factory surveillance systems suit Panchkula plants?", a: "Design depends on lighting, mounting height, and retention. We shortlist after a site walk, not from a catalogue guess." },
      { q: "Can you match CCTV policy with our Chandigarh site?", a: "Yes. Naming, time sync, and role templates can be aligned for multi-location review." },
      { q: "Do you provide commercial security solutions for large gates?", a: "Yes. Vehicle lanes, barriers, and lobby sightlines are scoped together where operations require it." }
    ],
    contextLinks: [
      { label: "Industrial CCTV overview", to: "/services/cctv-solutions" },
      { label: "Panchkula service area", to: "/locations/panchkula" },
      { label: "Chandigarh", to: "/cctv-solutions-chandigarh" }
    ],
    exploreLinks: [
      { label: "Mohali CCTV", to: "/cctv-installation-mohali" },
      { label: "Blog", to: "/blog" }
    ],
    ctaTitle: "Schedule a Panchkula CCTV survey",
    ctaBody: "Describe your campus or gate layout, retention needs, and any sister sites in Tricity. We reply with a practical survey plan.",
    imageAlt: "CCTV installation at a Panchkula campus or logistics gate"
  }),
  city({
    route: "cctv-installation-nalagarh",
    locationSlug: "nalagarh",
    metaTitle: "CCTV Installation in Nalagarh | RAB INDIA",
    metaDescription:
      "CCTV installation in Nalagarh for industrial units—factory surveillance, NVR sizing, and phased rollout. RAB INDIA serves Nalagarh, Baddi, and Barotiwala.",
    h1: "CCTV installation in Nalagarh for factories and industrial estates",
    heroLead:
      "Nalagarh plants share the same belt realities as Baddi—dust, shift traffic, and tight maintenance windows. RAB INDIA delivers industrial CCTV with dock and perimeter clarity, storage sized for real retention, and commissioning evidence your safety and IT teams can audit.",
    eyebrow: "Nalagarh industrial belt · CCTV",
    breadcrumbLabel: "CCTV in Nalagarh",
    whyTitle: "Why Nalagarh plants choose RAB INDIA",
    whyIntro:
      "Phased rollouts and pharma-grade discipline are common here—documentation matters as much as camera models.",
    whyChoose: [
      { title: "Belt familiarity", text: "Nalagarh, Baddi, and Barotiwala mobilisation stays practical for survey and commissioning windows." },
      { title: "Pharma-aware delivery", text: "Clean-room adjacency and SOP-friendly handover are discussed before cable routes are fixed." },
      { title: "Industrial CCTV scope", text: "Camera and recorder choices follow lighting on high bays and night truck cycles." },
      { title: "Phased expansion", text: "Phase-one gates and yards can grow without ripping out naming or storage logic." },
      { title: "Factory surveillance focus", text: "Production and logistics evidence is planned for incidents your team actually investigates." },
      { title: "AMC-minded support", text: "Recorder health and spare planning are part of the conversation before go-live." }
    ],
    industries: [
      "Pharma and formulation units",
      "Chemical and process plants",
      "Warehousing and inward/outward bays",
      "Engineering and fabrication shops",
      "FMCG secondary packaging",
      "Utilities on industrial estates"
    ],
    industriesIntro:
      "Regulated and logistics-heavy sites dominate—retention and access control to footage are scoped for audit questions.",
    faqs: [
      { q: "Do you provide CCTV installation in Nalagarh?", a: "Yes. We survey Nalagarh industrial units and deliver structured installation with commissioning checklists." },
      { q: "Can we start with a small CCTV pilot in Nalagarh?", a: "Often yes. Phase-one gates and critical bays are common; expansion keeps the same naming and storage logic." },
      { q: "What industrial CCTV solutions work on Nalagarh plants?", a: "We match cameras and NVR resources to lighting, distance, and retention after a walkthrough—not a one-size SKU list." },
      { q: "Do you also work in Baddi and Barotiwala?", a: "Yes. The belt is our highest-density region; timelines are agreed realistically for each site." },
      { q: "How do you handle factory surveillance at night?", a: "Perimeter and dock lines are planned for headlight glare and distance so night footage stays usable." }
    ],
    contextLinks: [
      { label: "CCTV services", to: "/services/cctv-solutions" },
      { label: "Nalagarh service area", to: "/locations/nalagarh" },
      { label: "Baddi CCTV", to: "/cctv-installation-baddi" }
    ],
    exploreLinks: [
      { label: "Intercom in Nalagarh", to: "/intercom-system-nalagarh" },
      { label: "Product details", to: "/product/cctv" }
    ],
    ctaTitle: "Book a Nalagarh CCTV survey",
    ctaBody: "Share your unit location, critical zones, and retention targets. We respond with survey timing and a clear scope path.",
    imageAlt: "CCTV installation at a Nalagarh industrial unit"
  }),
  city({
    route: "cctv-installation-haridwar",
    locationSlug: "haridwar",
    metaTitle: "CCTV Installation in Haridwar | RAB INDIA",
    metaDescription:
      "CCTV installation in Haridwar for large plants—perimeter and dock coverage, NVR sizing, and structured commissioning. Factory surveillance from RAB INDIA.",
    h1: "CCTV installation in Haridwar for large-footprint factories and logistics sites",
    heroLead:
      "Haridwar plants often span long perimeters and busy dispatch yards. RAB INDIA designs industrial CCTV and factory surveillance systems with realistic cable routes, storage for retention promises, and handover your security and IT teams can maintain after go-live.",
    eyebrow: "Haridwar · CCTV",
    breadcrumbLabel: "CCTV in Haridwar",
    whyTitle: "Why Haridwar plants choose RAB INDIA",
    whyIntro:
      "Large sites need evidence at scale without a recorder that silently runs out of space—or cameras that fail at the far fence line.",
    whyChoose: [
      { title: "Large-perimeter planning", text: "Long fence lines and yard distances are modelled for camera class and uplink capacity early." },
      { title: "Dispatch yard focus", text: "Dock and truck evidence is planned for glare, queue geometry, and shift change." },
      { title: "Industrial CCTV discipline", text: "Recorder and switch sizing follow documented bitrate targets, not guesswork." },
      { title: "Phased rollout option", text: "Critical gates and yards first; expansion without breaking naming or storage logic." },
      { title: "Commercial security at admin blocks", text: "Front offices and control rooms get role-based viewing aligned to plant policy." },
      { title: "Documented commissioning", text: "Training and retention verification are part of close-out for multi-shift teams." }
    ],
    industries: [
      "Large manufacturing and process plants",
      "FMCG and consumer goods units",
      "Automotive and engineering suppliers",
      "Warehousing and national logistics hubs",
      "Power and utility-adjacent sites",
      "Commercial and admin campuses on plant estates"
    ],
    industriesIntro:
      "Footprint drives design—perimeter, yard, and selective internal coverage are prioritised with retention you can explain to leadership.",
    faqs: [
      { q: "Do you install CCTV in Haridwar?", a: "Yes. We survey Haridwar plants and logistics sites, then deliver structured installation and commissioning." },
      { q: "Can you handle large-perimeter CCTV in Haridwar?", a: "Yes. Distance, lighting, and uplink capacity are modelled in the survey—not added as change orders later." },
      { q: "What factory surveillance systems suit Haridwar units?", a: "Industrial camera classes and NVR sizing follow your incident review habits and retention targets from a walkthrough." },
      { q: "Do you provide commercial security solutions on the same estate?", a: "Admin and gate scopes can run in parallel with clear documentation for each." },
      { q: "How far in advance should we book a survey?", a: "Share site access windows and critical zones; we propose survey timing and a realistic install sequence." }
    ],
    contextLinks: [
      { label: "CCTV overview", to: "/services/cctv-solutions" },
      { label: "Haridwar service area", to: "/locations/haridwar" },
      { label: "Door interlocking", to: "/door-interlocking-haridwar" }
    ],
    exploreLinks: [
      { label: "Baddi belt CCTV", to: "/cctv-installation-baddi" },
      { label: "All locations", to: "/locations" }
    ],
    ctaTitle: "Request a Haridwar CCTV survey",
    ctaBody: "Tell us your plant footprint, priority zones, and retention goals. We reply with survey planning and scope clarity.",
    imageAlt: "CCTV installation at a Haridwar manufacturing plant"
  }),
  city({
    route: "cctv-installation-shimla",
    locationSlug: "shimla",
    metaTitle: "CCTV Installation in Shimla | RAB INDIA",
    metaDescription:
      "CCTV installation in Shimla for hospitality, institutions, and campuses—weather-aware design, clean cabling, and role-based viewing. RAB INDIA.",
    h1: "CCTV installation in Shimla for hospitality, institutions, and hillside campuses",
    heroLead:
      "Shimla properties face weather, access, and privacy constraints that flat-city templates ignore. RAB INDIA installs commercial security and CCTV systems with weather-aware mounting, practical retention, and policies your front desk and facilities team can run day to day.",
    eyebrow: "Shimla · CCTV",
    breadcrumbLabel: "CCTV in Shimla",
    whyTitle: "Why Shimla properties choose RAB INDIA",
    whyIntro:
      "Hillside campuses and hospitality sites need discreet, reliable coverage—not oversized kits that fail in rain or fog seasons.",
    whyChoose: [
      { title: "Weather-aware design", text: "Housing, heaters, and IP ratings are matched to exposed mounts and seasonal moisture." },
      { title: "Hospitality workflows", text: "Lobby, parking, and back-of-house paths respect guest privacy expectations and staff SOPs." },
      { title: "Institution-friendly handover", text: "Role-based viewing and retention are documented for facilities and IT review." },
      { title: "Industrial CCTV where required", text: "Support buildings and utility yards on campus get industrial classes when distance demands." },
      { title: "Clean cabling discipline", text: "Serviceable homeruns matter when maintenance windows are short on hill roads." },
      { title: "Year-round support planning", text: "AMC and access logistics are discussed realistically for hillside sites." }
    ],
    industries: [
      "Hotels and hospitality groups",
      "Government and institutional campuses",
      "Educational institutions",
      "Hospitals and healthcare facilities",
      "Boutique villas and residential societies",
      "Tourism and heritage-adjacent properties"
    ],
    industriesIntro:
      "Public-area coverage follows practical privacy guidance—operational policies are part of design, not an afterthought.",
    faqs: [
      { q: "Do you install CCTV in Shimla year-round?", a: "Yes, with weather-aware scheduling for exposed mounts. We confirm access and safety windows before survey dates." },
      { q: "What commercial security solutions suit Shimla hotels?", a: "Lobby, parking, and service corridors are scoped with guest privacy and night staffing in mind." },
      { q: "Can you provide industrial CCTV for campus utility areas?", a: "Yes. Yards and plant rooms use industrial classes when distance and lighting require it." },
      { q: "Do you work elsewhere in Himachal?", a: "Baddi–Nalagarh is our densest belt; Shimla, Kasauli, and Kala Amb are supported when timelines align." },
      { q: "How is retention planned for hillside sites?", a: "NVR sizing and bitrate follow your review habits and uplink reality—not an urban template." }
    ],
    contextLinks: [
      { label: "CCTV services", to: "/services/cctv-solutions" },
      { label: "Shimla service area", to: "/locations/shimla" },
      { label: "Hotel locks", to: "/hotel-locks-shimla" }
    ],
    exploreLinks: [
      { label: "Himachal overview", to: "/industrial-security-himachal-pradesh" },
      { label: "Contact", to: "/#contact" }
    ],
    ctaTitle: "Book a Shimla CCTV survey",
    ctaBody: "Share your property type, priority areas, and retention needs. We respond with weather-aware survey timing and scope notes.",
    imageAlt: "CCTV installation at a Shimla hospitality or campus property"
  })
];

export const CCTV_LOCAL_ROUTES = CCTV_LOCAL_LANDINGS.map((p) => p.route);

const byRoute = Object.fromEntries(CCTV_LOCAL_LANDINGS.map((p) => [p.route, p]));

export function getCctvLocalLandingByRoute(route) {
  return byRoute[route] ?? null;
}

/** @deprecated Use getCctvLocalLandingByRoute — kept for existing imports */
export const BADDI_CCTV_ROUTE = "cctv-installation-baddi";
