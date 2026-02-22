"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "about", href: "#about" },
  { label: "skills", href: "#skills" },
  { label: "projects", href: "#projects" },
  { label: "contact", href: "#contact" },
];

export function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: "color-mix(in srgb, var(--c-bg) 85%, transparent)",
        borderBottom: "1px solid var(--c-border)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-mono text-sm tracking-tight flex items-center gap-1.5 hover:opacity-80 transition-opacity"
          style={{ color: "var(--c-text)" }}
        >
          <span style={{ color: "var(--c-accent)" }}>›</span>
          <span>caqlayan.dev</span>
        </a>

        {/* Nav + toggle */}
        <div className="flex items-center gap-1">
          <nav className="hidden sm:flex items-center gap-0.5 mr-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-xs px-3 py-1.5 rounded transition-colors"
                style={{ color: "var(--c-muted)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--c-text)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--c-muted)")
                }
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Theme toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="font-mono text-xs px-3 py-1.5 rounded border transition-all"
            style={{
              color: "var(--c-muted)",
              borderColor: "var(--c-border)",
              background: "transparent",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--c-accent)";
              e.currentTarget.style.color = "var(--c-accent)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--c-border)";
              e.currentTarget.style.color = "var(--c-muted)";
            }}
            aria-label="Toggle theme"
          >
            {mounted ? (theme === "dark" ? "[light]" : "[dark]") : "[···]"}
          </button>
        </div>
      </div>
    </header>
  );
}
