import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { HeroGrowthVisual } from "@/components/visuals/hero-growth-visual";
import { brand, serviceFlow, studioStats } from "@/data/portfolio";
import { fadeIn } from "@/lib/animations";

export function HeroSection() {
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
