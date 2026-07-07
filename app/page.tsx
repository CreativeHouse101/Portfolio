"use client";

import { type FormEvent, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Check, Mail, MapPin, Menu, Moon, Phone, Send, Sun, X } from "lucide-react";
import {
  brand,
  contactDetails,
  growthNotes,
  navLinks,
  pillars,
  planDescriptions,
  plans,
  selectedWork,
  serviceFlow,
  services,
  studioStats,
  visualMetrics
} from "@/data/portfolio";
import { cn } from "@/lib/utils";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Theme = "light" | "dark";

const emptyForm: FormState = {
  name: "",
  email: "",
  subject: "",
  message: ""
};

const fadeIn = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.55, ease: "easeOut" }
} as const;

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function withBasePath(path: string) {
  if (!path || path.startsWith("http")) {
    return path;
  }

  return `${basePath}${path}`;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formState, setFormState] = useState<FormState>(emptyForm);
  const [submitted, setSubmitted] = useState(false);
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("idea-house-theme");
    const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    setTheme(savedTheme === "dark" || savedTheme === "light" ? savedTheme : preferredTheme);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("idea-house-theme", theme);
  }, [theme]);

  const mailtoHref = useMemo(() => {
    const body = [
      "Hello IDEA HOUSE team,",
      "",
      formState.message || "I would like to discuss a brand/content plan.",
      "",
      `Name: ${formState.name || "-"}`,
      `Email: ${formState.email || "-"}`
    ].join("\n");

    return `mailto:${brand.email}?subject=${encodeURIComponent(formState.subject || "IDEA HOUSE inquiry")}&body=${encodeURIComponent(body)}`;
  }, [formState]);

  const updateField = (field: keyof FormState, value: string) => {
    setFormState((current) => ({ ...current, [field]: value }));
    setSubmitted(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    window.open(mailtoHref, "_blank", "noreferrer noopener");
  };

  return (
    <main className="min-h-screen overflow-hidden bg-paper text-ink">
      <SiteHeader menuOpen={menuOpen} setMenuOpen={setMenuOpen} setTheme={setTheme} theme={theme} />

      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PlansSection />
      <PlanDescriptionsSection />
      <PortfolioSection />
      <ContactSection
        formState={formState}
        mailtoHref={mailtoHref}
        submitted={submitted}
        onSubmit={handleSubmit}
        updateField={updateField}
      />
      <SiteFooter />
    </main>
  );
}

function SiteHeader({
  menuOpen,
  setMenuOpen,
  setTheme,
  theme
}: {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  setTheme: (theme: Theme) => void;
  theme: Theme;
}) {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-line/80 bg-paper/92 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <a className="flex items-center gap-3" href="#home" onClick={() => setMenuOpen(false)}>
          <span className="grid size-10 place-items-center rounded-[8px] border border-line bg-surface p-1.5 shadow-sm">
            <Image src={withBasePath(brand.logo)} alt={`${brand.name} logo`} width={64} height={64} className="h-full w-full object-contain" />
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-semibold uppercase tracking-normal">{brand.name}</span>
            <span className="block text-xs text-muted">{brand.descriptor}</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a key={link.href} className="nav-link" href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeSwitch setTheme={setTheme} theme={theme} />
          <a className="hidden h-10 items-center gap-2 rounded-[8px] border border-signal bg-signal px-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#0d50d6] sm:flex" href="#plans">
            View Plans
            <ArrowRight size={16} />
          </a>
          <button
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
            className="icon-button rounded-[8px] lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            type="button"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <div className={cn("mobile-menu lg:hidden", menuOpen ? "max-h-[420px] border-t border-line" : "max-h-0")}>
        <div className="space-y-2 px-4 py-4">
          <div className="pb-2">
            <ThemeSwitch mobile setTheme={setTheme} theme={theme} />
          </div>
          {navLinks.map((link) => (
            <a key={link.href} className="mobile-link rounded-[8px]" href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <a className="btn-primary mt-4 w-full justify-center" href="#plans" onClick={() => setMenuOpen(false)}>
            Explore Our Plans
            <ArrowRight size={17} />
          </a>
        </div>
      </div>
    </header>
  );
}

function ThemeSwitch({
  mobile = false,
  setTheme,
  theme
}: {
  mobile?: boolean;
  setTheme: (theme: Theme) => void;
  theme: Theme;
}) {
  return (
    <div className={cn("grid grid-cols-2 rounded-[8px] border border-line bg-surface p-1 shadow-sm", mobile ? "w-full" : "hidden sm:grid")}>
      <button
        aria-pressed={theme === "light"}
        className={cn(
          "inline-flex h-8 items-center justify-center gap-1.5 rounded-[6px] px-3 text-xs font-semibold transition",
          theme === "light" ? "bg-paper text-signal" : "text-muted hover:text-signal"
        )}
        onClick={() => setTheme("light")}
        title="Light mode"
        type="button"
      >
        <Sun size={15} />
        <span>Light</span>
      </button>
      <button
        aria-pressed={theme === "dark"}
        className={cn(
          "inline-flex h-8 items-center justify-center gap-1.5 rounded-[6px] px-3 text-xs font-semibold transition",
          theme === "dark" ? "bg-paper text-signal" : "text-muted hover:text-signal"
        )}
        onClick={() => setTheme("dark")}
        title="Dark mode"
        type="button"
      >
        <Moon size={15} />
        <span>Dark</span>
      </button>
    </div>
  );
}

function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden border-b border-line bg-paper pt-20">
      <HeroGrowthVisual />
      <div className="pointer-events-none absolute bottom-12 right-10 grid grid-cols-6 gap-2 opacity-45" aria-hidden="true">
        {Array.from({ length: 36 }).map((_, index) => (
          <span key={index} className="size-1 rounded-full bg-signal/55" />
        ))}
      </div>

      <div className="section-shell relative z-10 grid min-h-[78vh] items-center py-20 lg:py-24">
        <motion.div {...fadeIn} className="max-w-4xl">
          <div className="inline-flex rounded-full border border-signal/25 bg-surface/72 px-4 py-2 text-xs font-semibold uppercase tracking-normal text-signal shadow-sm backdrop-blur">
            IDEA HOUSE - CONTENT & BRAND STUDIO
          </div>

          <h1 className="mt-7 max-w-3xl font-serif text-[clamp(4rem,10vw,9rem)] font-normal leading-[0.9] tracking-normal text-ink">
            Ideas Into Impact.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted sm:text-xl sm:leading-9">
            We build clear brand foundations, strategic content, and polished visual direction for businesses ready to grow with purpose.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a className="btn-primary justify-center" href="#plans">
              Explore Our Plans
              <ArrowRight size={18} />
            </a>
            <a className="btn-secondary justify-center" href="#portfolio">
              View Our Work
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-3 text-sm font-semibold uppercase tracking-normal text-ink/72">
            <span>{brand.serviceLine}</span>
          </div>

          <div className="mt-12 grid max-w-3xl gap-3 sm:grid-cols-3">
            {studioStats.map((stat) => (
              <div key={stat.label} className="rounded-[8px] border border-line bg-surface/84 p-4 shadow-sm backdrop-blur">
                <p className="text-3xl font-semibold text-signal">{stat.value}</p>
                <p className="mt-3 text-sm font-semibold uppercase tracking-normal">{stat.label}</p>
                <p className="mt-2 text-sm leading-6 text-muted">{stat.detail}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          {...fadeIn}
          transition={{ ...fadeIn.transition, delay: 0.12 }}
          className="mt-14 grid gap-3 sm:grid-cols-3 lg:absolute lg:bottom-10 lg:right-8 lg:mt-0 lg:w-[420px]"
        >
          {serviceFlow.map((item) => (
            <div key={item.label} className="rounded-[8px] border border-line bg-surface/88 p-4 shadow-sm backdrop-blur">
              <item.icon className="text-signal" size={20} />
              <p className="mt-4 text-sm font-semibold uppercase tracking-normal">{item.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function HeroGrowthVisual() {
  return (
    <div className="pointer-events-none absolute right-0 top-24 hidden h-[70%] w-[54%] lg:block" aria-hidden="true">
      <svg className="h-full w-full overflow-visible" viewBox="0 0 720 520" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M44 408C138 400 184 424 266 362C344 303 390 252 476 234C552 218 612 174 680 92" stroke="rgb(var(--color-line))" strokeWidth="2" />
        <path d="M46 422C142 414 188 438 270 376C348 317 394 266 480 248C556 232 616 188 684 106" stroke="rgb(var(--color-signal))" strokeWidth="5" strokeLinecap="round" />
        {[62, 154, 250, 342, 438, 536, 640].map((cx, index) => (
          <circle key={cx} cx={cx} cy={[420, 400, 372, 312, 254, 214, 154][index]} r={8 + index * 1.2} fill="rgb(var(--color-signal))" />
        ))}
        <rect x="430" y="62" width="162" height="108" rx="8" fill="rgb(var(--color-surface) / 0.86)" stroke="rgb(var(--color-line))" />
        <path d="M458 130L486 111L515 121L552 84" stroke="rgb(var(--color-signal))" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="486" y="298" width="184" height="118" rx="8" fill="rgb(var(--color-surface) / 0.86)" stroke="rgb(var(--color-line))" />
        {[0, 1, 2, 3, 4].map((bar) => (
          <rect key={bar} x={514 + bar * 26} y={366 - bar * 12} width="14" height={26 + bar * 12} rx="3" fill="rgb(var(--color-signal) / 0.22)" />
        ))}
        <circle cx="360" cy="166" r="54" stroke="rgb(var(--color-line))" strokeWidth="14" />
        <path d="M360 112A54 54 0 1 1 313 193" stroke="rgb(var(--color-signal))" strokeWidth="14" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function AboutSection() {
  return (
    <section id="about" className="section-shell">
      <SectionIntro
        kicker="About IDEA HOUSE"
        title="A Clearer Way to Build Your Brand."
        text="IDEA HOUSE is a Content & Brand Studio built for businesses that want more than regular posting. We bring together brand clarity, content planning, visual direction, and strategic communication to turn good ideas into meaningful impact."
      />

      <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <motion.div {...fadeIn} className="space-y-5">
          <div className="rounded-[8px] border border-line bg-surface p-6 shadow-sm">
            <Image src={withBasePath(brand.logo)} alt={`${brand.name} logo`} width={1000} height={1000} className="h-auto w-full object-contain" />
          </div>
          <div className="rounded-[8px] border border-signal/20 bg-surface p-5 shadow-sm">
            <p className="section-kicker">Studio Line</p>
            <p className="mt-3 text-2xl font-semibold">{brand.serviceLine}</p>
          </div>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-3">
          {pillars.map((pillar, index) => (
            <motion.article
              key={pillar.title}
              {...fadeIn}
              transition={{ ...fadeIn.transition, delay: index * 0.06 }}
              className="rounded-[8px] border border-line bg-surface p-5 shadow-sm"
            >
              <pillar.icon className="text-signal" size={24} />
              <h3 className="mt-8 text-2xl font-semibold tracking-normal">{pillar.title}</h3>
              <p className="mt-4 leading-7 text-muted">{pillar.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="border-y border-line bg-surface">
      <div className="section-shell">
        <SectionIntro
          kicker="Services"
          title="Built for Brands Ready to Move Forward."
          text="Strategic services for building a clearer identity, a stronger content system, and a more consistent brand presence."
        />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              {...fadeIn}
              transition={{ ...fadeIn.transition, delay: index * 0.04 }}
              className="group rounded-[8px] border border-line bg-paper p-5 shadow-sm transition hover:-translate-y-1 hover:border-signal hover:bg-surface"
            >
              <div className="grid size-12 place-items-center rounded-[8px] border border-signal/20 bg-surface text-signal">
                <service.icon size={23} />
              </div>
              <h3 className="mt-8 text-2xl font-semibold leading-tight">{service.title}</h3>
              <p className="mt-4 leading-7 text-muted">{service.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PlansSection() {
  return (
    <section id="plans" className="section-shell">
      <SectionIntro
        kicker="Plans & Pricing"
        title="Choose Your Plan."
        text="Built for different stages of brand growth."
      />

      <div className="grid gap-5 lg:grid-cols-2 lg:items-stretch">
        {plans.map((plan, index) => (
          <PlanCard key={plan.name} plan={plan} index={index} />
        ))}
      </div>

      <motion.p {...fadeIn} className="mt-6 text-center text-sm font-semibold uppercase tracking-normal text-signal">
        Early Bird pricing is available for a limited time.
      </motion.p>
    </section>
  );
}

function PlanCard({ index, plan }: { index: number; plan: (typeof plans)[number] }) {
  return (
    <motion.article
      {...fadeIn}
      transition={{ ...fadeIn.transition, delay: index * 0.08 }}
      className={cn(
        "relative flex flex-col rounded-[8px] border bg-surface p-5 shadow-sm sm:p-7",
        plan.featured ? "border-signal shadow-[0_24px_80px_rgba(20,99,255,0.16)]" : "border-line"
      )}
    >
      {plan.badge ? (
        <span className="absolute right-5 top-5 rounded-full bg-signal px-3 py-1 text-xs font-semibold uppercase tracking-normal text-white">
          {plan.badge}
        </span>
      ) : null}

      <p className="text-sm font-semibold uppercase tracking-normal text-signal">{plan.number}</p>
      <h3 className="mt-5 font-serif text-[clamp(3rem,7vw,5.6rem)] font-normal leading-none">{plan.name}</h3>
      <p className="mt-5 text-2xl font-semibold">{plan.label}</p>
      <p className="mt-3 leading-7 text-muted">{plan.description}</p>

      <ul className="mt-8 grid gap-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 border-b border-line pb-3 text-base">
            <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full border border-signal/30 text-signal">
              <Check size={15} />
            </span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-8">
        <p className="text-lg text-muted line-through">{plan.originalPrice}</p>
        <p className="mt-2 text-[clamp(2.2rem,6vw,4.4rem)] font-semibold leading-none text-signal">{plan.earlyBirdPrice}</p>
        <a className={cn("mt-6 w-full justify-center", plan.featured ? "btn-primary" : "btn-secondary")} href="#contact">
          {plan.cta}
          <ArrowRight size={18} />
        </a>
      </div>
    </motion.article>
  );
}

function PlanDescriptionsSection() {
  return (
    <section className="border-y border-line bg-surface">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <motion.div {...fadeIn}>
            <p className="section-kicker">Plan Direction</p>
            <h2 className="mt-4 max-w-xl font-serif text-[clamp(3rem,7vw,6.5rem)] font-normal leading-[0.92]">
              Consistency creates momentum.
            </h2>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-2">
            {planDescriptions.map((item, index) => (
              <motion.article
                key={item.title}
                {...fadeIn}
                transition={{ ...fadeIn.transition, delay: index * 0.08 }}
                className="rounded-[8px] border border-line bg-paper p-5 shadow-sm"
              >
                <p className="text-sm font-semibold uppercase tracking-normal text-signal">{item.title}</p>
                <p className="mt-5 text-lg leading-8 text-muted">{item.text}</p>
              </motion.article>
            ))}
          </div>
        </div>

        <motion.div {...fadeIn} className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {growthNotes.map((note) => (
            <div key={note} className="flex items-center gap-3 rounded-[8px] border border-line bg-paper p-4">
              <Check className="text-signal" size={18} />
              <span className="text-sm font-semibold">{note}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function PortfolioSection() {
  return (
    <section id="portfolio" className="section-shell">
      <SectionIntro
        kicker="Portfolio"
        title="Selected Work by IDEA HOUSE."
        text="Brand strategy, logo direction, content plan design, social media graphics, brand voice systems, and content calendar examples."
      />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {selectedWork.map((work, index) => (
          <motion.article
            key={work.title}
            {...fadeIn}
            transition={{ ...fadeIn.transition, delay: index * 0.04 }}
            className="rounded-[8px] border border-line bg-surface p-4 shadow-sm transition hover:-translate-y-1 hover:border-signal"
          >
            <div className="relative aspect-square overflow-hidden rounded-[8px] border border-line bg-paper p-4">
              {work.image ? (
                <Image
                  src={withBasePath(work.image)}
                  alt={work.imageAlt ?? work.title}
                  width={1200}
                  height={1200}
                  className="h-full w-full object-contain transition duration-500 hover:scale-[1.025]"
                />
              ) : null}
            </div>
            <div className="pt-5">
              <p className="text-sm font-semibold uppercase tracking-normal text-signal">{work.label}</p>
              <h3 className="mt-3 text-2xl font-semibold leading-tight">{work.title}</h3>
              <p className="mt-4 leading-7 text-muted">{work.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {work.tags.map((tag) => (
                  <span key={tag} className="skill-tag rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function ContactSection({
  formState,
  mailtoHref,
  onSubmit,
  submitted,
  updateField
}: {
  formState: FormState;
  mailtoHref: string;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  submitted: boolean;
  updateField: (field: keyof FormState, value: string) => void;
}) {
  return (
    <section id="contact" className="border-t border-line bg-surface">
      <div className="section-shell">
        <SectionIntro
          kicker="Contact"
          title="Let's Turn Your Ideas Into Impact."
          text="Ready to build a stronger, clearer, more consistent brand presence? Choose your plan or reach out to start your next chapter."
        />

        <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr]">
          <motion.div {...fadeIn} className="space-y-5">
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a className="btn-primary justify-center" href={`mailto:${brand.email}?subject=${encodeURIComponent("Start With Starter")}`}>
                Start With Starter
                <Mail size={18} />
              </a>
              <a className="btn-secondary justify-center" href={`mailto:${brand.email}?subject=${encodeURIComponent("Build With Business")}`}>
                Build With Business
                <Mail size={18} />
              </a>
            </div>

            <div className="grid gap-3">
              {contactDetails.map((detail) => (
                <ContactDetail key={detail.label} detail={detail} />
              ))}
            </div>

            <div className="rounded-[8px] border border-line bg-paper p-5">
              <p className="section-kicker">Studio Focus</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {visualMetrics.map((metric) => (
                  <div key={metric.label} className="rounded-[8px] border border-line bg-surface p-4">
                    <p className="text-2xl font-semibold text-signal">{metric.value}</p>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-normal text-muted">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.form {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.1 }} onSubmit={onSubmit} className="contact-form rounded-[8px] shadow-sm">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" name="name" onChange={(value) => updateField("name", value)} value={formState.name} />
              <Field label="Email" name="email" onChange={(value) => updateField("email", value)} type="email" value={formState.email} />
            </div>
            <Field label="Subject" name="subject" onChange={(value) => updateField("subject", value)} value={formState.subject} />
            <Field label="Message" name="message" onChange={(value) => updateField("message", value)} textarea value={formState.message} />
            <button className="btn-primary w-full justify-center sm:w-auto" type="submit">
              Send Message
              <Send size={18} />
            </button>
            {submitted ? <p className="text-sm font-semibold text-signal">Your email app is opening with a prepared message.</p> : null}
            <a className="sr-only" href={mailtoHref}>
              Open prepared email
            </a>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function ContactDetail({ detail }: { detail: (typeof contactDetails)[number] }) {
  const Icon = detail.label === "Email" ? Mail : detail.label === "Phone" ? Phone : MapPin;

  return (
    <a className="group flex items-center justify-between gap-4 rounded-[8px] border border-line bg-surface p-5 shadow-sm transition hover:border-signal" href={detail.href}>
      <span>
        <span className="block text-sm font-semibold uppercase tracking-normal text-muted">{detail.label}</span>
        <span className="mt-2 block text-lg font-semibold">{detail.value}</span>
      </span>
      <Icon className="text-signal transition group-hover:scale-110" size={21} />
    </a>
  );
}

function SectionIntro({ kicker, text, title }: { kicker: string; text: string; title: string }) {
  return (
    <motion.div {...fadeIn} className="mb-10 grid gap-5 lg:mb-14 lg:grid-cols-[0.72fr_1fr] lg:items-end">
      <div>
        <p className="section-kicker">{kicker}</p>
        <h2 className="mt-4 max-w-4xl font-serif text-[clamp(2.8rem,6vw,6.5rem)] font-normal leading-[0.94]">{title}</h2>
      </div>
      <p className="max-w-2xl text-lg leading-8 text-muted">{text}</p>
    </motion.div>
  );
}

function Field({
  label,
  name,
  onChange,
  textarea = false,
  type = "text",
  value
}: {
  label: string;
  name: string;
  onChange: (value: string) => void;
  textarea?: boolean;
  type?: string;
  value: string;
}) {
  const id = `field-${name}`;
  const controlClass =
    "mt-2 w-full rounded-[8px] border border-line bg-paper px-4 py-3 text-base outline-none transition placeholder:text-muted/70 focus:border-signal focus:ring-2 focus:ring-signal/20";

  return (
    <label className="block" htmlFor={id}>
      <span className="text-sm font-semibold uppercase tracking-normal text-muted">{label}</span>
      {textarea ? (
        <textarea className={cn(controlClass, "min-h-40 resize-y")} id={id} name={name} onChange={(event) => onChange(event.target.value)} value={value} />
      ) : (
        <input className={controlClass} id={id} name={name} onChange={(event) => onChange(event.target.value)} type={type} value={value} />
      )}
    </label>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-line bg-paper py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8">
        <div>
          <p className="text-2xl font-semibold">{brand.name}</p>
          <p className="mt-2 text-muted">{brand.tagline}</p>
          <p className="mt-4 max-w-xl text-sm font-semibold uppercase tracking-normal text-muted">{brand.serviceLine}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {navLinks.map((link) => (
            <a key={link.href} className="rounded-[8px] border border-line bg-surface px-4 py-2 text-sm font-semibold transition hover:border-signal hover:text-signal" href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
