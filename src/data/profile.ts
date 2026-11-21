/**
 * All website content lives in this one file.
 * Edit text here and every section of the site updates automatically.
 *
 * Content is taken from the CV (public/Suresh-K-CV.pdf).
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
  PartyPopper,
  UserCheck,
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
    "Experienced Administration and Facilities Management professional with 15+ years in corporate administration, facilities management, corporate travel desk and travel booking, vendor governance, procurement (P2P) and statutory compliance across multi-location operations in South and East India. Known for cost optimization, SOP standardization and stakeholder satisfaction.",
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
  "I am a Senior Executive – Administration with 15+ years of experience in corporate administration, facilities management, travel desk management, vendor governance, procurement (P2P) and statutory compliance across multi-location operations in South and East India. I am currently with ANI Technologies Pvt. Ltd. (OLA Group) in Chennai.",
  "I manage a corporate travel desk handling ₹45–50 lakhs of flight, hotel, bus and cab bookings every month, and I have led office setup, expansion and relocation projects across ten cities. I am skilled in lease administration, asset lifecycle management, security and housekeeping supervision and budget control using SAP, Oracle and Microsoft Dynamics 365, and known for cost optimization, SOP standardization and stakeholder satisfaction.",
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
  { title: "Corporate Travel Booking", icon: PlaneTakeoff, description: "Flight, hotel, bus and cab bookings worth ₹45–50 lakhs a month." },
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
      "Oversee administrative and workplace functions for 12 corporate offices, 7 airports and 15 logistics yards.",
      "Manage facilities operations including building upkeep, power, utilities, seating and preventive maintenance.",
      "Handle lease contracts and landlord relationships, resolving utility, pest control and maintenance matters.",
      "Maintain statutory compliance by renewing licenses, completing facility audits and liaising with authorities.",
      "Select, onboard and evaluate service vendors, negotiating contracts and monitoring SLAs for cost savings.",
      "Execute the complete Purchase-to-Pay workflow from requisition to payment using SAP, Oracle and Dynamics.",
      "Manage the asset register end to end, including tagging, maintenance, verification and authorized disposal.",
      "Administer a corporate travel desk processing ₹45–50 lakhs of monthly flight, hotel, bus and cab bookings.",
      "Direct security and housekeeping personnel, monitoring attendance, discipline and service quality on site.",
      "Established a centralized helpdesk and compiled MIS reports, dashboards and travel analytics for management.",
    ],
  },
  {
    role: "Administration Executive",
    company: "Sun TV Network Ltd.",
    period: "2011 – 2014",
    location: "Chennai, India",
    initials: "SUN",
    points: [
      "Coordinated purchasing and vendor relationships to meet corporate administration needs across two states.",
      "Delivered confidential executive administration support to the CEO's Office with a high standard of service.",
      "Assisted with budgeting and handled purchase paperwork, invoice processing and vendor payments accurately.",
    ],
  },
  {
    role: "Office Assistant",
    company: "SPi Global",
    period: "2007 – 2011",
    location: "Chennai, India",
    initials: "SPi",
    points: [
      "Ran mailroom and courier services and managed document handling, records and internal logistics daily.",
      "Backed procurement and inventory control while handling filing, documentation and routine office operations.",
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
  { value: 50, rangeStart: 45, prefix: "₹", suffix: "L", label: "Monthly Travel Bookings – Flight, Hotel, Bus & Cab", icon: IndianRupee, accent: "from-sky-500 to-indigo-400" },
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
  { title: "Travel Booking – Flight, Hotel, Bus & Cab", icon: Ticket },
  { title: "Events", icon: PartyPopper },
  { title: "Fleet and Transport", icon: Car },
  { title: "Guest House Management", icon: Hotel },
  { title: "Statutory Licensing", icon: Stamp },
  { title: "Audit Coordination", icon: ClipboardCheck },
  { title: "Fire Safety and HSE", icon: FireExtinguisher },
  { title: "Business Continuity", icon: LifeBuoy },
  { title: "Asset Lifecycle Management", icon: RefreshCw },
  { title: "Security & Housekeeping Supervision", icon: UserCheck },
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
