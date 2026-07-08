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
  serviceLine: "Text / Graphic / Planning",
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
    label: "Process Education",
    title: "Our Brand-Building Process",
    description:
      "Explains the IDEA HOUSE workflow: discover the business, strategize the message, create connected content, and show up consistently with purpose.",
    image: "/assets/idea-house-process.jpg",
    imageAlt: "IDEA HOUSE process graphic showing discover, strategize, create, and consistently show up",
    tags: ["Discover", "Strategy", "Consistency"]
  },
  {
    label: "Content Planning",
    title: "Random Content, Random Result",
    description:
      "Shows why planning matters: without a content calendar and clear direction, every post stands alone and the brand loses momentum.",
    image: "/assets/idea-house-random-content.jpg",
    imageAlt: "IDEA HOUSE random content random result graphic with calendar visual",
    tags: ["Planning", "Calendar", "Direction"]
  },
  {
    label: "Brand Perspective",
    title: "Consistency Builds Brand",
    description:
      "Frames the difference between one good post and a real brand system: consistent content builds recognition, trust, and long-term results.",
    image: "/assets/idea-house-consistency-result.jpg",
    imageAlt: "IDEA HOUSE consistency result perspective graphic",
    tags: ["Consistency", "Trust", "Brand Growth"]
  },
  {
    label: "Brand Strategy",
    title: "Posting vs Branding",
    description:
      "Clarifies that posting is only an activity, while branding is a strategy built from clear messages, consistent voice, memorable visuals, and planned rhythm.",
    image: "/assets/idea-house-posting-branding.jpg",
    imageAlt: "IDEA HOUSE posting versus branding graphic",
    tags: ["Clear Message", "Voice", "Rhythm"]
  },
  {
    label: "Brand Voice",
    title: "Why Brand Voice Matters",
    description:
      "Explains the value of a defined business voice: the brand sounds consistent, becomes easier to remember, builds trust, and stands out.",
    image: "/assets/idea-house-brand-voice.jpg",
    imageAlt: "IDEA HOUSE brand voice graphic",
    tags: ["Voice", "Memory", "Trust"]
  },
  {
    label: "Studio Services",
    title: "What IDEA HOUSE Does",
    description:
      "Summarizes the studio offer in one clear visual: text for voice and copy, graphics for professional visuals, and planning for strategy and calendars.",
    image: "/assets/idea-house-what-we-do.jpg",
    imageAlt: "IDEA HOUSE what we do graphic for text graphic and planning",
    tags: ["Text", "Graphic", "Planning"]
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
