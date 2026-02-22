"use client";

import { useEffect, useState } from "react";
import { person } from "@/lib/data";

export function Hero() {
  const [displayed, setDisplayed] = useState("");
  const [typingDone, setTypingDone] = useState(false);

  useEffect(() => {
    const text = person.tagline;
    let i = 0;
    const delay = setTimeout(() => {
      const interval = setInterval(() => {
        if (i < text.length) {
          setDisplayed(text.slice(0, i + 1));
          i++;
        } else {
          setTypingDone(true);
          clearInterval(interval);
        }
      }, 35);
      return () => clearInterval(interval);
    }, 800);
    return () => clearTimeout(delay);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center pt-14"
      style={{ borderBottom: "1px solid var(--c-border)" }}
    >
      <div className="max-w-5xl mx-auto px-6 py-24">
        {/* whoami block */}
        <div className="mb-10 fade-up" style={{ animationDelay: "0ms" }}>
          <p className="font-mono text-sm mb-4" style={{ color: "var(--c-muted)" }}>
            <span style={{ color: "var(--c-accent)" }}>$</span> whoami
          </p>
          <h1
            className="font-mono font-bold leading-tight tracking-tight"
            style={{
              fontSize: "clamp(2.2rem, 6vw, 4.5rem)",
              color: "var(--c-text)",
            }}
          >
            {person.name}
          </h1>
          <p
            className="font-mono mt-2 font-normal"
            style={{
              fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
              color: "var(--c-accent)",
            }}
          >
            {person.title}
          </p>
        </div>

        {/* Typewriter block */}
        <div className="mb-12 fade-up" style={{ animationDelay: "200ms" }}>
          <p className="font-mono text-sm mb-4" style={{ color: "var(--c-muted)" }}>
            <span style={{ color: "var(--c-accent)" }}>$</span> cat tagline.txt
          </p>
          <p
            className="font-mono text-lg leading-relaxed max-w-2xl"
            style={{ color: "var(--c-text)" }}
          >
            {displayed}
            {!typingDone && (
              <span
                className="cursor-blink inline-block ml-0.5 w-0.5 h-5 align-middle"
                style={{ background: "var(--c-accent)" }}
              />
            )}
          </p>
        </div>

        {/* Stats badge */}
        <div className="mb-12 fade-up" style={{ animationDelay: "400ms" }}>
          <span
            className="font-mono text-xs px-3 py-1.5 rounded-sm border inline-flex items-center gap-2"
            style={{
              borderColor: "var(--c-accent)",
              color: "var(--c-accent)",
              background: "var(--c-accent-2)",
            }}
          >
            <span>▲</span>
            <span>110,000+ downloads shipped</span>
          </span>
        </div>

        {/* CTA buttons */}
        <div
          className="flex flex-wrap gap-3 fade-up"
          style={{ animationDelay: "500ms" }}
        >
          <a
            href={person.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm px-5 py-2.5 border transition-all"
            style={{
              color: "var(--c-text)",
              borderColor: "var(--c-border)",
              background: "transparent",
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
            --github ↗
          </a>
          <a
            href={person.upwork}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm px-5 py-2.5 border transition-all"
            style={{
              color: "var(--c-bg)",
              borderColor: "var(--c-accent)",
              background: "var(--c-accent)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = "0.85";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "1";
            }}
          >
            hire me on upwork ↗
          </a>
        </div>
      </div>
    </section>
  );
}
