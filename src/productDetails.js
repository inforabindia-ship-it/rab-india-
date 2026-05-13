/**
 * Short copy + visuals for full-page product routes.
 */

import cctvProduct from "./assets/cctv-product.png";
import cctvImage from "./assets/cctv.png";
import networkingImage from "./assets/networking.png";
import networkFirewall from "./assets/network-firewall.png";
import networkItRacks from "./assets/network-it-racks.png";
import networkManagedSwitching from "./assets/network-managed-switching.png";
import networkStructuredCabling from "./assets/network-structured-cabling.png";
import networkWireless from "./assets/network-wireless.png";
import telecomProduct from "./assets/telecom-product.png";
import accessProduct from "./assets/access-product.png";
import accessTimeAttendance from "./assets/access-time-attendance.png";
import accessSpecAccessControl from "./assets/access-spec-access-control.png";
import accessSpecBoomBarrier from "./assets/access-spec-boom-barrier.png";
import accessSpecTripodTurnstile from "./assets/access-spec-tripod-turnstile.png";
import accessSpecDfmd from "./assets/access-spec-dfmd.png";
import accessSpecBaggageScanner from "./assets/access-spec-baggage-scanner.png";
import accessSpecGuardPatrol from "./assets/access-spec-guard-patrol.png";
import accessSpecHotelLocks from "./assets/access-spec-hotel-locks.png";
import accessSpecApplication from "./assets/access-spec-application.png";
import conferenceProduct from "./assets/conference-product.png";
import conferenceSpecCameras from "./assets/conference-spec-cameras.png";
import conferenceSpecInteractivePanels from "./assets/conference-spec-interactive-panels.png";
import conferenceSpecDigitalPodium from "./assets/conference-spec-digital-podium.png";
import conferenceSpecAudio from "./assets/conference-spec-audio.png";
import weighingProduct from "./assets/weighing-product.png";
import weighingSpecAnalytical from "./assets/weighing-spec-analytical.png";
import weighingSpecPlatformTabletop from "./assets/weighing-spec-platform-tabletop.png";
import weighingSpecLabelPrinting from "./assets/weighing-spec-label-printing.png";
import weighingSpecPallet from "./assets/weighing-spec-pallet.png";
import weighingSpecPieceCounting from "./assets/weighing-spec-piece-counting.png";
import weighingSpecLoadCell from "./assets/weighing-spec-load-cell.png";
import doorProduct from "./assets/door-product.png";
import fireSafetyBanner from "./assets/fire-safety-banner.png";
import fireSpecAlarmPanel from "./assets/fire-spec-alarm-panel.png";
import fireSpecDetectors from "./assets/fire-spec-detectors.png";
import fireSpecMcp from "./assets/fire-spec-mcp.png";
import fireSpecHooters from "./assets/fire-spec-hooters.png";
import specAnpr from "./assets/spec-anpr.png";
import specDvr from "./assets/spec-dvr.png";
import specPeopleCounting from "./assets/spec-people-counting.png";
import specNvr from "./assets/spec-nvr.png";
import telecomDigitalPbx from "./assets/telecom-digital-pbx.png";
import telecomIpPbxSmall from "./assets/telecom-ip-pbx-small.png";
import telecomIpPbxLarge from "./assets/telecom-ip-pbx-large.png";
import telecomIpPhones from "./assets/telecom-ip-phones.png";

export const productDetails = {
  cctv: {
    title: "CCTV Surveillance",
    intro:
      "Complete CCTV solutions for offices, factories, warehouses, and gate areas with recording and smart analytics support.",
    image: cctvProduct,
    imageAlt: "CCTV surveillance overview",
    specs: ["IP / HD cameras", "NVR and DVR recording", "ANPR and people counting"],
    featureItems: [
      {
        label: "Camera Types",
        image: cctvImage,
        alt: "Different types of CCTV cameras",
        text:
          "We provide dome, bullet, PTZ, and network cameras for indoor and outdoor monitoring."
      },
      {
        label: "NVR",
        image: specNvr,
        alt: "Network video recorder with analytics",
        text:
          "NVR is used for IP camera recording, playback, live view, storage, and remote access."
      },
      {
        label: "DVR",
        image: specDvr,
        alt: "Digital video recorder system",
        text:
          "DVR is suitable for analog or hybrid CCTV setups and gives reliable recording with easy playback."
      },
      {
        label: "ANPR Cameras",
        image: specAnpr,
        alt: "Automatic number plate recognition at a gate",
        text:
          "ANPR cameras capture number plates at entry and exit points for vehicle tracking and gate logs."
      },
      {
        label: "People Counting",
        image: specPeopleCounting,
        alt: "People counting analytics at an entrance",
        imagePosition: "center 72%",
        text:
          "People counting tracks entry and exit movement, occupancy, and footfall trends for better planning."
      }
    ],
    sections: []
  },
  networking: {
    title: "Industrial Networking",
    intro:
      "Reliable network infrastructure for offices, server rooms, plant areas, and connected operations with clean design, security, and future-ready expansion.",
    image: networkingImage,
    imageAlt: "Industrial networking infrastructure",
    specs: [
      "Structured cabling for organized connectivity",
      "Managed switching for controlled traffic flow",
      "Firewall and wireless solutions for secure access",
      "IT racks and enclosures for neat infrastructure layout"
    ],
    featureItems: [
      {
        label: "Structured Cabling",
        image: networkStructuredCabling,
        alt: "Structured cabling and patch panel installation",
        text:
          "Structured cabling creates a clean and scalable backbone for data, voice, and device connectivity across offices and industrial sites."
      },
      {
        label: "Firewall",
        image: networkFirewall,
        alt: "Network firewall protection",
        text:
          "Firewall solutions help protect business networks with traffic control, policy enforcement, and safer access between internal and external systems."
      },
      {
        label: "Managed Switching",
        image: networkManagedSwitching,
        alt: "Managed network switch infrastructure",
        text:
          "Managed switches improve visibility, network control, and performance by supporting organized traffic handling for multiple users and devices."
      },
      {
        label: "IT Rack & Enclosures",
        image: networkItRacks,
        alt: "IT racks and server enclosures",
        text:
          "IT racks and enclosures keep patch panels, switches, and servers arranged properly for airflow, cable management, and easier maintenance."
      },
      {
        label: "Wireless Solution",
        image: networkWireless,
        alt: "Industrial wireless networking solution",
        text:
          "Wireless solutions extend secure connectivity to plant floors, campuses, and remote work areas where mobility and wide coverage are important."
      }
    ],
    sections: []
  },
  telecom: {
    title: "Telecom Solutions",
    intro:
      "Business communication systems for small offices to large enterprises, built to improve calling, internal coordination, and daily productivity.",
    image: telecomProduct,
    imageAlt: "Telecom solutions",
    specs: [
      "Digital PBX for small offices",
      "IP-PBX for small enterprises",
      "IP PBX for medium and large enterprises",
      "Digital and IP phones"
    ],
    featureItems: [
      {
        label: "Digital PBX for Small Offices",
        image: telecomDigitalPbx,
        alt: "Compact digital PBX for small offices",
        text:
          "A compact PBX for smaller setups such as offices, clinics, restaurants, and front desks, with practical call handling and day-to-day communication features."
      },
      {
        label: "IP-PBX for Small Enterprises",
        image: telecomIpPbxSmall,
        alt: "IP-PBX for small enterprises",
        text:
          "Built for growing businesses that need a smarter phone system, with flexible extensions, better control, and room to scale as operations expand."
      },
      {
        label: "IP PBX for Medium & Large Enterprises",
        image: telecomIpPbxLarge,
        alt: "IP PBX platform for medium and large enterprises",
        text:
          "A higher-capacity communication platform for unified calling across departments, branches, and enterprise users with centralized administration."
      },
      {
        label: "Digital & IP Phones",
        image: telecomIpPhones,
        alt: "Business digital and IP phones",
        text:
          "Desk phones for business communication with clear audio, user-friendly keys, and compatibility with modern PBX systems."
      }
    ],
    sections: []
  },
  access: {
    title: "Time Attendance & Access Control",
    intro:
      "Workforce attendance, door access, vehicle entry, baggage and personnel screening, patrol verification, and hotel locks — planned as one integrated stack for offices, plants, hotels, and campuses.",
    image: accessProduct,
    imageAlt: "Biometric and access control solutions",
    specs: [
      "Time & Attendance",
      "Access control",
      "Boom barrier",
      "Tripod turnstile",
      "DFMD & hand-held metal detector",
      "Baggage scanner",
      "Guard patrol system",
      "Hotel locks",
      "Application (for time attendance)"
    ],
    featureItems: [
      {
        label: "Time & Attendance",
        image: accessTimeAttendance,
        alt: "Centralised time and attendance system",
        text:
          "Capture clock-in and clock-out reliably across shifts and sites, with reporting for HR and operations. Suited to factories, branches, and multi-location rollouts."
      },
      {
        label: "Access control",
        image: accessSpecAccessControl,
        alt: "Card reader access control",
        text:
          "Control who enters sensitive zones using cards, PIN, or biometrics at the door. Event logs support audits and can complement CCTV where required."
      },
      {
        label: "Boom barrier",
        image: accessSpecBoomBarrier,
        alt: "Vehicle boom barrier at gate",
        text:
          "Automate vehicle entry and exit for parking areas, logistics gates, and plant perimeters with barriers that integrate with access rules and supervision."
      },
      {
        label: "Tripod turnstile",
        image: accessSpecTripodTurnstile,
        alt: "Tripod turnstile with face terminal",
        text:
          "Tripod turnstiles manage pedestrian flow at reception, canteen, and high-traffic passages, often paired with face or card verification for one-person-at-a-time entry."
      },
      {
        label: "DFMD & hand-held metal detector",
        image: accessSpecDfmd,
        alt: "Walk-through and hand-held metal detectors",
        text:
          "Door-frame metal detectors and handheld wands help screen visitors and staff where policy requires, with layout guidance for queueing and throughput."
      },
      {
        label: "Baggage scanner",
        image: accessSpecBaggageScanner,
        alt: "X-ray baggage scanner for security screening",
        text:
          "X-ray baggage scanners help inspect bags and parcels at lobbies, logistics gates, and critical entrances — with operator workstations for clear imaging and faster clearance when throughput matters."
      },
      {
        label: "Guard patrol system",
        image: accessSpecGuardPatrol,
        alt: "Guard patrol checkpoint system",
        text:
          "Patrol devices and checkpoints prove rounds were completed on time. Ideal for campuses, warehouses, and night security where route compliance matters."
      },
      {
        label: "Hotel locks",
        image: accessSpecHotelLocks,
        alt: "Electronic hotel door locks",
        text:
          "Guest-room locks with card or key override options improve convenience while keeping room access manageable for front desk and housekeeping workflows."
      },
      {
        label: "Application (for time attendance)",
        image: accessSpecApplication,
        alt: "Time attendance software application",
        text:
          "A central application ties devices together for shifts, leave, exports, and alerts — so administrators can manage attendance data without juggling disconnected tools."
      }
    ],
    sections: []
  },
  conference: {
    title: "Conference Room Solution",
    intro:
      "Conference-room deployments span huddle spaces through large boardrooms: dependable video toward remote participants, touch-ready displays for workshops, lectern-grade presentation tools, and speech-intelligible audio that survives HVAC noise and long tables. RAB India aligns camera sightlines, display size, acoustics, and network headroom with how your teams meet, then delivers structured cabling, mounting, DSP tuning, commissioning, and handover so day-two operation stays straightforward.",
    image: conferenceProduct,
    imageAlt: "Conference Room audiovisual collaboration",
    specs: ["Conference Cameras", "Interactive panels", "Digital Podiums", "Audio Solutions"],
    featureItems: [
      {
        label: "Conference Cameras",
        image: conferenceSpecCameras,
        alt: "All-in-one conference camera and speaker bar",
        text:
          "Conference cameras keep hybrid meetings visible: HD or 4K sensors with automatic speaker tracking suit compact rooms, while PTZ heads cover long tables. All-in-one bars mount below the display to tidy cabling. RAB India sets field of view, mounting height, and streaming headroom for your layout and daily call pattern."
      },
      {
        label: "Interactive panels",
        image: conferenceSpecInteractivePanels,
        alt: "Interactive flat-panel display in collaborative session",
        text:
          "Interactive flat panels add touch annotation and digital whiteboarding for training or design reviews—size and anti-glare choices matter under bright lights. Fixed walls or mobile trolleys change how power and data reach the screen. RAB India coordinates structure, switching paths, and sightlines before install so presenters can work the full canvas comfortably."
      },
      {
        label: "Digital Podiums",
        image: conferenceSpecDigitalPodium,
        alt: "Digital podium for presentations and lectures",
        text:
          "Digital podiums combine gooseneck microphones, confidence monitors, and content control for lectures, town halls, and executive briefings. Mobile lecterns rotate between halls; fixed units anchor flagship auditoriums. RAB India plans stage power, audio tie-lines, and tidy cable dressing so each event run stays predictable."
      },
      {
        label: "Audio Solutions",
        image: conferenceSpecAudio,
        alt: "Conference Room with table speakerphones and display",
        text:
          "Room audio must capture quiet speakers yet reject fan and keyboard noise. Beamforming arrays or ceiling microphones focus on active talkers while DSP steadies levels and echo cancellation. Loudspeakers are placed so long tables hear speech evenly on calls. RAB India commissions levels, muting, and backup paths so hosts run sessions confidently."
      }
    ],
    sections: [
      {
        heading: "Delivery",
        items: [
          "Room survey: furniture, daylight, glass walls, and noise sources",
          "Cable containment, rack power, and network QoS guidance for real-time media",
          "Commissioning, acceptance tests, and user training for operators and hosts"
        ]
      }
    ]
  },
  weighing: {
    title: "Industrial Weighing Solutions",
    intro:
      "Industrial weighing spans high-sensitivity laboratory balances through floor platforms, label printers on the counter, pallet verification, piece-counting lines, and the load cells that quietly turn force into trustworthy electrical signals behind the display. RAB India helps you match readability, capacity, ingress protection, and connectivity to each workflow—then plans installation, calibration discipline, and handover so operators trust every reading from shift start to audit time.",
    image: weighingProduct,
    imageAlt: "Industrial and analytical weighing equipment",
    specs: [
      "Analytical Weighing Balances",
      "Platform & tabletop Commercial Weighing Scales",
      "Label Printing Scale",
      "Pallet Scale",
      "Piece Counting Scales",
      "Load Cell"
    ],
    featureItems: [
      {
        label: "Analytical Weighing Balances",
        image: weighingSpecAnalytical,
        alt: "Laboratory analytical balance with sample on weighing pan",
        text:
          "Analytical balances give repeatable readings for tiny samples: draft shields limit air currents, calibration fights drift, and fine readability supports QC and formulation. Keep units clear of vibration and drafts. RAB India matches capacity to your SOPs, trains tare modes, and schedules service for traceable audit data."
      },
      {
        label: "Platform & tabletop Commercial Weighing Scales",
        image: weighingSpecPlatformTabletop,
        alt: "Platform, tabletop, and floor commercial weighing scales",
        text:
          "Commercial tabletop and platform scales cover parcel counters, ingredient prep, and shop-floor checks with tare, hold, and accumulation. Stainless decks and sealed keyboards survive spills; pole or remote displays stay readable in busy aisles. Low profiles plus ramps welcome skidded loads. RAB India pairs capacity, power options, and cabling with your traffic, cleaning, and accuracy targets."
      },
      {
        label: "Label Printing Scale",
        image: weighingSpecLabelPrinting,
        alt: "Commercial scales with integrated label printers",
        text:
          "Label-printing scales combine weighing with ticket or barcode output for retail, deli, dispatch, and packing stations. PLU libraries and hot keys reduce mis-keying when queues spike; durable cutters and media paths must survive daily wear. RAB India configures label artwork, batch formats, and optional export so supervisors refresh price rolls and reprints stay tidy after peak shifts."
      },
      {
        label: "Pallet Scale",
        image: weighingSpecPallet,
        alt: "Pallet jack with integrated digital weighing display",
        text:
          "Pallet and low-profile floor scales capture full-skid weights for inbound checks, shipping manifests, and inventory audits without forklift guesswork. Pit frames, guides, and deck finishes follow wheel paths and impact levels. Clean junction routing limits moisture risk on summed channels. RAB India aligns ramps, leveling, and witnessed calibration with your throughput and safety rules."
      },
      {
        label: "Piece Counting Scales",
        image: weighingSpecPieceCounting,
        alt: "Digital piece counting scale with parts on platform",
        text:
          "Piece-counting scales turn batch weight into unit counts once a stored average piece mass is learned—speeding fasteners, kits, and packaged goods versus hand counting. Dual displays, alarms, and memory help operators hit pack targets with fewer miscounts. RAB India defines sampling discipline, tolerances, and simple data export so line and warehouse teams reconcile the same totals."
      },
      {
        label: "Load Cell",
        image: weighingSpecLoadCell,
        alt: "Assorted load cells for industrial weighing applications",
        text:
          "Load cells convert force into millivolt signals for indicators and PLCs. Typical forms include single-point, shear-beam, S-type, column or canister, ring-torsion wash-down, and miniature bending-beam types used on belts or skids. Mounting kits, overload stops, and earthing keep Wheatstone bridges reliable. RAB India checks orientation, summing, cable glands, and drift expectations before startup."
      }
    ],
    sections: [
      {
        heading: "Fit and integration",
        items: [
          "Harsh-environment practice: wash-down ratings, pit drainage, and cable armour where needed",
          "Indicators, printers, and fieldbus or serial links matched to your MES or ERP touchpoints (project-based)",
          "Unattended or traffic-heavy flows with guardrails, traffic lights, and remote display repeats where operators cannot see the head unit"
        ]
      }
    ]
  },
  door: {
    title: "Door Interlocking Systems",
    intro:
      "Door interlocking enforces safe traffic through airlocks, buffer corridors, and classified rooms so that only one approved door is released at a time—never an unsafe combination that would break a pressure cascade or let two opposing paths stand open together. Installations usually pair electromagnetic locks or electric strikes with dependable door-position feedback, timed unlock windows, and emergency or fire inputs that follow your site’s safety rules rather than a one-size-fits-all bypass. Visual and audible indicators help guards and staff see at a glance which door is waiting, which is released, and when a forced or prolonged-open condition needs attention. The same ideas apply wherever contamination control matters—pharmaceutical suites, laboratories, cleanrooms, and critical healthcare zones—because controlled sequencing cuts both security risk and the chance of airflow or particulate carry-over between sides of a barrier. Larger vestibules can be handled with multi-door controllers from a single panel: configurable interlock matrices, switch-based or switchless modes where appropriate, and room for access switches, status LEDs, buzzers, and BMS or AHU signalling so building systems stay aligned with who is allowed through, and when. Commissioning-friendly interfaces (such as USB for parameter setup, with Ethernet or serial links for supervision) keep changes traceable after handover. RAB India works with your layout, door types, and operating narrative to specify hardware, cable paths, test cases, and handover documentation so interlocks stay predictable under daily load and clear under stress.",
    image: doorProduct,
    imageAlt: "Door interlocking",
    specs: [
      "Two- to eight-door (or more) interlock groups from one logic panel",
      "Mag-locks, strikes, and sensors with door-position monitoring",
      "LED / buzzer status, emergency and fire inputs, BMS or AHU hooks",
      "Site-configurable matrices, timed release, and supervised override"
    ],
    sections: [
      {
        heading: "Safety and compliance",
        items: [
          "Emergency release and fire strategies defined with your authority having jurisdiction",
          "Clear indication of normal, waiting, fault, and override states at the opening",
          "Testing and witness documentation for validation-driven environments"
        ]
      },
      {
        heading: "Delivery focus",
        items: [
          "Traffic and pressure-balance review before final interlock table sign-off",
          "Coordinated cable containment with access, CCTV, and cleanroom finishes",
          "Operator training on everyday use and what to do when a door refuses release"
        ]
      }
    ]
  },
  fire: {
    title: "Fire & Safety Monitoring",
    intro:
      "End-to-end fire detection and alarm design for plants, offices, and commercial buildings — from panels and field devices to clear evacuation signalling, aligned with your site layout and safety plan.",
    image: fireSafetyBanner,
    imageAlt: "Fire alarm and safety monitoring systems",
    specs: [
      "Conventional and addressable fire alarm control panels",
      "Smoke and heat detectors for early warning",
      "Manual call points (MCP) for human activation",
      "Hooters and sounders for audible evacuation alerts"
    ],
    featureItems: [
      {
        label: "Fire Alarm Control Panel (Conventional & Addressable)",
        image: fireSpecAlarmPanel,
        alt: "Fire alarm control panel",
        text:
          "The panel is the heart of the system: it receives signals from detectors and call points, shows zone status, and drives sounders. Conventional layouts suit simpler zoning; addressable systems pinpoint device location for faster response on larger sites."
      },
      {
        label: "Detectors",
        image: fireSpecDetectors,
        alt: "Fire detectors",
        text:
          "Detectors sense smoke or heat so the panel can raise an alarm early. The right mix and placement depends on ceiling height, airflow, and area use — from offices and corridors to plant and storage zones."
      },
      {
        label: "MCP",
        image: fireSpecMcp,
        alt: "Manual call point",
        text:
          "Manual call points let anyone raise a fire alarm by breaking the glass or operating the switch. They are installed along escape routes and near exits so the system can be triggered immediately when someone sees a risk."
      },
      {
        label: "Hooters",
        image: fireSpecHooters,
        alt: "Fire alarm hooters and sounders",
        text:
          "Hooters and sounders provide loud, clear audible warning across the building so people can evacuate in time. Levels and placement follow your floor plan, ambient noise, and statutory expectations for the facility type."
      }
    ],
    sections: []
  }
};
