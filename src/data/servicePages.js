function svc(
  slug,
  metaTitle,
  metaDescription,
  h1,
  heroLead,
  benefits,
  useCases,
  industries,
  faqs,
  productDetailId
) {
  return {
    slug,
    metaTitle,
    metaDescription,
    h1,
    heroLead,
    benefits,
    useCases,
    industries,
    faqs,
    productDetailId
  };
}

export const SERVICES = [
  svc(
    "cctv-solutions",
    "Industrial CCTV & Video Surveillance Solutions | RAB INDIA",
    "Design, installation, and commissioning of industrial CCTV, NVR/DVR, analytics, and perimeter monitoring across North India. Site surveys, structured cabling, and AMC. +91 7814421210.",
    "Industrial CCTV & Video Surveillance That Holds Up on the Plant Floor",
    "Factories need more than consumer cameras behind glass. RAB INDIA specifies industrial-grade CCTV with storage sizing, time sync, access-controlled viewing, and maintenance paths suited to dust, vibration, and multi-shift operations.",
    [
      "Camera models matched to lighting, distance, and mounting constraints — not one-size-fits-all SKUs.",
      "Recording retention aligned to incident review needs and available network/storage budgets.",
      "Remote viewing and user permissions designed around your IT security policies.",
      "Structured documentation for expansions, insurance, and internal audits."
    ],
    [
      "Perimeter and gate monitoring for logistics-heavy plants",
      "Production line visibility for safety and process verification",
      "Warehouse aisles, docks, and high-bay storage monitoring",
      "Office and control-room coverage with role-based access to footage"
    ],
    [
      "Manufacturing plants",
      "Warehousing & logistics",
      "Pharma & process industries",
      "Commercial campuses",
      "Power & utility sites"
    ],
    [
      {
        q: "What is the first step for a new CCTV project?",
        a: "A technical survey to map sightlines, cable routes, power availability, network uplinks, and retention requirements. That drives a bill of materials you can defend in procurement."
      },
      {
        q: "Can CCTV work if our plant network is unstable?",
        a: "We design for resilience: local recording, bounded bitrate, and, where needed, segmented VLANs or offline edge recording until uplinks recover."
      }
    ],
    "cctv"
  ),
  svc(
    "biometric-attendance-machine",
    "Biometric Attendance Machines & Workforce Visibility | RAB INDIA",
    "Biometric attendance terminals, door access, and shift-ready workforce tracking for factories and campuses. Integration-friendly exports and AMC. Call +91 7814421210.",
    "Biometric Attendance Machines Built for Shift Operations and Audit Trails",
    "Attendance fraud and buddy punching are expensive at scale. We deploy biometric terminals and access readers that survive industrial environments while producing exports your HR team can actually use.",
    [
      "Device selection for dust, temperature, and mounting constraints at gates and shop floors.",
      "Clear export formats and integration guidance for payroll and HR workflows.",
      "Access policies for contractors, trainees, and permanent staff without bottlenecks.",
      "AMC planning for firmware hygiene, sensor wear, and spare terminals for critical gates."
    ],
    [
      "Multi-shift manufacturing with high throughput turnstiles",
      "Contractor-heavy sites needing batch onboarding",
      "Corporate offices requiring floor-wise access segmentation",
      "Remote sites needing centralized attendance visibility"
    ],
    [
      "Manufacturing plants",
      "Warehousing & logistics",
      "Pharma & process industries",
      "Commercial campuses"
    ],
    [
      {
        q: "Which biometric modality is best for factories?",
        a: "It depends on glove usage, hygiene rules, and environment. We shortlist fingerprint, face, or palm options after a short workflow observation — not a catalog guess."
      }
    ],
    "access"
  ),
  svc(
    "weighing-scale",
    "Industrial Weighing Scales & Calibration Support | RAB INDIA",
    "Platform scales, pallet weighing, analytical balances, label printers, and load cells for Indian industry. Installation, integration guidance, and service. +91 7814421210.",
    "Industrial Weighing Systems That Match Real Production Workflows",
    "Weighing errors become revenue leakage fast. RAB INDIA specifies industrial scales and peripherals for dispatch verification, inward checks, batching support, and traceable records.",
    [
      "Scale classes and capacities aligned to your loads, forklifts, and foundation reality.",
      "Label printing and ticketing workflows for logistics desks.",
      "Load cell and indicator pairing for reliability and serviceability.",
      "Commissioning checks and calibration coordination where compliance demands it."
    ],
    [
      "Dispatch bays verifying truck loads",
      "Piece counting and batch consistency on assembly lines",
      "Pharma and food environments needing repeatable measurements",
      "Inventory cycle counting with portable bench units"
    ],
    [
      "Manufacturing plants",
      "Warehousing & logistics",
      "Pharma & process industries",
      "Commercial campuses"
    ],
    [
      {
        q: "Do you only sell scales or also install?",
        a: "We deliver structured installation, commissioning, operator training, and documentation so the system is usable day one — not just delivered on a pallet."
      }
    ],
    "weighing"
  ),
  svc(
    "intercom-systems",
    "Intercom Systems & Enterprise PBX / IP‑PBX | RAB INDIA",
    "Intercom extensions, PBX, IP‑PBX, and voice infrastructure for plants, institutions, and offices. RAB INDIA integrates voice with gate and security workflows. +91 7814421210.",
    "Intercom and Enterprise Voice Systems That Security Desks Actually Rely On",
    "When a gate calls the security desk, voice clarity and predictable routing matter. We design intercom and PBX/IP‑PBX systems for industrial and enterprise environments with disciplined cabling and failover assumptions.",
    [
      "Extension planning for gates, workshops, lifts, and help points.",
      "PBX/IP‑PBX capacity and trunk planning aligned to call peaks.",
      "Integration thinking with CCTV and access workflows where coordination matters.",
      "Documentation for MAC moves, expansions, and vendor handover."
    ],
    [
      "Factory gates coordinating trucks and visitors",
      "Multi-building campuses with centralized operator desks",
      "Institutions needing help points and announcements",
      "Offices migrating from legacy key systems to IP voice"
    ],
    [
      "Manufacturing plants",
      "Commercial campuses",
      "Data & control rooms",
      "Power & utility sites"
    ],
    [
      {
        q: "Can intercom integrate with our existing phone system?",
        a: "Often yes, depending on platform and licensing. We assess SIP compatibility, VLAN separation, and power design before promising outcomes."
      }
    ],
    "telecom"
  ),
  svc(
    "boom-barrier",
    "Boom Barriers & Vehicle Access Automation | RAB INDIA",
    "Industrial boom barriers with loop sensors, safety accessories, and integration options for logistics gates. RAB INDIA — structured commissioning. Phone +91 7814421210.",
    "Boom Barriers for Safer, Faster Vehicle Flow at Industrial Gates",
    "Uncontrolled gates create theft risk, insurance exposure, and traffic chaos. RAB INDIA installs boom barriers with safety-first commissioning and integration paths for access policies.",
    [
      "Wind-rated barrier selection and foundation guidance for your gate geometry.",
      "Loop sensors, safety beams, and signage recommendations aligned to traffic patterns.",
      "Integration with RFID, long-range readers, or manual override workflows as required.",
      "Training for guards on safe operation during power anomalies."
    ],
    [
      "24/7 logistics gates with mixed vendor and employee vehicles",
      "Chemical and pharma sites with strict vehicle segregation",
      "Warehouse hubs with high truck cycles per hour",
      "Campus exits requiring anti-tailgating discipline"
    ],
    [
      "Manufacturing plants",
      "Warehousing & logistics",
      "Pharma & process industries",
      "Commercial campuses"
    ],
    [
      {
        q: "What happens during power failure?",
        a: "We define UPS expectations and safe default behaviors with your security team — including manual release procedures and logging where required."
      }
    ],
    "access"
  ),
  svc(
    "hotel-locks",
    "Hotel Locks & Electronic Guest‑Room Access | RAB INDIA",
    "Electronic hotel locks, master keying logic, and hospitality access for properties across North India. RAB INDIA — guest‑ready commissioning. +91 7814421210.",
    "Hotel Locks That Improve Guest Experience and Night Audit Discipline",
    "Guest frustration at the door becomes bad reviews fast. We deploy electronic hotel lock programs with battery strategy, staff workflows, and audit-friendly event trails.",
    [
      "Lock models aligned to door type, mortise standards, and fire egress rules.",
      "Front-desk workflows for check-in, overrides, and lost-card scenarios.",
      "Battery and spare planning so peak season does not become a maintenance crisis.",
      "Integration guidance with PMS ecosystems where supported."
    ],
    [
      "Business hotels with high repeat guests",
      "Resorts with villa clusters and remote reception desks",
      "Serviced apartments with hybrid access policies",
      "Hostels and institutional guest housing with batch changes"
    ],
    [
      "Commercial campuses",
      "Pharma & process industries",
      "Manufacturing plants"
    ],
    [
      {
        q: "Can staff still override in emergencies?",
        a: "Yes. Emergency procedures are documented and trained — including mechanical override paths where the lock model supports them."
      }
    ],
    "access"
  ),
  svc(
    "metal-detectors",
    "Metal Detectors, DFMD & Baggage Screening | RAB INDIA",
    "Walk-through and handheld metal detection, DFMD, and baggage screening for industrial and institutional checkpoints. RAB INDIA — layout + commissioning. +91 7814421210.",
    "Metal Detection and Screening Layouts That Reduce Queues Without Creating Blind Spots",
    "Screening is both security and operations. RAB INDIA designs checkpoint flows, device selection, and training so throughput and sensitivity targets are achievable together.",
    [
      "Device classes matched to threat model and visitor peaks.",
      "Queue geometry and signage to reduce crowding and tailgating confusion.",
      "Baggage scanner placement for ergonomics and maintenance access.",
      "Operator training for consistent calibration and incident handling."
    ],
    [
      "Plant entry checkpoints for staff and contractors",
      "Institutional visitor screening programs",
      "Retail and distribution loss-prevention support where applicable",
      "Event-style temporary screening layouts"
    ],
    [
      "Manufacturing plants",
      "Commercial campuses",
      "Warehousing & logistics",
      "Pharma & process industries"
    ],
    [
      {
        q: "Do walk-through detectors work near moving metal?",
        a: "Environmental metal influences sensitivity. We survey nearby gates, forklifts, and reinforcement before finalizing installation positions and calibration routines."
      }
    ],
    "access"
  ),
  svc(
    "door-interlocking",
    "Door Interlocking Systems & Airlock Control | RAB INDIA",
    "Fail-safe door interlocks for clean rooms, airlocks, and regulated industrial zones. RAB INDIA — logic design + commissioning. Call +91 7814421210.",
    "Door Interlocking That Matches Safety Logic, Not Just Wiring Diagrams",
    "Interlocks protect people and processes. RAB INDIA implements door interlocking with clear logic states, labeled interfaces, and commissioning evidence your safety team can review.",
    [
      "Logic definition for airlocks, mantraps, and pressure-sensitive sequences.",
      "Fail-safe behavior aligned to your risk assessment and SOP expectations.",
      "Integration awareness with access control and BMS where required.",
      "Operator training and as-built documentation for future modifications."
    ],
    [
      "Pharma clean rooms and controlled corridors",
      "Cold rooms and temperature-sensitive transitions",
      "High-security zones with mantrap sequencing",
      "Process plants with interlocked maintenance access"
    ],
    [
      "Pharma & process industries",
      "Manufacturing plants",
      "Power & utility sites",
      "Commercial campuses"
    ],
    [
      {
        q: "Can you retrofit interlocks on existing doors?",
        a: "Often yes, after assessing door hardware, strike compatibility, and structural constraints. We prototype logic before full rollout when risk is high."
      }
    ],
    "door"
  )
];

export const SERVICE_SLUGS = SERVICES.map((s) => s.slug);

export function getService(slug) {
  return SERVICES.find((s) => s.slug === slug) ?? null;
}
