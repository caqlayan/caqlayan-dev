"use client";

import { person } from "@/lib/data";

interface ContactLink {
  flag: string;
  label: string;
  display: string;
  href: string;
}

const links: ContactLink[] = [
  {
    flag: "--github",
    label: "GitHub",
    display: "github.com/caqlayan",
    href: person.github,
  },
  {
    flag: "--upwork",
    label: "Upwork",
    display: "upwork.com/freelancers/caqlayan",
    href: person.upwork,
  },
  {
    flag: "--email",
    label: "Email",
    display: person.email,
    href: `mailto:${person.email}`,
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <p className="font-mono text-sm mb-8" style={{ color: "var(--c-muted)" }}>
          <span style={{ color: "var(--c-accent)" }}>$</span>{" "}
          ./contact --help
        </p>

        <div
          className="border max-w-xl"
          style={{ borderColor: "var(--c-border)", background: "var(--c-card)" }}
        >
          {/* Terminal title bar */}
          <div
            className="flex items-center gap-2 px-4 py-2.5"
            style={{
              borderBottom: "1px solid var(--c-border)",
              background: "var(--c-bg)",
            }}
          >
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#ff5f57" }} />
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#febc2e" }} />
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#28c840" }} />
            <span
              className="font-mono text-xs ml-2"
              style={{ color: "var(--c-muted)" }}
            >
              contact.sh
            </span>
          </div>

          {/* Links */}
          <div className="p-5 flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.flag}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="font-mono text-sm flex items-center gap-0 sm:gap-0 group py-1.5 transition-colors"
                style={{ color: "var(--c-muted)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--c-text)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--c-muted)";
                }}
              >
                <span
                  className="w-28 shrink-0"
                  style={{ color: "var(--c-accent)" }}
                >
                  {link.flag}
                </span>
                <span className="group-hover:underline underline-offset-2">
                  {link.display}
                </span>
                <span className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity text-xs">
                  {" "}↗
                </span>
              </a>
            ))}

            {/* Prompt line */}
            <div className="mt-3 pt-3" style={{ borderTop: "1px solid var(--c-border)" }}>
              <span
                className="font-mono text-sm flex items-center gap-1"
                style={{ color: "var(--c-muted)" }}
              >
                <span style={{ color: "var(--c-accent)" }}>$</span>
                <span className="cursor-blink inline-block w-1.5 h-4 align-middle" style={{ background: "var(--c-accent)" }} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
