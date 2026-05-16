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
    slug: "best-cctv-camera-for-factories-in-baddi",
    title: "Best CCTV Camera for Factories in Baddi: A Practical Selection Guide",
    category: "CCTV",
    excerpt:
      "How to choose factory CCTV in Baddi industrial estates — camera types, resolution, low-light performance, recording, and placement — without overspending or missing evidence when you need it.",
    datePublished: "2026-05-16",
    dateModified: "2026-05-16",
    author: "RAB INDIA Technical Team",
    quickAnswer:
      "For most Baddi factories, a mix of fixed bullet cameras at gates and perimeters and varifocal domes on production and store aisles works best. Prioritise stable night imaging, dust-rated housings, PoE reliability, and retention you can defend after an incident — not maximum megapixel count on every channel.",
    keyTakeaways: [
      "Match camera type to the scene: bullets for long approaches, domes for indoor aisles, PTZ only where an operator will actually use presets.",
      "2–4 MP is enough for most identification tasks if lens angle and mounting height are correct.",
      "Plan storage from incident types you investigate, not from brochure retention claims.",
      "Separate surveillance VLANs and document PoE budgets before ceiling work starts.",
      "Handover should include a camera map, credentials packet, and sample export test — not only a live view on a phone."
    ],
    sections: [
      {
        h2: "What plant managers in Baddi usually mean by “best”",
        paragraphs: [
          "When teams ask for the best CCTV camera for a factory, they rarely want a single SKU. They want proof after theft, contractor disputes, safety near-misses, or gate irregularities — without daily downtime or mystery footage gaps.",
          "Baddi’s industrial belt adds predictable constraints: dust in dry seasons, temperature swings, long perimeter lines, and networks that grew in phases. A camera that looks fine in a showroom can struggle on a north-facing loading bay at 5 a.m."
        ]
      },
      {
        h2: "How the site environment should drive your shortlist",
        paragraphs: [
          "Start with a one-page scene list: main gate, weighbridge approach, finished-goods store, production hall entries, utility yard, and any cash or high-value storage. Note lighting (natural, LED, sodium), vibration, and whether wash-down or chemical mist is present.",
          "That list tells you housing rating, lens choice, and whether you need supplemental lighting instead of chasing extreme low-light sensors everywhere."
        ],
        bullets: [
          "Outdoor gates and roads: IP66+ bullet or turret, varifocal lens, WDR for headlights and glare.",
          "Production halls: dome or turret, 2.8–6 mm varifocal, aim for face-level evidence at choke points — not blanket ceiling coverage.",
          "Stores and dispatch: higher mounting with tighter lens to read labels and hand-offs at counters.",
          "Perimeter: fewer, better-placed cameras beat a high count of narrow views that miss incident context."
        ]
      },
      {
        h2: "Camera types that hold up on real shop floors",
        subsections: [
          {
            h3: "Bullet and turret cameras",
            paragraphs: [
              "Use these on approach roads, gate lanes, and external walls. Varifocal lenses let you adjust after vehicles and barriers are in place — a common post-install fix in Baddi when traffic patterns change.",
              "Avoid aiming directly into rising sun without WDR; morning glare is a frequent cause of “camera failed” tickets that are really exposure limits."
            ]
          },
          {
            h3: "Dome cameras",
            paragraphs: [
              "Domes suit indoor aisles and packing areas where you need a cleaner look and vandal resistance. For high bays, confirm the dome’s minimum focus distance — otherwise near pallets look sharp and far aisles do not.",
              "If forklifts carry tall loads, check clearance so domes are not knocked out of aim monthly."
            ]
          },
          {
            h3: "PTZ and specialty cameras",
            paragraphs: [
              "PTZ is justified when someone actively tours presets during shifts — large yards, shared tank farms, or multi-gate estates. Passive PTZ channels that never move rarely beat two well-aimed fixed cameras on cost and reliability.",
              "Thermal or analytics cameras can help on dark perimeters, but treat them as supplements to identification cameras at gates and dispatch, not replacements."
            ]
          }
        ]
      },
      {
        h2: "Resolution and lens: spend where identification matters",
        paragraphs: [
          "4K on every channel is seldom the best factory CCTV strategy. Two to four megapixel sensors with the right lens and mount height usually deliver clearer evidence at gates and weighbridges than an oversized sensor aimed too wide.",
          "A practical rule: if you cannot describe what a channel must prove in one sentence, fix the scene design before buying more megapixels."
        ]
      },
      {
        h2: "Low light, dust, and power reality in Himachal plants",
        paragraphs: [
          "Many incidents are reviewed from night footage. Validate night performance on-site with the actual lights you use — not demo mode in a supplier office. Where lighting cannot be improved, plan IR placement carefully to avoid hotspot washout on reflective paint and metal.",
          "Dust accumulates on domes faster than teams expect. Maintenance access and reachable mounts matter as much as IP rating. For power, coordinate UPS scope for recorders and core switches with IT; cameras may reboot on extended outages if PoE switches are not on protected power."
        ]
      },
      {
        h2: "Recording, retention, and review workflows",
        paragraphs: [
          "Pick retention from investigation habits: if HR and security typically review the last seven to fourteen days, design storage with growth headroom for added cameras. Bitrate varies with motion — busy forklift aisles cost more than a static wall.",
          "For a deeper sizing framework, see our article on CCTV storage planning for factories. Local recording with controlled remote access remains common in Baddi; cloud can help multi-site estates but must match data and uptime policies."
        ]
      },
      {
        h2: "Network and installation discipline",
        paragraphs: [
          "PoE budgets, cable lengths, and VLAN separation should be documented before installers cut ceilings. Surveillance on the same flat network as ERP is a recurring source of correlated outages.",
          "If you are scaling past a few dozen cameras, read the structured cabling checklist for IP camera rollouts — it covers labeling and switch headroom that save hours during the first real incident."
        ]
      },
      {
        h2: "Placement priorities for Baddi factories",
        bullets: [
          "Gate lanes: capture face and vehicle plate context in one frame where possible.",
          "Weighbridge and dispatch: document hand-offs and ticket disputes.",
          "Store inward/outward: one choke-point camera beats four wide shots.",
          "Production entries: shift overlap and contractor movement.",
          "Utility and scrap yards: theft risk without over-investing in low-value background."
        ],
        paragraphs: [
          "Commissioning should end with a walk-through at each camera with the security lead and a sample export to HR or legal format. If exports fail during handover, they will fail during an audit."
        ]
      }
    ],
    faqs: [
      {
        q: "What is the best CCTV camera for a factory in Baddi?",
        a: "There is no single best model for every wall. Most Baddi plants do well with IP66 bullet or turret cameras outdoors, varifocal domes indoors, and recording sized for 7–14 day investigations. Choose based on scene, lighting, and what you must prove — not a generic “best” list from a brochure."
      },
      {
        q: "How many CCTV cameras does a small factory need?",
        a: "A compact unit often needs six to twelve well-placed cameras covering gate, dispatch, store choke points, and one production entry — not thirty wide-angle views. Add channels when you can name the incident type each new camera must support."
      },
      {
        q: "Do factories need 4K CCTV cameras?",
        a: "Usually not on every channel. Use higher resolution at identification points (gates, counters) and moderate resolution in coverage areas. Lens, mount height, and lighting matter more than megapixel count for most disputes."
      },
      {
        q: "Can CCTV work during power cuts in industrial areas?",
        a: "Yes, if recorders, core switches, and internet paths have agreed UPS coverage and cameras reboot cleanly after outages. Define this in the BOQ — otherwise “works on generator” assumptions create gaps on long shifts."
      },
      {
        q: "Who installs CCTV in Baddi industrial areas?",
        a: "Look for integrators who document VLAN design, provide as-built camera maps, train your team on exports, and commission night footage on your actual lighting. RAB INDIA supports survey, supply, installation, and AMC across Baddi and nearby industrial belts."
      },
      {
        q: "How long should factory CCTV footage be stored?",
        a: "Match retention to how far back your security and HR teams typically investigate — often 15 to 30 days for general operations, longer where compliance or high-value inventory requires it. Size storage after a short on-site bitrate sample, not catalog defaults alone."
      }
    ],
    relatedLinks: [
      { to: "/cctv-installation-baddi", label: "CCTV installation in Baddi" },
      { to: "/services/cctv-solutions", label: "CCTV solutions overview" },
      { to: "/blog/how-to-plan-cctv-storage-for-factories", label: "CCTV storage planning" },
      { to: "/blog/structured-cabling-checklist-before-you-add-100-ip-cameras", label: "IP camera cabling checklist" }
    ],
    cta: {
      title: "Planning CCTV for a Baddi factory?",
      body: "Share your plant layout, shift pattern, and what you need to prove (theft, safety, contractor access, or dispatch disputes). We will suggest camera types, retention, and a phased install sequence — without pushing unnecessary channels."
    }
  },
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
