import { ReactNode } from "react";
import { Link } from "wouter";

export default function Layout({ children }: { children: ReactNode }) {
  const logoSrc = `${import.meta.env.BASE_URL}cosell-mark.svg`;

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-foreground">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-50 px-6 py-5 md:py-7">
        <div className="max-w-7xl mx-auto flex justify-center">
          <Link href="/" className="inline-flex items-center gap-2.5">
            <img src={logoSrc} alt="" className="h-8 w-8 md:h-9 md:w-9" />
            <span className="text-3xl md:text-[2rem] font-bold tracking-tight leading-none">
              CoSell
            </span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-border mt-10">
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
