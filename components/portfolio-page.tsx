"use client";

import { useState } from "react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { HeroSection } from "@/components/sections/hero-section";
import { PlanDescriptionsSection } from "@/components/sections/plan-descriptions-section";
import { PlansSection } from "@/components/sections/plans-section";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { ServicesSection } from "@/components/sections/services-section";
import { useContactForm } from "@/hooks/use-contact-form";
import { useTheme } from "@/hooks/use-theme";

export function PortfolioPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { setTheme, theme } = useTheme();
  const contactForm = useContactForm();

  return (
    <main className="min-h-screen overflow-hidden bg-paper text-ink">
      <SiteHeader menuOpen={menuOpen} setMenuOpen={setMenuOpen} setTheme={setTheme} theme={theme} />

      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PlansSection />
      <PlanDescriptionsSection />
      <PortfolioSection />
      <ContactSection {...contactForm} />
      <SiteFooter />
    </main>
  );
}
