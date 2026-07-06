import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pyae Zaw | IDEA House Portfolio",
  description:
    "Minimal portfolio and resume website for Pyae Zaw, founder of IDEA House Content and Brand Studio."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
