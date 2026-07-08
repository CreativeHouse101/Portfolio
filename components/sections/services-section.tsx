import { motion } from "framer-motion";

import { SectionIntro } from "@/components/shared/section-intro";
import { services } from "@/data/portfolio";
import { fadeIn } from "@/lib/animations";

export function ServicesSection() {
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
