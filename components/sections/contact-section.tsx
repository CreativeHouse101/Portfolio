import { type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";

import { FormField } from "@/components/shared/form-field";
import { SectionIntro } from "@/components/shared/section-intro";
import { brand, contactDetails, visualMetrics } from "@/data/portfolio";
import { type ContactFormState } from "@/hooks/use-contact-form";
import { fadeIn } from "@/lib/animations";

type ContactSectionProps = {
  formState: ContactFormState;
  mailtoHref: string;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  submitted: boolean;
  updateField: (field: keyof ContactFormState, value: string) => void;
};

export function ContactSection({ formState, mailtoHref, onSubmit, submitted, updateField }: ContactSectionProps) {
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
              <FormField label="Name" name="name" onChange={(value) => updateField("name", value)} value={formState.name} />
              <FormField label="Email" name="email" onChange={(value) => updateField("email", value)} type="email" value={formState.email} />
            </div>
            <FormField label="Subject" name="subject" onChange={(value) => updateField("subject", value)} value={formState.subject} />
            <FormField label="Message" name="message" onChange={(value) => updateField("message", value)} textarea value={formState.message} />
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
