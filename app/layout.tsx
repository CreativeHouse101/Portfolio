import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "IDEA HOUSE | Content & Brand Studio",
  description:
    "IDEA HOUSE helps businesses grow through brand clarity, strategic content, visual design, and monthly content planning."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
