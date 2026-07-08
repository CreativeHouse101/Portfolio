import Image from "next/image";
import { ArrowRight, Menu, X } from "lucide-react";

import { ThemeSwitch } from "@/components/shared/theme-switch";
import { brand, navLinks } from "@/data/portfolio";
import { type Theme } from "@/hooks/use-theme";
import { withBasePath } from "@/lib/paths";
import { cn } from "@/lib/utils";

type SiteHeaderProps = {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  setTheme: (theme: Theme) => void;
  theme: Theme;
};

export function SiteHeader({ menuOpen, setMenuOpen, setTheme, theme }: SiteHeaderProps) {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-line/80 bg-paper/92 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <a className="flex items-center gap-3" href="#home" onClick={() => setMenuOpen(false)}>
          <span className="grid size-10 place-items-center rounded-[8px] border border-line bg-surface p-1.5 shadow-sm">
            <Image src={withBasePath(brand.logo)} alt={`${brand.name} logo`} width={64} height={64} className="h-full w-full object-contain" />
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-semibold uppercase tracking-normal">{brand.name}</span>
            <span className="block text-xs text-muted">{brand.descriptor}</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a key={link.href} className="nav-link" href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeSwitch setTheme={setTheme} theme={theme} />
          <a className="hidden h-10 items-center gap-2 rounded-[8px] border border-signal bg-signal px-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#0d50d6] sm:flex" href="#plans">
            View Plans
            <ArrowRight size={16} />
          </a>
          <button
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
            className="icon-button rounded-[8px] lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            type="button"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <div className={cn("mobile-menu lg:hidden", menuOpen ? "max-h-[420px] border-t border-line" : "max-h-0")}>
        <div className="space-y-2 px-4 py-4">
          <div className="pb-2">
            <ThemeSwitch mobile setTheme={setTheme} theme={theme} />
          </div>
          {navLinks.map((link) => (
            <a key={link.href} className="mobile-link rounded-[8px]" href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <a className="btn-primary mt-4 w-full justify-center" href="#plans" onClick={() => setMenuOpen(false)}>
            Explore Our Plans
            <ArrowRight size={17} />
          </a>
        </div>
      </div>
    </header>
  );
}
