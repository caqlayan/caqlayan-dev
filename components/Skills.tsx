"use client";

import { skills } from "@/lib/data";

export function Skills() {
  return (
    <section
      id="skills"
      className="py-24"
      style={{ borderBottom: "1px solid var(--c-border)" }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <p className="font-mono text-sm mb-8" style={{ color: "var(--c-muted)" }}>
          <span style={{ color: "var(--c-accent)" }}>$</span> ls ./skills
        </p>

        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <SkillBadge key={skill} label={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillBadge({ label }: { label: string }) {
  return (
    <span
      className="font-mono text-sm px-3 py-1.5 border transition-all cursor-default select-none"
      style={{
        borderColor: "var(--c-border)",
        color: "var(--c-muted)",
        background: "var(--c-card)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "var(--c-accent)";
        e.currentTarget.style.color = "var(--c-accent)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--c-border)";
        e.currentTarget.style.color = "var(--c-muted)";
      }}
    >
      {label.toLowerCase()}/
    </span>
  );
}
