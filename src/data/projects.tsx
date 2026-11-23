// src/data/projects.tsx

export interface ProjectScreenshotSet {
  mobile?: string[];
  tablet?: string[];
  all: string[];
}

export interface ProjectItem {
  id: number;
  number: string;
  title: string;
  category: 'Websites & Web Platforms' | 'Mobile Flutter Apps' | 'Enterprise SaaS & Systems';
  tagline: string;
  description: string;
  techstack: string[];
  imageSrc: string;
  link: string;
  liveUrl?: string;
  ecosystem?: string;
  screenshots: ProjectScreenshotSet;
  highlights: string[];
  status?: string;
}

export const CATEGORIES = [
  'All Solutions',
  'Websites & Web Platforms',
  'Mobile Flutter Apps',
  'Enterprise SaaS & Systems'
] as const;

export type CategoryFilter = (typeof CATEGORIES)[number];

export const projects: ProjectItem[] = [
  // ─── WEBSITES & WEB PLATFORMS ───────────────────────────────────────────────
  {
    id: 1,
    number: '01',
    title: 'Angavix Systems',
    category: 'Websites & Web Platforms',
    tagline: 'Autonomous Drone Fleet Intelligence & Geospatial Analytics',
    description: 'Premier enterprise web platform for autonomous drone operations, precision aerial mapping, and aviation compliance. Empowers commercial operators and enterprise clients to translate raw flight telemetry into decisive spatial intelligence.',
    techstack: [
      '/techstack/nextjs.svg',
      '/techstack/react.svg',
      '/techstack/tailwind.svg',
    ],
    imageSrc: '/screenshots/angavix/angavix-mobile-iPhone_17_Pro_Max.png',
    link: 'https://www.angavix.com/',
    liveUrl: 'https://www.angavix.com/',
    screenshots: {
      mobile: [
        '/screenshots/angavix/angavix-mobile-iPhone_17_Pro_Max.png',
        '/screenshots/angavix/angavix-mobile-iPhone_17_Pro_Max (3).png',
        '/screenshots/angavix/angavix-mobile-iPhone_17_Pro_Max (3)ee.png'
      ],
      tablet: [
        '/screenshots/angavix/angavix-mobile-iPad_Air (3).png',
        '/screenshots/angavix/angavix-mobile-iPad_Air (3)3.png',
        '/screenshots/angavix/angavix-mobile-iPad_Air (3)eer.png'
      ],
      all: [
        '/screenshots/angavix/angavix-mobile-iPhone_17_Pro_Max.png',
        '/screenshots/angavix/angavix-mobile-iPad_Air (3).png',
        '/screenshots/angavix/angavix-mobile-iPhone_17_Pro_Max (3).png',
        '/screenshots/angavix/angavix-mobile-iPad_Air (3)3.png',
        '/screenshots/angavix/angavix-mobile-iPhone_17_Pro_Max (3)ee.png',
        '/screenshots/angavix/angavix-mobile-iPad_Air (3)eer.png'
      ]
    },
    highlights: [
      'Liquid-glass refraction badge with zero-runtime latency',
      'Interactive radar HUD and NDVI aerial analysis modules',
      'Full SEO crawlable architecture and responsive viewport scaling'
    ],
    status: 'Live Production'
  },
  {
    id: 2,
    number: '02',
    title: 'Excellent Home Health',
    category: 'Websites & Web Platforms',
    tagline: 'US In-Home Nursing & Specialized Clinical Care Platform',
    description: 'HIPAA-aligned web application for a premier US home health agency based in Ohio. Provides patient appointment scheduling, physician referral workflows, pediatric care portals, and multilingual service discovery.',
    techstack: [
      '/techstack/nextjs.svg',
      '/techstack/react.svg',
      '/techstack/tailwind.svg',
    ],
    imageSrc: '/screenshots/excellent-home-health/health49-mobile-iPhone_17_Pro_Max (3).png',
    link: 'https://www.excellenthomehealthllc.org/',
    liveUrl: 'https://www.excellenthomehealthllc.org/',
    screenshots: {
      mobile: [
        '/screenshots/excellent-home-health/health49-mobile-iPhone_17_Pro_Max (3).png',
        '/screenshots/excellent-home-health/healthcare33mobile-iPhone_17_Pro_Max (3).png',
        '/screenshots/excellent-home-health/healthcare-mobile-iPhone_17_Pro_Max (3).png'
      ],
      tablet: [
        '/screenshots/excellent-home-health/health400-mobile-iPad_Air (3).png',
        '/screenshots/excellent-home-health/healtcare-33-mobile-iPad_Air (3).png',
        '/screenshots/excellent-home-health/healthcare-mobile-iPad_Air (3)ed.png'
      ],
      all: [
        '/screenshots/excellent-home-health/health49-mobile-iPhone_17_Pro_Max (3).png',
        '/screenshots/excellent-home-health/health400-mobile-iPad_Air (3).png',
        '/screenshots/excellent-home-health/healtcare-33-mobile-iPad_Air (3).png',
        '/screenshots/excellent-home-health/healthcare33mobile-iPhone_17_Pro_Max (3).png',
        '/screenshots/excellent-home-health/healthcare-mobile-iPad_Air (3)ed.png',
        '/screenshots/excellent-home-health/healthcare-mobile-iPhone_17_Pro_Max (3).png'
      ]
    },
    highlights: [
      'Instant physician referral and insurance intake portal',
      'Micro-animations with accessible high-contrast UI',
      'Themed medical liquid-glass Made By signature'
    ],
    status: 'Live Production'
  },
  {
    id: 3,
    number: '03',
    title: 'Rashid Law Advocates',
    category: 'Websites & Web Platforms',
    tagline: 'Premier Legal Firm & Corporate Advocacy Portal',
    description: 'Bespoke corporate website for a high-profile Nairobi law firm. Features dynamic practice area explorations, case study publications, advocate consultation booking, and legal insights publishing.',
    techstack: [
      '/techstack/nextjs.svg',
      '/techstack/react.svg',
      '/techstack/css.svg',
    ],
    imageSrc: '/screenshots/rashid-law/rashid-mobile-iPhone_17_Pro_Max (3).png',
    link: 'https://rashidlawadvocates.vercel.app/',
    liveUrl: 'https://rashidlawadvocates.vercel.app/',
    screenshots: {
      mobile: [
        '/screenshots/rashid-law/rashid-mobile-iPhone_17_Pro_Max (3).png',
        '/screenshots/rashid-law/rashid2--2mobile-iPhone_17_Pro_Max (3).png'
      ],
      tablet: [
        '/screenshots/rashid-law/rashid-rsr-mobile-iPad_Air (3).png',
        '/screenshots/rashid-law/rashid-2-mobile-iPad_Air (3).png'
      ],
      all: [
        '/screenshots/rashid-law/rashid-mobile-iPhone_17_Pro_Max (3).png',
        '/screenshots/rashid-law/rashid-rsr-mobile-iPad_Air (3).png',
        '/screenshots/rashid-law/rashid2--2mobile-iPhone_17_Pro_Max (3).png',
        '/screenshots/rashid-law/rashid-2-mobile-iPad_Air (3).png'
      ]
    },
    highlights: [
      'High-authority legal aesthetic with imperial navy & gold palettes',
      'Interactive practice viewer and instant WhatsApp advocate desk',
      'Liquid-glass gold badge with SEO schema'
    ],
    status: 'Live Production'
  },
  {
    id: 4,
    number: '04',
    title: 'Terravia Farms',
    category: 'Websites & Web Platforms',
    tagline: 'Pixie Orange Agricultural Estate & B2B Agronomy Hub',
    description: 'Agricultural digital experience for a world-class Pixie Orange estate in Konza, Kenya. Showcases sustainable precision irrigation, technical agronomy journals, outgrower contracts, and luxury eco-stay experiences.',
    techstack: [
      '/techstack/nextjs.svg',
      '/techstack/react.svg',
      '/techstack/tailwind.svg',
    ],
    imageSrc: '/screenshots/terravia-farms/terravia-mobile-iPhone_17_Pro_Max (3).png',
    link: 'https://terraviafarms.com/',
    liveUrl: 'https://terraviafarms.com/',
    screenshots: {
      mobile: [
        '/screenshots/terravia-farms/terravia-mobile-iPhone_17_Pro_Max (3).png',
        '/screenshots/terravia-farms/terravia-54-mobile-iPhone_17_Pro_Max (3).png',
        '/screenshots/terravia-farms/teraaavuuumobile-iPhone_17_Pro_Max (3).png'
      ],
      tablet: [
        '/screenshots/terravia-farms/terravia-3-mobile-iPad_Air (3).png',
        '/screenshots/terravia-farms/terravia-smobile-iPad_Air (3).png',
        '/screenshots/terravia-farms/tetetersrrs-mobile-iPad_Air (3).png'
      ],
      all: [
        '/screenshots/terravia-farms/terravia-mobile-iPhone_17_Pro_Max (3).png',
        '/screenshots/terravia-farms/terravia-3-mobile-iPad_Air (3).png',
        '/screenshots/terravia-farms/terravia-54-mobile-iPhone_17_Pro_Max (3).png',
        '/screenshots/terravia-farms/terravia-smobile-iPad_Air (3).png',
        '/screenshots/terravia-farms/teraaavuuumobile-iPhone_17_Pro_Max (3).png',
        '/screenshots/terravia-farms/tetetersrrs-mobile-iPad_Air (3).png'
      ]
    },
    highlights: [
      'Earthy luxury brand design with editorial typography',
      'B2B export catalog and agricultural outgrower portals',
      'Amber-gold liquid-glass Made By lens'
    ],
    status: 'Live Production'
  },
  {
    id: 5,
    number: '05',
    title: 'Radius One / Emoh Links ISP',
    category: 'Websites & Web Platforms',
    tagline: 'Fiber Broadband & ISP Commercial Platform',
    description: 'High-converting telecommunications marketing website delivering high-speed fiber internet packages to homes, gated communities, and enterprises across the Kiambu & Nairobi metropolitan regions.',
    techstack: [
      '/techstack/nextjs.svg',
      '/techstack/react.svg',
      '/techstack/tailwind.svg',
    ],
    imageSrc: '/screenshots/radius-one/radius-mobile-iPhone_17_Pro_Max (3).png',
    link: 'https://www.radiusone.site/',
    liveUrl: 'https://www.radiusone.site/',
    screenshots: {
      mobile: [
        '/screenshots/radius-one/radius-mobile-iPhone_17_Pro_Max (3).png',
        '/screenshots/radius-one/radius-r-smobile-iPhone_17_Pro_Max (3).png'
      ],
      tablet: [
        '/screenshots/radius-one/radius-one-ss-mobile-iPad_Air (3).png',
        '/screenshots/radius-one/radius-s-mobile-iPad_Air (3).png'
      ],
      all: [
        '/screenshots/radius-one/radius-mobile-iPhone_17_Pro_Max (3).png',
        '/screenshots/radius-one/radius-one-ss-mobile-iPad_Air (3).png',
        '/screenshots/radius-one/radius-r-smobile-iPhone_17_Pro_Max (3).png',
        '/screenshots/radius-one/radius-s-mobile-iPad_Air (3).png'
      ]
    },
    highlights: [
      'Interactive geo-coverage verification tool',
      'Dynamic speed tier selectors and M-Pesa one-tap checkout',
      'Integrated liquid-glass footer with comprehensive developer SEO'
    ],
    status: 'Live Production'
  },
  {
    id: 6,
    number: '06',
    title: 'Design Triage',
    category: 'Websites & Web Platforms',
    tagline: 'High-Precision UI/UX Design Engineering Suite',
    description: 'Specialized product design engineering portal helping software startups audit, triage, and elevate their digital product interfaces with design systems, token architecture, and micro-interactions.',
    techstack: [
      '/techstack/nextjs.svg',
      '/techstack/react.svg',
      '/techstack/tailwind.svg',
      '/techstack/shadcn.svg',
    ],
    imageSrc: '/screenshots/design-triage/design-mobile-iPhone_17_Pro_Max (3).png',
    link: 'https://www.designtriage.com/',
    liveUrl: 'https://www.designtriage.com/',
    screenshots: {
      mobile: [
        '/screenshots/design-triage/design-mobile-iPhone_17_Pro_Max (3).png',
        '/screenshots/design-triage/designtt-mobile-iPhone_17_Pro_Max (3).png'
      ],
      tablet: [
        '/screenshots/design-triage/design-wwws-mobile-iPad_Air (3).png',
        '/screenshots/design-triage/design-s-mobile-iPad_Air (3).png'
      ],
      all: [
        '/screenshots/design-triage/design-mobile-iPhone_17_Pro_Max (3).png',
        '/screenshots/design-triage/design-wwws-mobile-iPad_Air (3).png',
        '/screenshots/design-triage/designtt-mobile-iPhone_17_Pro_Max (3).png',
        '/screenshots/design-triage/design-s-mobile-iPad_Air (3).png'
      ]
    },
    highlights: [
      'Signal blue & violet tech styling with fluid theme toggle',
      'Interactive SVG droplets and dynamic rotating typography',
      'Apple-grade liquid-glass refraction badge'
    ],
    status: 'Live Production'
  },
  {
    id: 7,
    number: '07',
    title: 'Moringa Healthcare Clinic',
    category: 'Websites & Web Platforms',
    tagline: 'Digital Outpatient Portal & Telehealth Portal',
    description: 'Modern patient clinic web experience enabling effortless healthcare access, electronic symptom questionnaires, doctor consultations, and lab test status inquiries.',
    techstack: [
      '/techstack/react.svg',
      '/techstack/javascript.svg',
      '/techstack/tailwind.svg',
    ],
    imageSrc: '/screenshots/moringa-clinic/moringa-mobile-iPhone_17_Pro_Max (3).png',
    link: 'https://www.moringaclinic.com/',
    liveUrl: 'https://www.moringaclinic.com/',
    screenshots: {
      mobile: [
        '/screenshots/moringa-clinic/moringa-mobile-iPhone_17_Pro_Max (3).png',
        '/screenshots/moringa-clinic/rere-mobile-iPhone_17_Pro_Max (3).png'
      ],
      tablet: [
        '/screenshots/moringa-clinic/mmoringamobile-iPad_Air (3).png',
        '/screenshots/moringa-clinic/reremoringa-mobile-iPad_Air (3).png'
      ],
      all: [
        '/screenshots/moringa-clinic/moringa-mobile-iPhone_17_Pro_Max (3).png',
        '/screenshots/moringa-clinic/mmoringamobile-iPad_Air (3).png',
        '/screenshots/moringa-clinic/rere-mobile-iPhone_17_Pro_Max (3).png',
        '/screenshots/moringa-clinic/reremoringa-mobile-iPad_Air (3).png'
      ]
    },
    highlights: [
      'Zero-friction virtual care scheduling with automated reminders',
      'Accessible medical typography and progressive web app capabilities',
      'Fluid responsive views across iPhone 17 Pro Max & iPad Air'
    ],
    status: 'Live Production'
  },

  // ─── MOBILE FLUTTER APPS ────────────────────────────────────────────────────
  {
    id: 8,
    number: '08',
    title: 'Tayari Careers App',
    category: 'Mobile Flutter Apps',
    tagline: 'Student Talent, Career Readiness & Youth Entrepreneurship',
    description: 'Flagship mobile application bundled with the Tayari Correspond workspace. Purpose-built to promote entrepreneurship among Kenyan youth, connecting ambitious university students with vetted attachments, and empowering them to build practical skills and launch their own ventures.',
    techstack: [
      '/techstack/flutter.svg',
      '/techstack/gcp.svg',
      '/techstack/javascript.svg',
    ],
    imageSrc: '/screenshots/tayari-careers/tayari-careers-1.png',
    link: 'https://tayaricareers.africa',
    liveUrl: 'https://tayaricareers.africa',
    ecosystem: 'Bundled with Tayari Correspond Startup Ecosystem',
    screenshots: {
      mobile: [
        '/screenshots/tayari-careers/tayari-careers-1.png',
        '/screenshots/tayari-careers/tayari-careers-2.png',
        '/screenshots/tayari-careers/tayari-careers-3.png',
        '/screenshots/tayari-careers/tayari-careers-4.png',
        '/screenshots/tayari-careers/tayari-careers-5.png',
        '/screenshots/tayari-careers/tayari-careers-6.png',
        '/screenshots/tayari-careers/tayari-careers-7.png'
      ],
      all: [
        '/screenshots/tayari-careers/tayari-careers-1.png',
        '/screenshots/tayari-careers/tayari-careers-2.png',
        '/screenshots/tayari-careers/tayari-careers-3.png',
        '/screenshots/tayari-careers/tayari-careers-4.png',
        '/screenshots/tayari-careers/tayari-careers-5.png',
        '/screenshots/tayari-careers/tayari-careers-6.png',
        '/screenshots/tayari-careers/tayari-careers-7.png'
      ]
    },
    highlights: [
      'Student profile builder with verified skill accreditation',
      'Direct startup matching engine powered by Tayari talent pool',
      'Seamless companion to the Correspond executive workspace'
    ],
    status: 'Active Ecosystem'
  },
  {
    id: 9,
    number: '09',
    title: 'Aura — Luxury Hospitality',
    category: 'Mobile Flutter Apps',
    tagline: 'Boutique Stays & Curated Vacation Reservation App',
    description: 'A Flutter mobile application crafted for luxury travel discovery. Features fluid page physics, shimmering skeletonizers, dynamic calendar booking sheets, and curated destination filters.',
    techstack: [
      '/techstack/flutter.svg',
      '/techstack/css.svg',
    ],
    imageSrc: '/proj/nairobicarcarescreenshot.PNG',
    link: 'https://github.com/MelgibsonK',
    screenshots: {
      all: [
        '/proj/nairobicarcarescreenshot.PNG'
      ]
    },
    highlights: [
      'Skeletonizer asynchronous data loading patterns',
      'ScreenUtil pixel-perfect multi-density responsive scaling',
      'Smooth Cupertino gestures and interactive SVG icons'
    ],
    status: 'Design Prototype'
  },
  {
    id: 10,
    number: '10',
    title: 'Angavix Hub Companion (Android)',
    category: 'Mobile Flutter Apps',
    tagline: 'Native Drone Cockpit Telemetry Synchronizer',
    description: 'Native Android application deployed onto DJI smart controllers (RC Pro / Enterprise). Indexes on-device flight records, synchronizes telemetry to the Angavix Hub cloud with cryptographic hash deduplication, and features zero-touch credential rotation.',
    techstack: [
      '/techstack/java.svg',
      '/techstack/websockets.svg',
    ],
    imageSrc: '/screenshots/angavix/angavix-mobile-iPhone_17_Pro_Max.png',
    link: 'https://www.angavix.com/',
    screenshots: {
      all: [
        '/screenshots/angavix/angavix-mobile-iPhone_17_Pro_Max.png'
      ]
    },
    highlights: [
      'Cockpit HUD glassmorphism UI optimized for sunlight viewability',
      'Zero-touch server-synchronized API key rotation',
      'Offline-first file queuing with automatic retries over 4G/WiFi'
    ],
    status: 'Hardware Pilot'
  },
  {
    id: 11,
    number: '11',
    title: 'Farma — Smart Farming App',
    category: 'Mobile Flutter Apps',
    tagline: 'Precision Agronomy & Field Telemetry Companion',
    description: 'Smart agricultural mobile app built in Flutter. Empowers estate agronomists with interactive GIS polygon parcel zoning (flutter_map), real-time soil sensor monitoring, harvest tracking, and weather-driven harvest insights.',
    techstack: [
      '/techstack/flutter.svg',
      '/techstack/react.svg',
    ],
    imageSrc: '/screenshots/terravia-farms/terravia-mobile-iPhone_17_Pro_Max (3).png',
    link: 'https://terraviafarms.com/',
    screenshots: {
      all: [
        '/screenshots/terravia-farms/terravia-mobile-iPhone_17_Pro_Max (3).png'
      ]
    },
    highlights: [
      'Interactive vector map overlays with latlong2 coordinates',
      'Phosphor vector icons and smooth Lottie micro-interactions',
      'Offline crop health logbook with automatic background sync'
    ],
    status: 'Production Beta'
  },

  // ─── ENTERPRISE SAAS & SYSTEMS ──────────────────────────────────────────────
  {
    id: 12,
    number: '12',
    title: 'Tayari Correspond Workspace',
    category: 'Enterprise SaaS & Systems',
    tagline: 'Executive High-Precision Mailing, Calendar & Task OS',
    description: 'Comprehensive business communication workspace built for founders and startups. Unites executive mailing, calendar scheduling, tasks, and contact management into a single liquid-glass interface backed by an enterprise Stalwart server.',
    techstack: [
      '/techstack/nextjs.svg',
      '/techstack/react.svg',
      '/techstack/tailwind.svg',
      '/techstack/websockets.svg',
    ],
    imageSrc: '/screenshots/tayari-correspond/mobile-iPhone_17_Pro_Max.png',
    link: 'https://tayaricareers.africa',
    ecosystem: 'Bundled with Tayari Careers Startup Ecosystem',
    screenshots: {
      mobile: [
        '/screenshots/tayari-correspond/mobile-iPhone_17_Pro_Max.png',
        '/screenshots/tayari-correspond/mobile-iPhone_17_Pro_Max (1).png',
        '/screenshots/tayari-correspond/mobile-iPhone_17_Pro_Max (2).png'
      ],
      tablet: [
        '/screenshots/tayari-correspond/mobile-iPad_Air.png',
        '/screenshots/tayari-correspond/mobile-iPad_Air (1).png',
        '/screenshots/tayari-correspond/mobile-iPad_Air (2).png'
      ],
      all: [
        '/screenshots/tayari-correspond/mobile-iPhone_17_Pro_Max.png',
        '/screenshots/tayari-correspond/mobile-iPad_Air.png',
        '/screenshots/tayari-correspond/mobile-iPhone_17_Pro_Max (1).png',
        '/screenshots/tayari-correspond/mobile-iPad_Air (1).png',
        '/screenshots/tayari-correspond/mobile-iPhone_17_Pro_Max (2).png',
        '/screenshots/tayari-correspond/mobile-iPad_Air (2).png'
      ]
    },
    highlights: [
      'Liquid-glass executive design system with fluid split panes',
      'White-labeled Stalwart mail server backend architecture',
      'Unified contacts, calendar, and task scheduling for youth startups'
    ],
    status: 'Active Ecosystem'
  },
  {
    id: 13,
    number: '13',
    title: 'Radius One ISP Billing & Operations OS',
    category: 'Enterprise SaaS & Systems',
    tagline: 'Carrier-Grade ISP Automation & Subscriber Lifecycle Platform',
    description: 'Full-stack enterprise telecom platform managing subscriber lifecycles, automated MikroTik bandwidth provisioning, real-time M-Pesa STK push reconciliation, and captive portal hotspot vouchers.',
    techstack: [
      '/techstack/nextjs.svg',
      '/techstack/react.svg',
      '/techstack/websockets.svg',
      '/techstack/tailwind.svg',
    ],
    imageSrc: '/proj/ispbillingsystem.png',
    link: 'https://demo.emohlinks.co.ke/#/login',
    liveUrl: 'https://demo.emohlinks.co.ke/#/login',
    screenshots: {
      all: [
        '/proj/ispbillingsystem.png',
        '/proj/ispbillingsystemwebsite.png',
        '/proj/ispbillingsystemportal.png'
      ]
    },
    highlights: [
      'Sub-second MikroTik RouterOS API automation and queue management',
      'Zero-drop M-Pesa STK push payment reconciliation pipeline',
      'Multi-role administrative console with audit logs and subscriber telemetry'
    ],
    status: 'Enterprise Deployed'
  },
  {
    id: 14,
    number: '14',
    title: 'Angavix Hub (Aero Command OS)',
    category: 'Enterprise SaaS & Systems',
    tagline: 'Aviation Drone Fleet Intelligence & Remote Operations Management',
    description: 'Centralized command and analytics platform for commercial drone fleets. Collects, processes, and visualizes geospatial telemetry, flight path logs, airspace compliance checks, and automated maintenance schedules.',
    techstack: [
      '/techstack/nextjs.svg',
      '/techstack/react.svg',
      '/techstack/fastapi.svg',
      '/techstack/websockets.svg',
    ],
    imageSrc: '/screenshots/angavix/angavix-mobile-iPad_Air (3).png',
    link: 'https://www.angavix.com/',
    screenshots: {
      all: [
        '/screenshots/angavix/angavix-mobile-iPad_Air (3).png'
      ]
    },
    highlights: [
      'Real-time WebSocket telemetry ingest from smart controllers',
      'Automated civil aviation authority compliance and audit reporting',
      'Spatial heatmaps and equipment lifecycle monitoring'
    ],
    status: 'Enterprise Deployed'
  },
  {
    id: 15,
    number: '15',
    title: 'Moringa Integrated Healthcare System',
    category: 'Enterprise SaaS & Systems',
    tagline: 'Clinical EHR, Telemedicine & Hospital Information Operating System',
    description: 'Comprehensive health technology ecosystem integrating a clinician diagnosis hub, FHIR-compliant electronic health records, telemedicine WebRTC video rooms, and structured questionnaire engines.',
    techstack: [
      '/techstack/python.svg',
      '/techstack/fastapi.svg',
      '/techstack/react.svg',
      '/techstack/websockets.svg',
    ],
    imageSrc: '/screenshots/moringa-clinic/mmoringamobile-iPad_Air (3).png',
    link: 'https://www.moringaclinic.com/',
    screenshots: {
      all: [
        '/screenshots/moringa-clinic/mmoringamobile-iPad_Air (3).png',
        '/screenshots/moringa-clinic/reremoringa-mobile-iPad_Air (3).png'
      ]
    },
    highlights: [
      'FHIR standard interoperability for medical observations and labs',
      'WebRTC encrypted video telemedicine consultation rooms',
      'Unified clinician hub, triage desk, and patient experience portal'
    ],
    status: 'Healthcare Deployed'
  },
  {
    id: 16,
    number: '16',
    title: 'Artboard Studio',
    category: 'Enterprise SaaS & Systems',
    tagline: 'High-Performance In-Browser Creative Suite & Document Engine',
    description: 'Full-stack creative workspace allowing designers and marketers to compose vector graphics, render high-resolution raster canvases, and export multi-page PDFs and ZIP packages with zero server overhead.',
    techstack: [
      '/techstack/nextjs.svg',
      '/techstack/react.svg',
      '/techstack/tailwind.svg',
    ],
    imageSrc: '/screenshots/design-triage/design-wwws-mobile-iPad_Air (3).png',
    link: 'https://www.designtriage.com/',
    screenshots: {
      all: [
        '/screenshots/design-triage/design-wwws-mobile-iPad_Air (3).png'
      ]
    },
    highlights: [
      'Client-side HTML5 canvas rasterization via html2canvas & jsPDF',
      'Prisma ORM database backend for document versioning and asset storage',
      'Fluid vector manipulation with zero-latency responsive controls'
    ],
    status: 'SaaS Deployed'
  },
  {
    id: 17,
    number: '17',
    title: 'Cromnis Transport OS',
    category: 'Enterprise SaaS & Systems',
    tagline: 'Intelligent Logistics, Trucking Fleet & Fuel Parser OS',
    description: 'Next-generation transport logistics platform for heavy commercial fleets. Automates trip sheet parsing, cargo tonnage reconciliation, driver expense audits, and fuel consumption analytics.',
    techstack: [
      '/techstack/nextjs.svg',
      '/techstack/react.svg',
      '/techstack/javascript.svg',
      '/techstack/tailwind.svg',
    ],
    imageSrc: '/proj/timelydealsscreenshot.PNG',
    link: 'https://github.com/MelgibsonK',
    screenshots: {
      all: [
        '/proj/timelydealsscreenshot.PNG'
      ]
    },
    highlights: [
      'Automated OCR and tabular report parser for trip manifests',
      'Tonnage vs fuel burn efficiency regression analytics',
      'Real-time transport intelligence and expense reconciliation'
    ],
    status: 'Fleet Production'
  }
];
