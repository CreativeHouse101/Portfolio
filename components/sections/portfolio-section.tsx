import { motion } from "framer-motion";
import Image from "next/image";

import { SectionIntro } from "@/components/shared/section-intro";
import { selectedWork } from "@/data/portfolio";
import { fadeIn } from "@/lib/animations";
import { withBasePath } from "@/lib/paths";

export function PortfolioSection() {
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
