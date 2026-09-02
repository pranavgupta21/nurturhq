import type { MouseEvent, ReactNode } from "react";
import { Link } from "wouter";
import { brand, chromeStoreHref } from "@/lib/brand";

export default function Layout({ children }: { children: ReactNode }) {
  const logoSrc = `${import.meta.env.BASE_URL}nurtur-reader-icon.png`;
  const currentYear = new Date().getFullYear();
  const scrollToSection = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    const section = document.getElementById(id);

    if (!section) return;

    event.preventDefault();
    section.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.pushState(null, "", `#${id}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-foreground">
      <header className="absolute top-0 left-0 right-0 z-50 px-5 py-4 md:px-8 md:py-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 border border-black/10 bg-white/85 px-4 py-3 shadow-sm backdrop-blur md:px-5">
          <Link href="/" className="inline-flex items-center gap-2.5">
            <img src={logoSrc} alt="" className="h-8 w-8" />
            <span className="text-2xl font-bold tracking-tight leading-none">
              {brand.name}
            </span>
          </Link>

          <nav className="hidden items-center gap-7 text-sm font-medium text-muted-foreground md:flex">
            <a
              href="#how-it-works"
              onClick={(event) => scrollToSection(event, "how-it-works")}
              className="transition-colors hover:text-foreground"
            >
              How it works
            </a>
            <a
              href="#features"
              onClick={(event) => scrollToSection(event, "features")}
              className="transition-colors hover:text-foreground"
            >
              Features
            </a>
            <a
              href="#privacy"
              onClick={(event) => scrollToSection(event, "privacy")}
              className="transition-colors hover:text-foreground"
            >
              Privacy
            </a>
          </nav>

          <a
            href={chromeStoreHref}
            target="_blank"
            rel="noreferrer"
            className="hidden bg-zinc-950 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-zinc-800 md:inline-flex"
          >
            Add to Chrome
          </a>
        </div>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="border-t border-border bg-white py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div className="flex gap-6">
            <a href="/privacy" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="/terms" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">Terms</a>
          </div>
          <div>© {currentYear} {brand.name}. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
