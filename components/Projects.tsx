"use client";

import { projects, Project } from "@/lib/data";

export function Projects() {
  return (
    <section
      id="projects"
      className="py-24"
      style={{ borderBottom: "1px solid var(--c-border)" }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <p className="font-mono text-sm mb-8" style={{ color: "var(--c-muted)" }}>
          <span style={{ color: "var(--c-accent)" }}>$</span> ls ./projects
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const isShipped = project.status === "shipped";

  return (
    <div
      className="border p-5 flex flex-col gap-4 transition-all group"
      style={{
        borderColor: "var(--c-border)",
        background: "var(--c-card)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = isShipped
          ? "var(--c-accent)"
          : "var(--c-amber)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor =
          "var(--c-border)";
      }}
    >
      {/* Status + name */}
      <div className="flex items-start justify-between gap-3">
        <h3
          className="font-mono font-semibold text-base leading-snug"
          style={{ color: "var(--c-text)" }}
        >
          {project.name}
        </h3>
        <StatusBadge status={project.status} />
      </div>

      {/* Description */}
      <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--c-muted)" }}>
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mt-auto">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-xs px-2 py-0.5"
            style={{
              color: "var(--c-muted)",
              background: "var(--c-bg)",
              border: "1px solid var(--c-border)",
            }}
          >
            {tag.toLowerCase()}
          </span>
        ))}
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: Project["status"] }) {
  const isShipped = status === "shipped";
  return (
    <span
      className="font-mono text-xs px-2 py-0.5 border shrink-0"
      style={
        isShipped
          ? {
              color: "var(--c-accent)",
              borderColor: "var(--c-accent)",
              background: "var(--c-accent-2)",
            }
          : {
              color: "var(--c-amber)",
              borderColor: "var(--c-amber)",
              background: "transparent",
            }
      }
    >
      {isShipped ? "shipped" : "building"}
    </span>
  );
}
