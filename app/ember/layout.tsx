import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ember — Legal",
  description: "Terms of Service and Privacy Policy for Ember — Quotes & Reflections.",
};

export default function EmberLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-bg text-body">
      {/* Top bar */}
      <div
        className="border-b px-6 py-3 flex items-center gap-4"
        style={{ borderColor: "var(--c-border)", background: "var(--c-card)" }}
      >
        <Link
          href="/"
          className="font-mono text-xs text-muted hover:text-accent transition-colors"
        >
          ← caqlayan.dev
        </Link>
        <span className="text-border-t">/</span>
        <Link
          href="/ember"
          className="font-mono text-xs text-muted hover:text-body transition-colors"
        >
          ember
        </Link>
      </div>

      <main className="max-w-3xl mx-auto px-6 py-16">
        {children}
      </main>

      <footer
        className="border-t px-6 py-6 text-center"
        style={{ borderColor: "var(--c-border)" }}
      >
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} Ember — Quotes &amp; Reflections
        </p>
      </footer>
    </div>
  );
}
