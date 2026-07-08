"use client";

import { type FormEvent, useMemo, useState } from "react";

import { brand } from "@/data/portfolio";

export type ContactFormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const emptyContactFormState: ContactFormState = {
  name: "",
  email: "",
  subject: "",
  message: ""
};

export function useContactForm() {
  const [formState, setFormState] = useState<ContactFormState>(emptyContactFormState);
  const [submitted, setSubmitted] = useState(false);

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

  const updateField = (field: keyof ContactFormState, value: string) => {
    setFormState((current) => ({ ...current, [field]: value }));
    setSubmitted(false);
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    window.open(mailtoHref, "_blank", "noreferrer noopener");
  };

  return {
    formState,
    mailtoHref,
    onSubmit,
    submitted,
    updateField
  };
}
