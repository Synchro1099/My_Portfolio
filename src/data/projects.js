// Single source of truth for portfolio projects.
// To add a project, append an entry to `projects` (or swap `featuredProject`).

export const featuredProject = {
  id: "svilla",
  title: "S-Villa Private Pickleball & Courtyard",
  category: "Booking & Reservation Platform",
  imgPath: `${process.env.PUBLIC_URL}/projects/svilla.jpg`,
  demoLink: "https://svilla.vercel.app/",
  summary:
    "A production-ready booking platform for a private venue offering pickleball, badminton, a jacuzzi, a music room, and a bar & lounge for small groups. Customers book and pay through a guided flow, while the owner runs the entire business from a dedicated Owner Portal — without touching code.",
  metrics: [
    { value: "0", label: "Possible double-bookings (DB-enforced)" },
    { value: "2", label: "Apps in one: customer site + Owner Portal" },
    { value: "100%", label: "Server-side price calculation" },
  ],
  highlights: [
    {
      title: "Race-condition-safe booking engine",
      text: "A PostgreSQL exclusion constraint, not only app-level checks, guarantees two customers can never double-book the same slot, even under simultaneous requests.",
    },
    {
      title: "Live, database-driven pricing",
      text: "Owner price edits go live on the public site and booking calculator instantly, while past bookings keep an immutable price snapshot.",
    },
    {
      title: "Server-authoritative validation",
      text: "The client never sends a price or total. Everything is calculated and verified server-side in a transactional Postgres function.",
    },
    {
      title: "Row Level Security end-to-end",
      text: "Customers see only their own bookings. Only the owner role can access payment proofs, closure reasons, or confirm and reject bookings.",
    },
    {
      title: "Secure payment-proof workflow",
      text: "Proofs live in private storage and are served through signed, short-lived URLs. Nothing sits in a public bucket.",
    },
    {
      title: "Motion-forward, accessible UI",
      text: "Scroll reveals, hover interactions, and animated step transitions with Framer Motion, plus reduced-motion support.",
    },
  ],
  customerFeatures: [
    "Browse live pricing and availability",
    "Book a private time slot through a guided multi-step flow",
    "Submit GCash or bank-transfer payment proof",
    "Track booking status on a private page, with email updates at each step",
  ],
  ownerFeatures: [
    "Review, confirm, or reject bookings (with a required rejection reason)",
    "Inspect uploaded payment proofs inline with a zoomable lightbox",
    "Edit service prices anytime, while past bookings keep their locked-in price",
    "Close dates, block hours, set recurring closed days and operating hours",
    "Configure GCash/bank details and contact info, reflected live on the site",
    "Calendar view of pending, confirmed, and closed dates",
  ],
  techStack: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Supabase",
    "PostgreSQL",
    "Framer Motion",
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
