import {
  AtSign,
  BrainCircuit,
  BriefcaseBusiness,
  GraduationCap,
  MapPin,
  Megaphone,
  MonitorPlay,
  PenTool,
  Sparkles
} from "lucide-react";

export const profile = {
  name: "Pyae Zaw",
  brand: "IDEA House",
  studioLabel: "Content & Brand Studio",
  title: "Content Writer / AI Content Creator / Digital Marketer",
  tagline: "Creative content, smart strategy, reliable remote support.",
  location: "Mandalay, Myanmar",
  email: "creativehouse10x@gmail.com",
  phone: "09983993588",
  birthdate: "20 March 2003",
  availability: "Remote employee only",
  dailyAvailability: "12-14 hours daily",
  intro:
    "I help brands turn ideas into clear content systems, social media stories, AI-assisted visuals, videos, and learning materials.",
  about:
    "I am a remote digital professional from Mandalay with Level 4 and Level 5 Computing Diplomas, C1-level English teaching experience, and hands-on work across content writing, social media, digital marketing, AI content creation, scriptwriting, video editing, and video production.",
  brandStory:
    "IDEA House is my own content and brand studio. It has been founded for only 3 months, and during that first season I accepted 3 clients while building a sharper, minimal workflow for content, strategy, and digital execution."
} as const;

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#brand", label: "IDEA House" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" }
] as const;

export const heroMetrics = [
  { value: "3", label: "clients accepted", detail: "over the first 3 months" },
  { value: "3 mo", label: "brand age", detail: "IDEA House, newly founded" },
  { value: "12-14h", label: "daily availability", detail: "remote-work ready" },
  { value: "C1", label: "English level", detail: "teaching and communication" }
] as const;

export const profileCards = [
  { label: "Location", value: "Mandalay, Myanmar", icon: MapPin },
  { label: "Work Preference", value: "Remote only", icon: BriefcaseBusiness },
  { label: "Brand", value: "IDEA House", icon: Sparkles },
  { label: "Education", value: "Level 4 & 5 Computing Diplomas", icon: GraduationCap },
  { label: "Contact", value: "creativehouse10x@gmail.com", icon: AtSign },
  { label: "Focus", value: "Content, marketing, AI, video", icon: BrainCircuit }
] as const;

export const services = [
  {
    title: "Content Writing",
    description: "Captions, scripts, tech review content, educational posts, brand messages, and content plans.",
    icon: PenTool
  },
  {
    title: "AI Content Creation",
    description: "AI-assisted writing, visual concepts, short-form video ideas, research, and production support.",
    icon: BrainCircuit
  },
  {
    title: "Digital Marketing",
    description: "Social media planning, campaign copy, page content, community touchpoints, and brand communication.",
    icon: Megaphone
  },
  {
    title: "Video Production",
    description: "Video scripts, editing workflows, content outlines, AI video concepts, and publishing-ready stories.",
    icon: MonitorPlay
  }
] as const;

export const projects = [
  {
    number: "01",
    title: "IDEA House Content & Brand Studio",
    category: "Content & Brand Studio",
    description:
      "My own content and brand studio, focused on brand clarity, content planning, visual direction, and client-ready creative systems.",
    skills: ["Brand strategy", "Graphic design", "Content planning"],
    image: "/assets/idea-house-logo.png",
    imageAlt: "IDEA House Content and Brand Studio logo"
  },
  {
    number: "02",
    title: "Circuit Media Tech Reviews",
    category: "Tech Review Content / Personal Brand",
    description:
      "A personal tech review content brand for smartphones, community-focused reviews, and clearer buying decisions.",
    skills: ["Tech reviews", "Smartphone content", "Community"],
    image: "/assets/circuit-media-logo.png",
    imageAlt: "Circuit Media smartphone tech review community logo"
  },
  {
    number: "03",
    title: "Speakeasy Institute English Teaching",
    category: "English Teaching",
    description:
      "English teaching experience shaped around clear communication, structured lessons, and practical learner support.",
    skills: ["English teaching", "Lesson content", "Communication"],
    image: "/assets/speakeasy-institute-logo.png",
    imageAlt: "Speakeasy Institute logo"
  },
  {
    number: "04",
    title: "SkillBridge AI Video Marketing",
    category: "AI Video Marketing",
    description:
      "AI-assisted video marketing work covering scripts, concepts, visuals, and short-form content production support.",
    skills: ["AI content", "Video scripts", "Marketing"],
    image: "/assets/skillbridge-ai-logo.png",
    imageAlt: "SkillBridge AI logo"
  },
  {
    number: "05",
    title: "Digitalmarketing.mm Content & Marketing",
    category: "Digital Marketing / Content Writing",
    description:
      "Digital marketing and content-writing work for online brand communication, promotional content, and audience engagement.",
    skills: ["Digital marketing", "Content writing", "Campaign copy"],
    image: "/assets/digitalmarketing-mm-logo.png",
    imageAlt: "Digitalmarketing.mm yellow logo"
  }
] as const;

export const experience = [
  {
    role: "Founder / Creative Lead",
    company: "IDEA House",
    period: "2026 - Present",
    label: "Current",
    summary: "Founded a personal content and brand studio and accepted 3 clients over the first 3 months.",
    points: [
      "Built the studio positioning around content, brand clarity, and AI-supported production.",
      "Created content ideas, scripts, social posts, and brand communication for early clients.",
      "Managed client conversations, timelines, and deliverables as a lean remote operator."
    ]
  },
  {
    role: "Content Writer",
    company: "Digitalmarketing.mm / Personal Channels",
    period: "2024 - Present",
    label: "2+ years",
    summary: "Created social media content, captions, product review ideas, and business marketing messages.",
    points: [
      "Wrote captions, posts, promotional content, and brand messages for digital audiences.",
      "Developed technology and product-review content for personal pages and channels.",
      "Supported online business marketing with consistent content planning."
    ]
  },
  {
    role: "English Teacher",
    company: "Speakeasy Institute",
    period: "March 2025 - April 2026",
    label: "13 months",
    summary: "Delivered clear English lessons and learning materials with a professional communication style.",
    points: [
      "Supported student learning, confidence, and communication skills.",
      "Prepared educational content and lesson materials.",
      "Maintained a reliable, friendly, and structured teaching approach."
    ]
  },
  {
    role: "AI Content Creator",
    company: "SkillBridge AI",
    period: "December 2025 - Present",
    label: "AI workflow",
    summary: "Created AI-powered content for social media, scripts, video concepts, visuals, and digital projects.",
    points: [
      "Used AI tools for content research, writing, visuals, and creative production.",
      "Wrote video scripts and creative concepts for short-form content.",
      "Supported editing and production workflows for digital channels."
    ]
  }
] as const;

export const skillGroups = [
  {
    title: "Content & Marketing",
    items: [
      "Content Writing",
      "Social Media Content",
      "Copywriting",
      "Content Planning",
      "Digital Marketing",
      "Business Marketing",
      "Community Engagement",
      "Tech Review Content",
      "Script Writing",
      "Video Production"
    ]
  },
  {
    title: "AI & Creative Tools",
    items: [
      "ChatGPT",
      "Google Gemini",
      "Kling",
      "Seedance",
      "Veo 3",
      "Canva",
      "CapCut",
      "AI-Assisted Writing",
      "AI Visual Content Creation"
    ]
  },
  {
    title: "Technical & Computing",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "MySQL",
      "Website Fundamentals",
      "Microsoft Office",
      "Google Workspace"
    ]
  },
  {
    title: "Strengths",
    items: [
      "Reliable",
      "Cooperative",
      "Accountable",
      "Quality-focused",
      "Remote-work discipline",
      "Fast learner",
      "Creative thinker",
      "Consistent communicator"
    ]
  }
] as const;

export const toolkitStrip = [
  "Content Strategy",
  "AI Workflow",
  "Social Media",
  "Video Production",
  "Remote Collaboration",
  "Canva",
  "CapCut",
  "Google Workspace"
] as const;

export const socialLinks = [
  { label: "Facebook", href: "#" },
  { label: "TikTok", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Telegram", href: "#" }
] as const;

export const contactMethods = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "Phone", value: profile.phone, href: `tel:${profile.phone}` },
  { label: "Location", value: profile.location, href: "#contact" }
] as const;
