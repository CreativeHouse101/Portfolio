import { brand, navLinks } from "@/data/portfolio";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-paper py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8">
        <div>
          <p className="text-2xl font-semibold">{brand.name}</p>
          <p className="mt-2 text-muted">{brand.tagline}</p>
          <p className="mt-4 max-w-xl text-sm font-semibold uppercase tracking-normal text-muted">{brand.serviceLine}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {navLinks.map((link) => (
            <a key={link.href} className="rounded-[8px] border border-line bg-surface px-4 py-2 text-sm font-semibold transition hover:border-signal hover:text-signal" href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
