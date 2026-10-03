// Single source of truth for portfolio projects.
// To add a project, append an entry to `projects` (or swap `featuredProject`).

export const featuredProject = {
  id: "svilla",
  title: "S-Villa — Private Venue Booking Platform",
  category: "Booking & Reservation Platform",
  imgPath: `${process.env.PUBLIC_URL}/projects/svilla.jpg`,
  demoLink: "https://svilla.vercel.app/",
  // Leave empty to hide the "Source Code" button; sourceNote shows instead.
  sourceLink: "",
  sourceNote: "Source code is private (client project). Available on request.",
  summary:
    "A full-stack booking platform for a private villa: one pickleball court booked by the hour, with badminton, a KTV lounge, a jacuzzi, and a courtyard as add-ons. Each booking reserves the whole venue for a single group of up to 6 guests. Built solo from spec to live deployment.",
  metrics: [
    { value: "0", label: "Possible double-bookings (DB-enforced)" },
    { value: "156", label: "Automated tests" },
    { value: "100%", label: "Server-side price calculation" },
  ],
  highlights: [
    {
      title: "Race-condition-safe booking engine",
      text: "A PostgreSQL GiST exclusion constraint guarantees two customers can never double-book the same slot, even under simultaneous requests. Enforced at the database, not just in app code.",
    },
    {
      title: "Server-authoritative pricing",
      text: "The client never sends a price or total. A transactional Postgres function calculates and validates everything, then snapshots the price into an immutable booking_items record.",
    },
    {
      title: "Security hardening",
      text: "Row Level Security on every table, rate limiting on booking, login, lookup and uploads, and real file-type checks with a 5 MB limit. Nobody can promote themselves to owner: the database blocks it.",
    },
    {
      title: "Email and SMS notifications",
      text: "Six customer emails and separate owner alerts, plus optional SMS via Semaphore. Sends through Resend with a Gmail SMTP fallback, with retry logic and duplicate-send prevention via a shared database counter.",
    },
    {
      title: "Secure payment-proof storage",
      text: "A private Supabase Storage bucket, signed short-lived URLs, and an in-app lightbox preview. Nothing is publicly exposed.",
    },
    {
      title: "Tested against real Postgres",
      text: "Vitest and PGlite run the real migrations in an in-memory Postgres, so the tests prove the double-booking and pricing rules at the database, not against mocks.",
    },
  ],
  hardening: {
    title: "Hardened through real-world testing",
    text: "Took the app through a full real-world testing cycle before calling it done.",
    items: [
      "Traced and fixed a live production outage: a malformed environment variable was silently breaking booking creation, payment-proof preview, and the cron expiry job at the same time.",
      "Fixed a race condition that sent duplicate notification emails.",
      "Closed several mobile-specific UX gaps found through actual phone testing.",
    ],
  },
  customerFeatures: [
    "Browse live pricing and availability",
    "Book a private time slot through a guided 6-step flow",
    "Book as a guest with no account (secret link or reference lookup), or sign up to keep bookings in one place",
    "Unpaid bookings hold the slot for 30 minutes, then free it automatically",
    "Read the house rules before paying",
    "Pay via GCash or bank transfer by uploading a payment receipt",
    "Track booking status on a persistent status page",
    "Get real email updates for all 6 states: pending, proof received, confirmed, rejected, cancelled, expired",
  ],
  ownerFeatures: [
    "Review, confirm, or reject bookings (with required reasons)",
    "See bookings on a calendar and payments on their own page",
    "View payment proofs in a secure, zoomable image preview",
    "Edit service prices live, while past bookings keep their locked-in price",
    "Hide services and restore them later without losing booking history",
    "Close dates, block hours, set recurring closed days and operating hours",
    "Edit the house rules shown to customers",
    "Keep the caretaker's contact private, sent only to confirmed bookings",
    "Archive old bookings without deleting records",
    "Configure payment and contact details, reflected live on the site",
  ],
  techStack: [
    "Next.js 16",
    "React 19",
    "TypeScript",
    "Tailwind CSS",
    "Supabase",
    "PostgreSQL",
    "Zod",
    "Vitest",
    "Motion",
    "Resend",
    "Vercel",
  ],
};

export const projects = [
  {
    id: "lily-co",
    title: "Lily & Co.",
    category: "E-commerce & Operations",
    imgPath: "https://i.ibb.co/XxnSxPN4/lily-co.png",
    businessProblem:
      "The brand needed a more reliable way to manage inventory and daily e-commerce operations while maintaining a smooth customer buying experience.",
    solutionBuilt:
      "A full-stack business management and commerce workflow that connected stock monitoring, product updates, and storefront operations.",
    contribution:
      "Led full-stack implementation across frontend experience, backend logic, inventory automation, and deployment optimization.",
    techStack: ["React", "Shopify", "PostgreSQL", "AWS", "JavaScript"],
    outcome: [
      "Reduced out-of-stock errors by 70% via custom stocking and inventory automation.",
      "Improved operational speed by reducing repetitive manual inventory tasks.",
      "Strengthened platform reliability through modular architecture improvements.",
    ],
    demoLink: "https://lilyandco.com.ph/",
  },
  {
    id: "mst-connect",
    title: "MST CONNECT PH",
    category: "Learning Platform",
    imgPath: "https://i.ibb.co/tMtsbJLr/Screenshot-2025-12-05-162113.png",
    businessProblem:
      "The organization needed to deliver learning services to a growing user base while keeping assessments, certifications, and progress tracking centralized.",
    solutionBuilt:
      "An end-to-end learning and user management platform with training workflows, assessments, certification modules, and account controls.",
    contribution:
      "Developed core platform modules, integrated payment and user flows, and optimized backend performance for scale.",
    techStack: ["React", "PHP", "MySQL", "REST APIs", "Payment Gateway Integration"],
    outcome: [
      "Supported an LMS ecosystem used by 10,000+ students and professionals.",
      "Enabled structured learning operations with automated tracking and certification flows.",
      "Improved reliability and load performance through API and query optimization.",
    ],
    demoLink: "https://www.mstconnectph.com/",
  },
  {
    id: "charlies-barber",
    title: "Charlie's Barber & Salon",
    category: "Service Business Website",
    imgPath: "https://www.charliesbarber.shop/images/optimized/store-960.webp",
    businessProblem:
      "The business needed a stronger digital presence to help potential customers discover services, build trust, and convert interest into bookings.",
    solutionBuilt:
      "A service-focused web experience with clear service journeys, portfolio visibility, and direct contact and booking pathways.",
    contribution:
      "Built and optimized the website structure, frontend UX, local visibility setup, and conversion-focused content flows.",
    techStack: ["WordPress", "JavaScript", "Elementor", "Google Maps", "SEO"],
    outcome: [
      "Improved customer journey clarity from service discovery to inquiry.",
      "Increased trust with portfolio-first presentation and stronger brand positioning.",
      "Improved local discoverability through SEO and location-based integrations.",
    ],
    demoLink: "https://www.charliesbarber.shop/",
  },
  {
    id: "society22",
    title: "Society22",
    category: "Platform Architecture",
    imgPath: "https://society22.club/Logo.png",
    businessProblem:
      "The platform had split frontend and backend deployments that added complexity, maintenance overhead, and release friction.",
    solutionBuilt:
      "A consolidated full-stack architecture that unified frontend assets and backend delivery under a single Laravel-served setup.",
    contribution:
      "Handled architecture planning, deployment restructuring, Nginx routing fixes, and build pipeline stabilization.",
    techStack: ["React", "Laravel", "Filament PHP", "Nginx", "Linux"],
    outcome: [
      "Simplified release and deployment workflows by removing split pipeline complexity.",
      "Resolved production bottlenecks related to routing, assets, and permissions.",
      "Improved long-term maintainability with centralized architecture.",
    ],
    demoLink: "https://society22.club/",
  },
];
