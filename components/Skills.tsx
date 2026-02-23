"use client";

import { skillGroups } from "@/lib/data";

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

        <div className="flex flex-col gap-6">
          {skillGroups.map((group) => (
            <div key={group.category} className="flex flex-col gap-2 sm:flex-row sm:items-start sm:gap-6">
              <span
                className="font-mono text-xs w-28 shrink-0 pt-1.5"
                style={{ color: "var(--c-muted)" }}
              >
                {group.category}/
              </span>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <SkillBadge key={skill} label={skill} />
                ))}
              </div>
            </div>
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
        color: "var(--c-text)",
        background: "var(--c-card)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "var(--c-accent)";
        e.currentTarget.style.color = "var(--c-accent)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--c-border)";
        e.currentTarget.style.color = "var(--c-text)";
      }}
    >
      {label.toLowerCase()}
    </span>
  );
}
