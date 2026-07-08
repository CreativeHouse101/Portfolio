import { motion } from "framer-motion";
import { Check } from "lucide-react";

import { growthNotes, planDescriptions } from "@/data/portfolio";
import { fadeIn } from "@/lib/animations";

export function PlanDescriptionsSection() {
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
