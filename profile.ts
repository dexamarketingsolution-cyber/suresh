/**
 * All website content lives in this one file.
 * Edit text here and every section of the site updates automatically.
 *
 * IMPORTANT: Before publishing, compare the experience bullet points below
 * with the CV (SURESH K.pdf) and adjust any wording so it matches exactly.
 */
import {
  // About
  Building2,
  Wrench,
  Network,
  Handshake,
  ShoppingCart,
  Scale,
  Armchair,
  PiggyBank,
  PlaneTakeoff,
  // Achievements
  Building,
  Plane,
  Warehouse,
  Users,
  IndianRupee,
  ShieldCheck,
  // Core competencies
  Briefcase,
  HardHat,
  Globe,
  ListChecks,
  Boxes,
  Ruler,
  KeyRound,
  Headset,
  MessagesSquare,
  Timer,
  Receipt,
  Calculator,
  Luggage,
  Car,
  Hotel,
  Ticket,
  Stamp,
  ClipboardCheck,
  FireExtinguisher,
  LifeBuoy,
  RefreshCw,
  TrendingUp,
  // Technical
  Database,
  Server,
  Cloud,
  Sheet,
  LayoutDashboard,
  type LucideIcon,
} from "lucide-react";

export const profile = {
  name: "Suresh K",
  designation: "Senior Executive Administration",
  tagline: "15+ Years of Experience in Administration & Facilities Management",
  location: "Chennai, Tamil Nadu, India",
  email: "suresh.adminspecialist@gmail.com",
  phoneDisplay: "+91 97909 72444",
  phoneHref: "tel:+919790972444",
  linkedin: "https://www.linkedin.com/in/sureshadminspecialist/",
  cvPath: "/Suresh-K-CV.pdf",
  photo: "/images/suresh-k.jpg",
  yearsOfExperience: "15+",
  intro:
    "Administration and facilities management professional with over 15 years of experience running corporate offices, airport facilities and logistics yards across multiple locations, and managing a corporate travel desk that handles ₹45–50 lakhs of bookings every month. I build dependable workplace operations through strong vendor partnerships, disciplined procurement, statutory compliance and careful cost control.",
};

export const navLinks = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "achievements", label: "Achievements" },
  { id: "competencies", label: "Competencies" },
  { id: "skills", label: "Systems" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
] as const;

export type IconItem = { title: string; icon: LucideIcon; description?: string };

export const aboutParagraphs = [
  "I am a Senior Executive – Administration with more than 15 years of hands-on experience in corporate administration and facilities management, currently with ANI Technologies Pvt. Ltd. (OLA Group) in Chennai.",
  "My work covers the full scope of workplace operations — from running multi-location facilities and managing vendors and service partners, to procurement and purchase-to-pay, corporate travel management, statutory compliance, and budget and cost optimisation. I run the corporate travel desk, handling ₹45–50 lakhs of travel bookings every month. I focus on building processes that keep offices, people and operations running smoothly every day.",
];

export const aboutHighlights: IconItem[] = [
  { title: "Corporate Administration", icon: Building2, description: "End-to-end office administration for corporate workplaces." },
  { title: "Facilities Management", icon: Wrench, description: "Maintenance, upkeep and soft services across sites." },
  { title: "Multi-Location Operations", icon: Network, description: "Offices, airport facilities and logistics yards." },
  { title: "Vendor Management", icon: Handshake, description: "Selection, negotiation and SLA-driven performance." },
  { title: "Procurement & Purchase-to-Pay", icon: ShoppingCart, description: "Purchase requests through to vendor payment." },
  { title: "Statutory Compliance", icon: Scale, description: "Licences, renewals and audit readiness." },
  { title: "Workplace Management", icon: Armchair, description: "Productive, safe and well-run work environments." },
  { title: "Budget & Cost Optimization", icon: PiggyBank, description: "Tight budget control and cost savings." },
  { title: "Corporate Travel Management", icon: PlaneTakeoff, description: "Travel desk handling ₹45–50 lakhs of bookings a month." },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  current?: boolean;
  initials: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    role: "Senior Executive – Administration",
    company: "ANI Technologies Pvt. Ltd. (OLA Group)",
    period: "2014 – Present",
    location: "Chennai, India",
    current: true,
    initials: "OLA",
    points: [
      "Manage administration and facilities for 12 corporate offices, 7 airport facilities and 15 logistics yards.",
      "Oversee 175+ security and housekeeping personnel deployed across locations.",
      "Run the corporate travel desk end to end, handling flight, hotel and cab bookings worth ₹45–50 lakhs every month.",
      "Coordinate employee travel requests, approvals, itinerary changes and cancellations with travel partners.",
      "Maintain 100% statutory compliance, including licensing, renewals and audit coordination.",
      "Lead vendor negotiation, SLA management and purchase-to-pay processes.",
      "Handle office setup and relocation, space planning, lease administration and the central helpdesk.",
      "Manage budgets and cost control, asset lifecycle and MIS reporting for management.",
    ],
  },
  {
    role: "Administration Executive",
    company: "Sun TV Network Ltd.",
    period: "2011 – 2014",
    location: "Chennai, India",
    initials: "SUN",
    points: [
      "Handled day-to-day office administration and facility operations.",
      "Coordinated with vendors and service providers for office services and maintenance.",
      "Handled travel bookings and accommodation arrangements for staff.",
      "Supported procurement and maintained administrative records.",
    ],
  },
  {
    role: "Office Assistant",
    company: "SPi Global",
    period: "2007 – 2011",
    location: "Chennai, India",
    initials: "SPi",
    points: [
      "Provided administrative support for daily office operations.",
      "Maintained office supplies, records and documentation.",
      "Assisted with front-office coordination and general office services.",
    ],
  },
];

export type Stat = {
  value: number;
  /** When set, the counter shows a range such as "₹45–50" */
  rangeStart?: number;
  prefix?: string;
  suffix?: string;
  label: string;
  icon: LucideIcon;
  accent: string;
};

export const achievements: Stat[] = [
  { value: 12, label: "Corporate Offices", icon: Building, accent: "from-blue-500 to-cyan-400" },
  { value: 7, label: "Airport Facilities", icon: Plane, accent: "from-violet-500 to-fuchsia-400" },
  { value: 15, label: "Logistics Yards", icon: Warehouse, accent: "from-teal-500 to-emerald-400" },
  { value: 175, suffix: "+", label: "Security & Housekeeping Personnel", icon: Users, accent: "from-indigo-500 to-blue-400" },
  { value: 50, rangeStart: 45, prefix: "₹", suffix: "L", label: "Monthly Travel Bookings (Lakhs)", icon: IndianRupee, accent: "from-sky-500 to-indigo-400" },
  { value: 100, suffix: "%", label: "Statutory Compliance", icon: ShieldCheck, accent: "from-emerald-500 to-teal-400" },
];

export const competencies: IconItem[] = [
  { title: "Corporate Administration", icon: Briefcase },
  { title: "Facilities Management", icon: HardHat },
  { title: "Multi-Site Operations", icon: Globe },
  { title: "SOP Design", icon: ListChecks },
  { title: "Office Setup and Relocation", icon: Boxes },
  { title: "Space Planning", icon: Ruler },
  { title: "Lease Administration", icon: KeyRound },
  { title: "Central Helpdesk", icon: Headset },
  { title: "Vendor Negotiation", icon: MessagesSquare },
  { title: "SLA Management", icon: Timer },
  { title: "Purchase-to-Pay", icon: Receipt },
  { title: "Budget and Cost Control", icon: Calculator },
  { title: "Corporate Travel Desk", icon: Luggage },
  { title: "Travel Booking & Ticketing", icon: Ticket },
  { title: "Fleet and Transport", icon: Car },
  { title: "Guest House Management", icon: Hotel },
  { title: "Statutory Licensing", icon: Stamp },
  { title: "Audit Coordination", icon: ClipboardCheck },
  { title: "Fire Safety and HSE", icon: FireExtinguisher },
  { title: "Business Continuity", icon: LifeBuoy },
  { title: "Asset Lifecycle Management", icon: RefreshCw },
  { title: "MIS Reporting", icon: TrendingUp },
];

export const techSkills: (IconItem & { tag: string; gradient: string })[] = [
  { title: "SAP ERP", icon: Database, tag: "ERP", description: "Enterprise resource planning system.", gradient: "from-blue-500/30 to-cyan-400/10" },
  { title: "Oracle ERP", icon: Server, tag: "ERP", description: "Enterprise resource planning system.", gradient: "from-red-500/25 to-orange-400/10" },
  { title: "Microsoft Dynamics 365", icon: Cloud, tag: "ERP", description: "Microsoft business applications platform.", gradient: "from-violet-500/30 to-indigo-400/10" },
  { title: "Advanced Microsoft Excel", icon: Sheet, tag: "Analytics", description: "Data tracking, analysis and reporting.", gradient: "from-emerald-500/30 to-teal-400/10" },
  { title: "MIS Dashboards", icon: LayoutDashboard, tag: "Reporting", description: "Management information reporting.", gradient: "from-sky-500/30 to-blue-400/10" },
];

export const education = {
  degree: "Bachelor of Business Administration (BBA)",
  institution: "Annamalai University",
  period: "2007 – 2010",
};
