import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

import { SectionIntro } from "@/components/shared/section-intro";
import { plans } from "@/data/portfolio";
import { fadeIn } from "@/lib/animations";
import { cn } from "@/lib/utils";

type Plan = (typeof plans)[number];

export function PlansSection() {
  return (
    <section id="plans" className="section-shell">
      <SectionIntro kicker="Plans & Pricing" title="Choose Your Plan." text="Built for different stages of brand growth." />

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

function PlanCard({ index, plan }: { index: number; plan: Plan }) {
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
