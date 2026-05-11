/**
 * Short copy + visuals for full-page product routes.
 */

import cctvProduct from "./assets/cctv-product.png";
import cctvImage from "./assets/cctv.png";
import networkingImage from "./assets/networking.png";
import telecomProduct from "./assets/telecom-product.png";
import accessProduct from "./assets/access-product.png";
import conferenceProduct from "./assets/conference-product.png";
import weighingProduct from "./assets/weighing-product.png";
import doorProduct from "./assets/door-product.png";
import fireProduct from "./assets/fire.png";
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
      "Structured networking solutions for stable plant communication, device connectivity, and long-term operational reliability.",
    image: networkingImage,
    imageAlt: "Industrial networking infrastructure",
    specs: ["Managed switching", "Structured cabling support", "Segmentation for reliable operations"],
    sections: [
      {
        heading: "Scope",
        items: [
          "Switches, uplinks, and distribution planning",
          "Support for plant floors, offices, and control rooms",
          "Designed for stable day-to-day connectivity"
        ]
      }
    ]
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
    title: "Access Control",
    intro: "Readers, controllers, and rules — with logs suited to factories and offices.",
    image: accessProduct,
    imageAlt: "Access control readers",
    specs: ["Biometric / RFID / PIN", "Gates, doors, turnstiles", "CCTV-friendly event exports"],
    sections: [
      { heading: "Entry", items: ["Multi-factor where required", "Anti-passback and zone rules"] }
    ]
  },
  conference: {
    title: "Command & Conference Systems",
    intro: "Clear AV for boardrooms and coordination rooms — simple day‑two operation.",
    image: conferenceProduct,
    imageAlt: "Conference systems",
    specs: ["Cameras, mics, displays", "VC platform integration", "Training at handover"],
    sections: [{ heading: "Delivery", items: ["Layout + cable plant", "Commissioning and user handover"] }]
  },
  weighing: {
    title: "Industrial Weighing Solutions",
    intro: "Weighbridges to bench scales — accurate, rugged, and integration-ready.",
    image: weighingProduct,
    imageAlt: "Industrial weighing",
    specs: ["Truck / platform scales", "Indicators & printers", "Reporting / ERP hooks (project-based)"],
    sections: [{ heading: "Fit", items: ["Harsh-environment practice", "Unattended workflows where needed"] }]
  },
  door: {
    title: "Door Interlocking Systems",
    intro: "Airlocks and restricted corridors — logic that prevents unsafe door combinations.",
    image: doorProduct,
    imageAlt: "Door interlocking",
    specs: ["Multi-door interlock", "Mag-locks, sensors, strikes", "BMS / status signaling"],
    sections: [{ heading: "Safety", items: ["Emergency override per site norms", "Clear status indication"] }]
  },
  fire: {
    title: "Fire & Safety Monitoring",
    intro: "Detection and notification aligned to your building class — coordinated with evacuation planning.",
    image: fireProduct,
    imageAlt: "Fire safety monitoring",
    specs: ["Detectors, MCPs, sounders", "Addressable panels & zoning", "Commissioning documentation"],
    sections: [{ heading: "Scope", items: ["Certified product lines", "Interfaces per site requirement"] }]
  }
};
