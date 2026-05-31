import {
  Activity,
  BellRing,
  Bot,
  Building2,
  CalendarCheck,
  ChartNoAxesCombined,
  CheckCircle2,
  ClipboardCheck,
  FileSearch,
  Globe2,
  HeartPulse,
  MapPin,
  MessageCircle,
  MessageSquareText,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "AI Solutions", href: "/clinic-ai-automation" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const trustLogos = [
  "Healthcare Businesses",
  "Clinics",
  "Hospitals",
  "Medical Centers",
  "Dental Clinics",
  "Specialty Practices",
];

export const services = [
  {
    title: "Website Maintenance",
    slug: "doctor-website-maintenance",
    description:
      "A managed care plan for your clinic website: updates, security, monitoring, backups and speed optimization.",
    icon: ShieldCheck,
    items: ["Updates", "Security", "Monitoring", "Backups", "Speed Optimization"],
  },
  {
    title: "Healthcare SEO",
    slug: "healthcare-seo",
    description:
      "Technical SEO, local SEO and content strategy built around how patients search for treatment and care.",
    icon: SearchCheck,
    items: ["Technical SEO", "Local SEO", "Content SEO", "Keyword Strategy"],
  },
  {
    title: "AI Automations",
    slug: "clinic-ai-automation",
    description:
      "Patient inquiry workflows that qualify leads, send WhatsApp follow-ups and reduce manual admin work.",
    icon: Bot,
    items: ["Appointment Reminders", "WhatsApp Automation", "Lead Qualification"],
  },
  {
    title: "Reputation Management",
    slug: "reputation-management",
    description:
      "Systems for Google reviews, patient feedback, service recovery and reputation reporting.",
    icon: Star,
    items: ["Google Reviews", "Patient Feedback"],
  },
  {
    title: "Google Business Profile",
    slug: "google-business-profile",
    description:
      "Ongoing profile optimization that improves maps ranking and local discovery for high-intent searches.",
    icon: MapPin,
    items: ["Maps Ranking", "Local Visibility"],
  },
  {
    title: "Conversion Optimization",
    slug: "contact",
    description:
      "Landing pages, lead funnels and clinic-specific conversion paths that turn traffic into consults.",
    icon: ChartNoAxesCombined,
    items: ["Landing Pages", "Lead Funnels"],
  },
];

export const benefits = [
  "Healthcare Industry Specialists",
  "AI Powered Growth",
  "Monthly Reporting",
  "Dedicated Support",
  "SEO Experts",
  "Fast Response Time",
];

export const caseStudies = [
  {
    title: "Local SEO Lift for Multi-Specialty Clinic",
    slug: "local-seo-lift-for-multi-specialty-clinic",
    client: "Northline Medical Group",
    industry: "Multi-specialty clinic",
    challenge:
      "The clinic had low map visibility and inconsistent service pages across high-value specialties.",
    solution:
      "We rebuilt local service architecture, optimized Google Business Profile signals and shipped monthly content clusters.",
    results:
      "Search visibility improved across core specialties while appointment leads became easier to attribute.",
    trafficGrowth: 164,
    keywordGrowth: 118,
    leadGrowth: 72,
    image: "linear-gradient(135deg, #dbeafe 0%, #ffffff 50%, #bfdbfe 100%)",
  },
  {
    title: "AI Follow-Up System for Dental Practice",
    slug: "ai-follow-up-system-for-dental-practice",
    client: "SmileCare Studio",
    industry: "Dental clinic",
    challenge:
      "New patient inquiries were spread across forms, WhatsApp and missed calls with no reliable follow-up cadence.",
    solution:
      "We launched WhatsApp automation, lead scoring and timed appointment reminder sequences.",
    results:
      "The practice reduced manual calls and recovered leads that previously went unanswered.",
    trafficGrowth: 96,
    keywordGrowth: 61,
    leadGrowth: 138,
    image: "linear-gradient(135deg, #eff6ff 0%, #d1fae5 55%, #ffffff 100%)",
  },
  {
    title: "Website Care for Hospital Department",
    slug: "website-care-for-hospital-department",
    client: "Everwell Heart Center",
    industry: "Cardiology center",
    challenge:
      "Slow pages, plugin issues and outdated landing pages were affecting patient trust and campaign performance.",
    solution:
      "We introduced maintenance sprints, performance monitoring, backup automation and conversion-focused page updates.",
    results:
      "The department saw faster pages, fewer support tickets and improved campaign conversion rates.",
    trafficGrowth: 82,
    keywordGrowth: 47,
    leadGrowth: 54,
    image: "linear-gradient(135deg, #e0f2fe 0%, #ffffff 48%, #dcfce7 100%)",
  },
];

export const automationSteps = [
  { label: "Patient Inquiry", icon: MessageSquareText },
  { label: "AI Agent", icon: Bot },
  { label: "WhatsApp Follow Up", icon: MessageCircle },
  { label: "Appointment Booked", icon: CalendarCheck },
  { label: "Review Request", icon: BellRing },
  { label: "Google Review", icon: Star },
];

export const liveActivity = [
  { label: "New cardiology inquiry qualified", time: "18s ago", icon: Activity },
  { label: "WhatsApp follow-up delivered", time: "42s ago", icon: MessageCircle },
  { label: "Appointment reminder sent", time: "2m ago", icon: BellRing },
  { label: "Review request queued", time: "6m ago", icon: Star },
];

export const pricingPlans = [
  {
    name: "Starter",
    monthly: 799,
    annual: 649,
    description: "For practices that need reliable website care and local visibility basics.",
    features: [
      "Website maintenance",
      "Security monitoring",
      "Monthly SEO health check",
      "Google Business Profile tune-up",
      "Email support",
    ],
  },
  {
    name: "Growth",
    monthly: 1499,
    annual: 1249,
    description: "For clinics ready to grow organic demand and automate patient follow-up.",
    features: [
      "Everything in Starter",
      "Healthcare SEO campaigns",
      "AI lead follow-up workflow",
      "Monthly reporting dashboard",
      "Priority support",
    ],
    highlighted: true,
  },
  {
    name: "Scale",
    monthly: 2999,
    annual: 2499,
    description: "For multi-location practices and healthcare groups with complex growth needs.",
    features: [
      "Everything in Growth",
      "Multi-location local SEO",
      "Advanced automation design",
      "Reputation management",
      "Dedicated strategy lead",
    ],
  },
];

export const testimonials = [
  {
    name: "Dr. Maya Sen",
    designation: "Clinic Director",
    company: "Northline Medical Group",
    review:
      "SevenFold gave us the kind of clarity we needed: better rankings, faster patient follow-up and clean monthly reporting.",
  },
  {
    name: "Dr. Aaron Patel",
    designation: "Founder",
    company: "SmileCare Studio",
    review:
      "Their automation work helped our front desk respond faster without making the patient experience feel robotic.",
  },
  {
    name: "Elena Morris",
    designation: "Operations Lead",
    company: "Everwell Heart Center",
    review:
      "The maintenance plan has been quiet in the best way. Pages load faster and issues are handled before they become urgent.",
  },
  {
    name: "Dr. Hana Brooks",
    designation: "Managing Partner",
    company: "Luma Dermatology",
    review:
      "The team understands healthcare search intent. Our service pages finally match the way patients actually look for care.",
  },
];

export const faqs = [
  {
    question: "How is healthcare SEO different from normal SEO?",
    answer:
      "Healthcare SEO has stricter trust, accuracy and local-intent requirements. SevenFold builds technical, local and content systems around patient search behavior, practice credibility and service-line discoverability.",
  },
  {
    question: "Can you maintain an existing clinic website?",
    answer:
      "Yes. We can manage updates, backups, monitoring, speed improvements and small content changes for an existing WordPress, headless or custom clinic website.",
  },
  {
    question: "What AI automations are safest for clinics?",
    answer:
      "We focus on operational workflows such as reminders, lead follow-up, routing and review requests. Clinical advice and diagnosis workflows should stay under professional medical supervision.",
  },
  {
    question: "Do you support Google Business Profile optimization?",
    answer:
      "Yes. We optimize profiles, service categories, posts, review signals and local landing pages to improve maps visibility and lead quality.",
  },
  {
    question: "Can the contact form store leads in MySQL?",
    answer:
      "Yes. The included PHP API validates submissions and stores leads in the MySQL `leads` table using prepared statements.",
  },
];

export const servicePageContent = {
  "doctor-website-maintenance": {
    title: "Doctor Website Maintenance",
    heading: "Keep Your Clinic Website Fast, Secure and Always Up To Date",
    summary:
      "Managed website care for healthcare practices that cannot afford downtime, broken forms or outdated patient information.",
    icon: Globe2,
    outcomes: [
      "Weekly update management",
      "Security hardening",
      "Uptime and form monitoring",
      "Backups and recovery planning",
      "Performance optimization",
    ],
  },
  "healthcare-seo": {
    title: "Healthcare SEO",
    heading: "Build Sustainable Patient Demand From Search",
    summary:
      "A full healthcare SEO system covering technical foundations, local search, content strategy and conversion-focused service pages.",
    icon: FileSearch,
    outcomes: [
      "Technical SEO audits",
      "Service-line keyword strategy",
      "Local SEO architecture",
      "Healthcare content roadmaps",
      "Monthly growth reporting",
    ],
  },
  "clinic-ai-automation": {
    title: "Clinic AI Automation",
    heading: "Automate Patient Follow-Up Without Losing the Human Touch",
    summary:
      "AI-powered workflows for appointment reminders, WhatsApp automation, lead qualification and review requests.",
    icon: Sparkles,
    outcomes: [
      "Inquiry capture and routing",
      "WhatsApp follow-up sequences",
      "Appointment reminders",
      "Lead qualification logic",
      "Review request automation",
    ],
  },
  "reputation-management": {
    title: "Reputation Management",
    heading: "Turn Patient Feedback Into a Reliable Growth Channel",
    summary:
      "A reputation engine that requests reviews, surfaces patient concerns and protects trust across local search.",
    icon: ClipboardCheck,
    outcomes: [
      "Google review request flows",
      "Patient feedback routing",
      "Response templates",
      "Review performance reporting",
      "Service recovery alerts",
    ],
  },
  "google-business-profile": {
    title: "Google Business Profile Optimization",
    heading: "Improve Maps Visibility for High-Intent Local Searches",
    summary:
      "Ongoing profile optimization for clinics, hospitals and specialty practices that depend on local patient discovery.",
    icon: Building2,
    outcomes: [
      "Category and service optimization",
      "Photo and post cadence",
      "Local ranking signals",
      "Review strategy",
      "Maps visibility reporting",
    ],
  },
};

export const dashboardStats = [
  { label: "Website Health Score", value: "98%", icon: HeartPulse },
  { label: "SEO Growth", value: "+150%", icon: TrendingUp },
  { label: "AI Automation", value: "Active", icon: Bot },
  { label: "Reminder Sent", value: "2m ago", icon: CheckCircle2 },
  { label: "Lead Captured", value: "New", icon: Users },
];
