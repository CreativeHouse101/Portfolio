import { motion } from "framer-motion";
import Image from "next/image";

import { SectionIntro } from "@/components/shared/section-intro";
import { brand, pillars } from "@/data/portfolio";
import { fadeIn } from "@/lib/animations";
import { withBasePath } from "@/lib/paths";

export function AboutSection() {
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
