import { motion } from "framer-motion";

import { fadeIn } from "@/lib/animations";

type SectionIntroProps = {
  kicker: string;
  text: string;
  title: string;
};

export function SectionIntro({ kicker, text, title }: SectionIntroProps) {
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
