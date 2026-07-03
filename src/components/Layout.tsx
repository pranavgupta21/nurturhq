import { ReactNode } from "react";
import { Link } from "wouter";

export default function Layout({ children }: { children: ReactNode }) {
  const logoSrc = `${import.meta.env.BASE_URL}cosell-mark.svg`;

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-foreground">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-50 px-5 py-4 md:px-8 md:py-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 rounded-full border border-black/10 bg-white/85 px-4 py-3 shadow-sm backdrop-blur md:px-5">
          <Link href="/" className="inline-flex items-center gap-2.5">
            <img src={logoSrc} alt="" className="h-8 w-8" />
            <span className="text-2xl font-bold tracking-tight leading-none">
              CoSell
            </span>
          </Link>

          <nav className="hidden items-center gap-7 text-sm font-medium text-muted-foreground md:flex">
            <a href="#approach" className="transition-colors hover:text-foreground">
              Why AI fails
            </a>
            <a href="#workflows" className="transition-colors hover:text-foreground">
              Workflows
            </a>
            <a href="#process" className="transition-colors hover:text-foreground">
              Process
            </a>
          </nav>

          <a
            href="mailto:pranav@trycosell.com?subject=CoSell%20workflow%20demo"
            className="hidden rounded-full bg-zinc-950 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-zinc-800 md:inline-flex"
          >
            Request demo
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-white py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">Terms</Link>
          </div>
          <div>© 2025 CoSell. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
