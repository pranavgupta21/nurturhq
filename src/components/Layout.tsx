import { ReactNode } from "react";
import { Link } from "wouter";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-foreground">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-50 p-6 md:p-10">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="inline-block">
            <span className="text-2xl font-bold tracking-tight">CoSell</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="py-10 border-t border-border mt-20">
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
