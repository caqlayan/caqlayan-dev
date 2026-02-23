"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { projects, Project } from "@/lib/data";

type Filter = "all" | "shipped" | "building" | string;

function projectMatchesFilter(project: Project, filter: Filter): boolean {
  if (filter === "all") return true;
  if (filter === "shipped") return project.status === "shipped";
  if (filter === "building") return project.status === "in-progress";
  return project.tags.some((tag) => tag.toLowerCase() === filter.toLowerCase());
}

export function Projects() {
  const [filter, setFilter] = useState<Filter>("all");
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const isTagFilter =
    filter !== "all" && filter !== "shipped" && filter !== "building";
  const featured = projects[0];
  const rest = projects.slice(1);
  const featuredVisible = projectMatchesFilter(featured, filter);
  const visibleRest = rest.filter((p) => projectMatchesFilter(p, filter));

  function handleSetFilter(f: Filter) {
    setFilter(f);
    setExpandedCard(null);
  }

  function handleToggleExpand(name: string) {
    setExpandedCard((prev) => (prev === name ? null : name));
  }

  return (
    <section
      id="projects"
      className="py-24"
      style={{ borderBottom: "1px solid var(--c-border)" }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <FilterBar
          filter={filter}
          setFilter={handleSetFilter}
          isTagFilter={isTagFilter}
        />

        <div className="flex flex-col gap-4">
          <AnimatePresence>
            {featuredVisible && (
              <FeaturedCard
                key="featured"
                project={featured}
                isExpanded={expandedCard === featured.name}
                onToggleExpand={() => handleToggleExpand(featured.name)}
                onTagClick={(tag) => handleSetFilter(tag.toLowerCase())}
                activeFilter={filter}
              />
            )}
          </AnimatePresence>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <AnimatePresence>
              {visibleRest.map((project, index) => (
                <ProjectCard
                  key={project.name}
                  project={project}
                  index={index}
                  isExpanded={expandedCard === project.name}
                  onToggleExpand={() => handleToggleExpand(project.name)}
                  onTagClick={(tag) => handleSetFilter(tag.toLowerCase())}
                  activeFilter={filter}
                />
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function FilterBar({
  filter,
  setFilter,
  isTagFilter,
}: {
  filter: Filter;
  setFilter: (f: Filter) => void;
  isTagFilter: boolean;
}) {
  return (
    <div className="mb-8 flex flex-wrap items-center gap-2">
      <span className="font-mono text-sm" style={{ color: "var(--c-muted)" }}>
        <span style={{ color: "var(--c-accent)" }}>$</span> ls ./projects
      </span>
      {(["all", "shipped", "building"] as const).map((key) => (
        <button
          key={key}
          onClick={() => setFilter(key)}
          className="font-mono text-xs px-2 py-0.5 border cursor-pointer transition-colors"
          style={
            filter === key
              ? {
                  color: "var(--c-accent)",
                  borderColor: "var(--c-accent)",
                  background: "transparent",
                }
              : {
                  color: "var(--c-muted)",
                  borderColor: "var(--c-border)",
                  background: "transparent",
                }
          }
        >
          --{key}
        </button>
      ))}
      {isTagFilter && (
        <span
          className="font-mono text-xs px-2 py-0.5 border inline-flex items-center gap-1"
          style={{
            color: "var(--c-accent)",
            borderColor: "var(--c-accent)",
            background: "transparent",
          }}
        >
          --tag={filter}
          <button
            onClick={() => setFilter("all")}
            className="cursor-pointer leading-none ml-0.5"
            style={{
              color: "var(--c-muted)",
              background: "none",
              border: "none",
              padding: 0,
            }}
          >
            ✕
          </button>
        </span>
      )}
    </div>
  );
}

function FeaturedCard({
  project,
  isExpanded,
  onToggleExpand,
  onTagClick,
  activeFilter,
}: {
  project: Project;
  isExpanded: boolean;
  onToggleExpand: () => void;
  onTagClick: (tag: string) => void;
  activeFilter: Filter;
}) {
  const [count, setCount] = useState(0);
  const statRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(statRef, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const target = 110000;
    const duration = 1800;
    const steps = 80;
    const intervalMs = duration / steps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = 1 - Math.pow(1 - step / steps, 3);
      setCount(Math.floor(progress * target));
      if (step >= steps) {
        setCount(target);
        clearInterval(timer);
      }
    }, intervalMs);
    return () => clearInterval(timer);
  }, [isInView]);

  const slug = project.name.toLowerCase().replace(/\s+/g, "-");

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.4 }}
      className="border p-5 transition-colors"
      style={{ borderColor: "var(--c-border)", background: "var(--c-card)" }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor =
          "var(--c-accent)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor =
          "var(--c-border)";
      }}
    >
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left: content */}
        <div className="flex-1 flex flex-col gap-4">
          <div className="flex items-start justify-between gap-3">
            <h3
              className="font-mono font-semibold text-base leading-snug"
              style={{ color: "var(--c-text)" }}
            >
              {project.name}
            </h3>
            <StatusBadge status={project.status} />
          </div>

          <p className="text-sm leading-relaxed" style={{ color: "var(--c-muted)" }}>
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => {
              const isActive = activeFilter === tag.toLowerCase();
              return (
                <span
                  key={tag}
                  className="font-mono text-xs px-2 py-0.5 border cursor-pointer transition-colors"
                  onClick={() => onTagClick(tag)}
                  style={
                    isActive
                      ? {
                          color: "var(--c-accent)",
                          borderColor: "var(--c-accent)",
                          background: "var(--c-accent-2)",
                        }
                      : {
                          color: "var(--c-muted)",
                          background: "var(--c-bg)",
                          border: "1px solid var(--c-border)",
                        }
                  }
                  onMouseEnter={(e) => {
                    if (!isActive)
                      (e.currentTarget as HTMLSpanElement).style.color =
                        "var(--c-text)";
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive)
                      (e.currentTarget as HTMLSpanElement).style.color =
                        "var(--c-muted)";
                  }}
                >
                  {tag.toLowerCase()}
                </span>
              );
            })}
          </div>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={onToggleExpand}
              className="font-mono text-xs cursor-pointer transition-colors"
              style={{
                color: "var(--c-muted)",
                background: "none",
                border: "none",
                padding: 0,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.color =
                  "var(--c-accent)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.color =
                  "var(--c-muted)";
              }}
            >
              $ cat {slug}/README.md {isExpanded ? "▲" : "▼"}
            </button>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs transition-colors"
                style={{ color: "var(--c-muted)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "var(--c-accent)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "var(--c-muted)";
                }}
              >
                $ open ./{slug} ↗
              </a>
            )}
          </div>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                key="readme"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                style={{ overflow: "hidden" }}
              >
                <p
                  className="font-mono text-xs mb-1"
                  style={{ color: "var(--c-accent)" }}
                >
                  $ cat ./{slug}/README.md
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--c-muted)" }}
                >
                  {project.longDescription}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right: stat callout */}
        <div className="flex items-center justify-center md:justify-end shrink-0">
          <div
            ref={statRef}
            className="border p-6 text-center min-w-[140px]"
            style={{
              borderColor: "var(--c-accent)",
              background: "var(--c-accent-2)",
            }}
          >
            <p
              className="font-mono font-bold"
              style={{
                fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
                color: "var(--c-accent)",
                lineHeight: 1.1,
              }}
            >
              {count.toLocaleString()}+
            </p>
            <p
              className="font-mono text-xs mt-1"
              style={{ color: "var(--c-accent)" }}
            >
              downloads
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectCard({
  project,
  index,
  isExpanded,
  onToggleExpand,
  onTagClick,
  activeFilter,
}: {
  project: Project;
  index: number;
  isExpanded: boolean;
  onToggleExpand: () => void;
  onTagClick: (tag: string) => void;
  activeFilter: Filter;
}) {
  const isShipped = project.status === "shipped";
  const slug = project.name.toLowerCase().replace(/\s+/g, "-");

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      viewport={{ once: true }}
      className="border p-5 flex flex-col gap-4 transition-colors"
      style={{ borderColor: "var(--c-border)", background: "var(--c-card)" }}
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
      <div className="flex items-start justify-between gap-3">
        <h3
          className="font-mono font-semibold text-base leading-snug"
          style={{ color: "var(--c-text)" }}
        >
          {project.name}
        </h3>
        <StatusBadge status={project.status} />
      </div>

      <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--c-muted)" }}>
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mt-auto">
        {project.tags.map((tag) => {
          const isActive = activeFilter === tag.toLowerCase();
          return (
            <span
              key={tag}
              className="font-mono text-xs px-2 py-0.5 border cursor-pointer transition-colors"
              onClick={() => onTagClick(tag)}
              style={
                isActive
                  ? {
                      color: "var(--c-accent)",
                      borderColor: "var(--c-accent)",
                      background: "var(--c-accent-2)",
                    }
                  : {
                      color: "var(--c-muted)",
                      background: "var(--c-bg)",
                      border: "1px solid var(--c-border)",
                    }
              }
              onMouseEnter={(e) => {
                if (!isActive)
                  (e.currentTarget as HTMLSpanElement).style.color =
                    "var(--c-text)";
              }}
              onMouseLeave={(e) => {
                if (!isActive)
                  (e.currentTarget as HTMLSpanElement).style.color =
                    "var(--c-muted)";
              }}
            >
              {tag.toLowerCase()}
            </span>
          );
        })}
      </div>

      <div className="flex flex-wrap gap-4">
        <button
          onClick={onToggleExpand}
          className="font-mono text-xs cursor-pointer transition-colors"
          style={{
            color: "var(--c-muted)",
            background: "none",
            border: "none",
            padding: 0,
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.color = isShipped
              ? "var(--c-accent)"
              : "var(--c-amber)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.color =
              "var(--c-muted)";
          }}
        >
          $ cat {slug}/README.md {isExpanded ? "▲" : "▼"}
        </button>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs transition-colors"
            style={{ color: "var(--c-muted)" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color =
                "var(--c-accent)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color =
                "var(--c-muted)";
            }}
          >
            $ open ./{slug} ↗
          </a>
        )}
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            key="readme"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{ overflow: "hidden" }}
          >
            <p
              className="font-mono text-xs mb-1"
              style={{
                color: isShipped ? "var(--c-accent)" : "var(--c-amber)",
              }}
            >
              $ cat ./{slug}/README.md
            </p>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--c-muted)" }}
            >
              {project.longDescription}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
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
      {isShipped ? (
        "shipped"
      ) : (
        <>
          <span className="cursor-blink" style={{ color: "var(--c-amber)" }}>
            ▋{" "}
          </span>
          building
        </>
      )}
    </span>
  );
}
