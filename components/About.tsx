"use client";

import { person } from "@/lib/data";

export function About() {
  return (
    <section
      id="about"
      className="py-24"
      style={{ borderBottom: "1px solid var(--c-border)" }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <p className="font-mono text-sm mb-8" style={{ color: "var(--c-muted)" }}>
          <span style={{ color: "var(--c-accent)" }}>$</span> cat about.md
        </p>

        <div
          className="border p-6 sm:p-8 max-w-2xl"
          style={{ borderColor: "var(--c-border)" }}
        >
          {/* File header mimicking markdown front matter */}
          <div
            className="font-mono text-xs mb-6 pb-4"
            style={{
              color: "var(--c-muted)",
              borderBottom: "1px solid var(--c-border)",
            }}
          >
            <span style={{ color: "var(--c-accent)" }}># </span>
            <span>about.md</span>
          </div>

          <div className="flex flex-col gap-4">
            {person.bio.split("\n\n").map((paragraph, i) => (
              <p
                key={i}
                className="text-base leading-relaxed"
                style={{ color: "var(--c-text)" }}
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div
            className="mt-6 pt-6 font-mono text-xs flex flex-wrap gap-4"
            style={{
              color: "var(--c-muted)",
              borderTop: "1px solid var(--c-border)",
            }}
          >
            <span>
              <span style={{ color: "var(--c-accent)" }}>location:</span> remote
            </span>
            <span>
              <span style={{ color: "var(--c-accent)" }}>availability:</span>{" "}
              open to work
            </span>
            <span>
              <span style={{ color: "var(--c-accent)" }}>languages:</span> TR / EN
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
