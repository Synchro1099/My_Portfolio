// Tightly cropped copy of Soc22.jpg, so the logo fills the card.
import society22Logo from "../assets/Soc22-card.jpg";

// Single source of truth for portfolio projects.
// Every project uses the same card on the Projects page, in the order of `projects`.
// `homeFeaturedProject` is the project shown in the homepage feature.

const svilla = {
  id: "svilla",
  title: "S-Villa — Private Venue Booking Platform",
  category: "Booking & Reservation Platform",
  imgPath: `${process.env.PUBLIC_URL}/projects/svilla.jpg`,
  demoLink: "https://svilla.vercel.app/",
  businessProblem:
    "A private villa with a pickleball court and add-on facilities needed customers to see live prices and availability, book and pay online, and never double-book a slot, plus a simple way for the owner to run bookings day to day.",
  solutionBuilt:
    "A full-stack booking platform: one pickleball court booked by the hour, with badminton, a KTV lounge, a jacuzzi, and a courtyard as add-ons. Each booking reserves the whole venue for a single group of up to 6 guests, and a companion Owner Portal runs the business.",
  contribution:
    "Built solo from spec to live deployment: database design, booking engine, customer site, Owner Portal, notifications, and testing.",
  outcome: [
    "Zero possible double-bookings, enforced by the database.",
    "156 automated tests, including database tests against real Postgres.",
    "100% server-side price calculation: the client never sends a price or total.",
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
      text: "Six customer emails and separate owner alerts, plus optional SMS via Semaphore. Sends through Gmail SMTP, with Resend as an alternative. Retry logic and a shared database counter prevent duplicate sends.",
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
    title: "Hardened Through Real-World Testing",
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

const society22 = {
  id: "society22",
  title: "Society 22 — Event Registration & Payment Platform",
  category: "Events & Payments Platform",
  badge: "Latest Project",
  // Short text for the homepage feature.
  teaser:
    "An event registration and payment platform. Guests apply, get approved, pay and upload proof of payment on the site, and the owner runs every event from a private portal.",
  // No screenshot: the card shows the brand logo on a dark panel.
  imgPath: society22Logo,
  imgStyle: "logo",
  demoLink: "https://society22.club",
  businessProblem:
    "Society 22, a private social events brand in Pampanga, Philippines, ran its old site on a paid Hostinger VPS (React + Laravel + MySQL), with guest registration, review and payment checking handled separately.",
  solutionBuilt:
    "A from-scratch redesign as a serverless Next.js app on Vercel with Supabase. Guests apply, get reviewed, pay and upload proof of payment, all on the site, and the owner runs everything from a private portal.",
  contribution:
    "Solo full-stack developer: design, front end, back end, database, and deployment.",
  outcome: [
    "Moved registration, review and payment checking into one self-serve flow.",
    "Replaced the paid VPS with serverless hosting, with no server to maintain.",
    "Launched on the brand's own domain after a full live test of guest and owner flows.",
  ],
  customerTitle: "Guest Side",
  customerFeatures: [
    "Redesigned, mobile-first gold-on-black site: Home, About, Events, Blog, FAQs, Contact, policy pages",
    "Event pages with posters; per-event Google Form applications auto-synced into the site (Apps Script)",
    "Application flow: Pending review > Approved or Rejected > Proof of payment uploaded > Paid",
    "Private guest status page via secure signed link, plus \"find my booking\" lookup",
    "Proof of payment upload (GCash or bank transfer), including iPhone HEIC photos",
    "48-hour payment window that never runs past event start, with automatic expiry",
    "Venue address hidden until payment is confirmed, then revealed in the confirmation email",
    "Automatic emails for every step",
    "Privacy by design: no public gallery and no guest faces",
  ],
  ownerFeatures: [
    "Secure login with one Event screen (details, poster upload, form link)",
    "Quick and bulk approve/reject, proof review queue",
    "Door check-in on event night, daily summary email",
    "Manual \"Add guest\"",
    "CSV/ZIP export and cleanup of past events",
    "Installable on the owner's phone (PWA)",
  ],
  techStack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "Vercel", "Playwright"],
  // Full stack, shown in the case study in place of the tag list.
  techGroups: [
    { label: "Front end", items: "Next.js 16 (App Router, React 19, React Compiler), TypeScript, Tailwind CSS 4, Radix UI, Motion, Lucide, Sonner" },
    { label: "Back end", items: "Next.js server actions and API routes (serverless), Zod" },
    { label: "Database, Auth & Storage", items: "Supabase (Postgres, Row Level Security, DB-enforced status rules, public bucket for posters, private bucket for payment proofs)" },
    { label: "Email", items: "Nodemailer over Gmail" },
    { label: "Integrations", items: "Google Forms + Google Apps Script auto-sync" },
    { label: "Hosting", items: "Vercel (serverless functions in Seoul near the database, daily cron jobs), custom domain" },
    { label: "Testing", items: "Vitest unit tests, PGlite database tests, Playwright end-to-end and responsive tests" },
    { label: "Tooling", items: "ESLint, sharp, Git/GitHub auto-deploy from main" },
  ],
};

export const homeFeaturedProject = society22;

export const projects = [
  society22,
  svilla,
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
];
