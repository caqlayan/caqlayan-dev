export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      className="py-8"
      style={{ borderTop: "1px solid var(--c-border)" }}
    >
      <div
        className="max-w-5xl mx-auto px-6 flex items-center justify-between"
      >
        <span className="font-mono text-xs" style={{ color: "var(--c-muted)" }}>
          <span style={{ color: "var(--c-accent)" }}>©</span> {year} Arda Caglayan Ercan
        </span>
        <span className="font-mono text-xs" style={{ color: "var(--c-muted)" }}>
          built with next.js
        </span>
      </div>
    </footer>
  );
}
