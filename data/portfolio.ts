import {
  CalendarDays,
  FileText,
  ImageIcon,
  LayoutGrid,
  LineChart,
  Megaphone,
  Palette,
  PenTool,
  Target,
  type LucideIcon
} from "lucide-react";

export const brand = {
  name: "IDEA HOUSE",
  descriptor: "Content & Brand Studio",
  tagline: "Ideas Into Impact.",
  serviceLine: "Text • Graphic • Planning",
  email: "creativehouse10x@gmail.com",
  phone: "09983993588",
  location: "Mandalay, Myanmar",
  logo: "/assets/idea-house-logo.png"
};

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#plans", label: "Plans" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" }
];

export const studioStats = [
  { value: "3", label: "early clients", detail: "accepted in the first studio season" },
  { value: "3 mo", label: "new studio", detail: "focused, selective, and strategy-led" },
  { value: "30", label: "posts / month", detail: "available in the Business plan" }
];

export const pillars = [
  {
    title: "TEXT",
    description: "Captions, messaging, scripts, brand voice, and content writing.",
    icon: FileText
  },
  {
    title: "GRAPHIC",
    description: "Visual direction, social media graphics, and brand-ready creative design.",
    icon: Palette
  },
  {
    title: "PLANNING",
    description: "Brand strategy, buyer personas, content calendars, and monthly content plans.",
    icon: CalendarDays
  }
] satisfies Array<{ title: string; description: string; icon: LucideIcon }>;

export const services = [
  {
    title: "Brand Identity & Logo Design",
    description: "Shape a clear first impression with a focused logo direction and identity foundation.",
    icon: PenTool
  },
  {
    title: "Brand Voice & Brand Outline",
    description: "Define how your brand speaks, what it stands for, and how it shows up consistently.",
    icon: Megaphone
  },
  {
    title: "Buyer Persona Development",
    description: "Clarify who you are speaking to so every message has a sharper purpose.",
    icon: Target
  },
  {
    title: "Content Strategy & Monthly Planning",
    description: "Turn scattered ideas into a practical content system with direction and rhythm.",
    icon: LayoutGrid
  },
  {
    title: "Social Media Content Creation",
    description: "Create structured monthly posts that keep your brand visible and understandable.",
    icon: CalendarDays
  },
  {
    title: "Visual Content & Graphic Design",
    description: "Build polished social graphics and visual systems that support brand recognition.",
    icon: ImageIcon
  }
] satisfies Array<{ title: string; description: string; icon: LucideIcon }>;

export const plans = [
  {
    number: "PLAN 01",
    name: "STARTER",
    label: "Your Brand Starter Kit.",
    description: "Start with clarity. Grow with purpose.",
    features: ["Logo Design", "Brand Voice", "Brand Outline", "Buyer Persona", "15 Posts / Month"],
    originalPrice: "800,000 MMK",
    earlyBirdPrice: "600,000 MMK",
    cta: "Choose Starter",
    badge: null,
    featured: false
  },
  {
    number: "PLAN 02",
    name: "BUSINESS",
    badge: "Best for Growth",
    label: "Business Momentum for Your Brand.",
    description: "Built to stay visible. Designed for momentum.",
    features: [
      "Logo Design",
      "Brand Voice",
      "Brand Outline",
      "Buyer Persona",
      "Full Brand Guidelines",
      "Monthly Content Calendar",
      "Monthly Content Plan",
      "30 Posts / Month"
    ],
    originalPrice: "1,200,000 MMK",
    earlyBirdPrice: "1,000,000 MMK",
    cta: "Choose Business",
    featured: true
  }
] as const;

export const planDescriptions = [
  {
    title: "STARTER",
    text: "For new businesses that want to begin with a clear, professional brand foundation and consistent monthly content."
  },
  {
    title: "BUSINESS",
    text:
      "For businesses that want to launch or grow with momentum through complete brand direction, strategic planning, and 30 monthly content posts."
  }
];

export type SelectedWork = {
  label: string;
  title: string;
  description: string;
  image: string | null;
  imageAlt: string | null;
  tags: string[];
};

export const selectedWork: SelectedWork[] = [
  {
    label: "Brand Foundation",
    title: "Starter Brand Kit",
    description: "A clear beginning system for logo direction, brand voice, outline, persona, and 15 monthly posts.",
    image: "/assets/idea-house-starter-kit.jpg",
    imageAlt: "IDEA HOUSE starter brand kit graphic",
    tags: ["Logo Direction", "Brand Voice", "Starter Kit"]
  },
  {
    label: "Social Content System",
    title: "Business Momentum",
    description: "A monthly content system designed to build consistency, clarity, and visible brand growth.",
    image: "/assets/idea-house-business-momentum.jpg",
    imageAlt: "IDEA HOUSE business momentum graphic",
    tags: ["30 Posts", "Content Calendar", "Momentum"]
  },
  {
    label: "Content Planning",
    title: "Choose Your Plan",
    description: "A clean pricing and planning structure built for different stages of brand growth.",
    image: "/assets/idea-house-choose-your-plan.jpg",
    imageAlt: "IDEA HOUSE choose your plan pricing graphic",
    tags: ["Starter", "Business", "Early Bird"]
  },
  {
    label: "Creative Direction",
    title: "Ideas Into Impact",
    description: "A refined brand introduction system for presenting IDEA HOUSE with clarity and confidence.",
    image: "/assets/idea-house-welcome.jpg",
    imageAlt: "IDEA HOUSE welcome graphic",
    tags: ["Brand Message", "Visual Direction", "Positioning"]
  },
  {
    label: "Visual Branding",
    title: "Content & Brand Studio Identity",
    description: "A minimal studio identity system built around text, graphics, planning, and purposeful growth.",
    image: "/assets/idea-house-logo.png",
    imageAlt: "IDEA HOUSE Content and Brand Studio logo",
    tags: ["Identity", "Studio", "Brand Clarity"]
  }
];

export const growthNotes = [
  "Clear brand foundations",
  "Strategic monthly planning",
  "Polished visual direction",
  "Consistent social presence"
];

export const contactDetails = [
  { label: "Email", value: brand.email, href: `mailto:${brand.email}` },
  { label: "Phone", value: brand.phone, href: `tel:${brand.phone}` },
  { label: "Location", value: brand.location, href: "#contact" }
];

export const visualMetrics = [
  { value: "78%", label: "growth focus" },
  { value: "15/30", label: "posts per month" },
  { value: "3", label: "core disciplines" }
];

export const serviceFlow = [
  { label: "Clarity", icon: Target },
  { label: "Content", icon: FileText },
  { label: "Momentum", icon: LineChart }
] satisfies Array<{ label: string; icon: LucideIcon }>;
