export const BLOG_CATEGORIES = [
  "CCTV",
  "Security Solutions",
  "Industrial Automation",
  "Access Control",
  "Fire Safety",
  "Networking"
];

const posts = [
  {
    slug: "how-to-plan-cctv-storage-for-factories",
    title: "How to Plan CCTV Storage for Factories (Without Surprises in Month Six)",
    category: "CCTV",
    excerpt:
      "A practical framework for bitrate, retention, and RAID sizing — written for plant IT teams who need predictable performance.",
    datePublished: "2026-04-02",
    dateModified: "2026-04-02",
    author: "RAB INDIA Technical Team",
    sections: [
      {
        h2: "Start with the question: what must be provable after an incident?",
        paragraphs: [
          "Retention should be driven by incident types you actually investigate: theft, safety near-misses, quality disputes, or contractor incidents. If those investigations typically cover 7–14 days, your storage design should not barely meet day one — it should survive growth as cameras are added.",
          "Write down the maximum simultaneous review users and whether remote viewing is continuous or occasional. These assumptions change uplink and internal switching headroom."
        ]
      },
      {
        h2: "Bitrate planning beats camera count planning",
        paragraphs: [
          "Two sites with the same number of cameras can need wildly different storage if scenes are noisy, low light, or high motion. A warehouse aisle with constant forklift movement generates more entropy than a static lobby wall.",
          "We recommend validating bitrates with a short on-site sample recording window before locking NVR SKUs."
        ]
      },
      {
        h2: "When to segment surveillance traffic on the plant network",
        paragraphs: [
          "If cameras share the same VLAN as ERP systems, a broadcast storm or misconfigured loop can hurt both operations and security. VLAN separation, DHCP reservations, and documented uplinks reduce correlated failure risk.",
          "Voice of the customer: most industrial IT teams prefer a dedicated surveillance VLAN with controlled routes to the NVR and controlled outbound internet paths."
        ]
      }
    ],
    faqs: [
      {
        q: "Is cloud recording mandatory for modern CCTV?",
        a: "No. Many plants prefer local recording with controlled remote access. Cloud can be useful for distributed estates but must match your data residency and uptime expectations."
      }
    ]
  },
  {
    slug: "biometric-attendance-for-multi-shift-plants",
    title: "Biometric Attendance for Multi-Shift Plants: Throughput, Hygiene, and Audit Trails",
    category: "Access Control",
    excerpt:
      "What breaks attendance deployments — and how to design gates so shift changes do not become daily bottlenecks.",
    datePublished: "2026-04-18",
    dateModified: "2026-04-18",
    author: "RAB INDIA Technical Team",
    sections: [
      {
        h2: "Throughput math is boring — until the queue reaches the road",
        paragraphs: [
          "Estimate peak ingress in a 10-minute window: buses, contractor batches, and late arrivals cluster. If your device authentication takes even a few seconds longer than assumed, queues compound nonlinearly.",
          "Mitigations include additional lanes, staggered shift starts for departments, or face/palm modalities where glove usage blocks fingerprint reads."
        ]
      },
      {
        h2: "Audit trails HR can defend",
        paragraphs: [
          "Exports should be time-synchronized, tamper-evident where possible, and consistent in employee IDs. Mismatched naming between HR master and device enrollments is a common root cause of “missing attendance” disputes.",
          "We recommend enrollment QA checks and a small pilot group before full rollout."
        ]
      }
    ],
    faqs: [
      {
        q: "Should contractors use the same biometric database as employees?",
        a: "Often no. Separate batches or credential classes reduce privilege creep and simplify offboarding when contracts end."
      }
    ]
  },
  {
    slug: "industrial-weighing-mistakes-that-cost-dispatch-time",
    title: "Industrial Weighing Mistakes That Quietly Cost Dispatch Time",
    category: "Industrial Automation",
    excerpt:
      "Foundation, cabling, and indicator placement decisions that determine whether your weighbridge is an asset or a daily argument.",
    datePublished: "2026-05-01",
    dateModified: "2026-05-01",
    author: "RAB INDIA Technical Team",
    sections: [
      {
        h2: "Foundation and approach slabs are not cosmetic",
        paragraphs: [
          "Repeatable weighing needs stable mechanical coupling between load, cell, and foundation. Shortcuts here show up as drifting readings during monsoon or after heavy vehicle braking patterns.",
          "If you are retrofitting, we assess whether the existing civil work can support the accuracy class you expect."
        ]
      },
      {
        h2: "Operator ergonomics reduce “rounding errors”",
        paragraphs: [
          "Indicators placed in glare, with confusing ticket flows, invite manual corrections. A clean ticket format and readable display reduce disputes between security, logistics, and finance."
        ]
      }
    ],
    faqs: [
      {
        q: "Do we need a separate UPS only for weighing?",
        a: "Depends on process criticality. For dispatch gates, a controlled shutdown and surge strategy is usually non-negotiable; exact sizing depends on peripherals like printers and barriers."
      }
    ]
  },
  {
    slug: "fire-alarm-monitoring-vs-cctv-what-each-proves",
    title: "Fire Alarm Monitoring vs CCTV: What Each System Actually Proves",
    category: "Fire Safety",
    excerpt:
      "A plain-language comparison for facility managers who need clarity during budgeting conversations.",
    datePublished: "2026-05-06",
    dateModified: "2026-05-06",
    author: "RAB INDIA Technical Team",
    sections: [
      {
        h2: "Different sensors, different jobs",
        paragraphs: [
          "Fire detection systems are designed for early particle/heat signatures and code-driven annunciation paths. CCTV provides scene context after an event or for operational monitoring — it is not a replacement for certified detection where codes apply.",
          "Integration discussions should start with your fire consultant and SOPs, not with vendor marketing brochures."
        ]
      }
    ],
    faqs: [
      {
        q: "Can CCTV trigger a fire alarm?",
        a: "Generally not as a primary detection method for code compliance. Some advanced analytics may assist investigations, but statutory design must follow applicable norms and consultant sign-off."
      }
    ]
  },
  {
    slug: "structured-cabling-checklist-before-you-add-100-ip-cameras",
    title: "Structured Cabling Checklist Before You Add 100 IP Cameras",
    category: "Networking",
    excerpt:
      "A field checklist to prevent “everything worked in the lab” surprises when PoE budgets hit real cable lengths.",
    datePublished: "2026-05-10",
    dateModified: "2026-05-10",
    author: "RAB INDIA Technical Team",
    sections: [
      {
        h2: "PoE class budgeting is cumulative",
        paragraphs: [
          "Switch power reserves must account for worst-case camera boot surges, not only steady draw. Cable length increases loss and can affect stability at the edge.",
          "We document homerun lengths, switch port maps, and VLAN intent before installation teams cut ceilings."
        ]
      },
      {
        h2: "Labeling is a security control",
        paragraphs: [
          "Unlabeled IDFs turn every incident response into archaeology. Consistent rack labeling, patch panel maps, and camera naming conventions reduce mean time to repair dramatically."
        ]
      }
    ],
    faqs: [
      {
        q: "Should cameras use fiber backhaul?",
        a: "For very long perimeter runs or high electromagnetic noise environments, fiber backhaul can be more stable than copper. It adds cost but reduces weird edge failures."
      }
    ]
  },
  {
    slug: "gate-security-design-for-trust-but-verify",
    title: "Gate Security Design: Trust, But Verify (Without Creating 20-Minute Queues)",
    category: "Security Solutions",
    excerpt:
      "A conversational guide to balancing visitor experience with screening and vehicle controls at industrial gates.",
    datePublished: "2026-05-12",
    dateModified: "2026-05-12",
    author: "RAB INDIA Technical Team",
    sections: [
      {
        h2: "Voice search friendly summary",
        paragraphs: [
          "If someone asks, “How do I secure a factory gate without slowing trucks?” the answer is: design lanes, decide what is mandatory versus random checks, choose barriers and sensors for your wind and slope realities, and train guards on consistent exceptions logging.",
          "Technology helps, but inconsistent human exceptions undermine every system."
        ]
      },
      {
        h2: "Internal linking for readers",
        paragraphs: [
          "If you are evaluating vehicle control hardware, review our boom barrier service page. For workforce visibility at the same gate, pair with biometric attendance planning and CCTV coverage for approach roads."
        ]
      }
    ],
    faqs: [
      {
        q: "What is the simplest upgrade for a chaotic gate?",
        a: "Often boom barrier + loop sensors + clear signage + single documented override process. Complexity can increase later once baseline discipline exists."
      }
    ]
  }
];

export const BLOG_POSTS = posts;

export const BLOG_SLUGS = posts.map((p) => p.slug);

export function getBlogPost(slug) {
  return posts.find((p) => p.slug === slug) ?? null;
}

export function postsByCategory(category) {
  return posts.filter((p) => p.category === category);
}
