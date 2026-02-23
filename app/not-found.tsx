import Link from "next/link";

export default function NotFound() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-6"
      style={{ background: "var(--c-bg)" }}
    >
      <div className="max-w-lg w-full">
        {/* Terminal window */}
        <div
          className="border"
          style={{ borderColor: "var(--c-border)", background: "var(--c-card)" }}
        >
          {/* Title bar */}
          <div
            className="flex items-center gap-2 px-4 py-3 border-b"
            style={{ borderColor: "var(--c-border)", background: "var(--c-bg)" }}
          >
            <div className="w-3 h-3 rounded-full" style={{ background: "#ff5f57" }} />
            <div className="w-3 h-3 rounded-full" style={{ background: "#febc2e" }} />
            <div className="w-3 h-3 rounded-full" style={{ background: "#28c840" }} />
            <span className="font-mono text-xs ml-2" style={{ color: "var(--c-muted)" }}>
              bash — caqlayan.dev
            </span>
          </div>

          {/* Body */}
          <div className="p-8 font-mono text-sm space-y-2">
            <p style={{ color: "var(--c-muted)" }}>
              <span style={{ color: "var(--c-accent)" }}>$</span> resolve ./this-page
            </p>
            <p style={{ color: "#ef4444" }}>
              bash: ./this-page: No such file or directory
            </p>
            <p style={{ color: "var(--c-muted)" }}>exit code: 404</p>

            <div
              className="my-6 border-t"
              style={{ borderColor: "var(--c-border)" }}
            />

            <p style={{ color: "var(--c-muted)" }}>
              <span style={{ color: "var(--c-accent)" }}>$</span> --help
            </p>
            <p style={{ color: "var(--c-muted)" }}>
              The path you requested doesn&apos;t exist.
            </p>

            <div className="pt-4 space-y-2">
              <p className="flex items-center gap-2" style={{ color: "var(--c-muted)" }}>
                <span style={{ color: "var(--c-accent)" }}>$</span>
                <Link
                  href="/"
                  className="text-muted hover:text-accent transition-colors"
                >
                  cd ~/
                </Link>
              </p>
              {/* Empty prompt with blinking cursor */}
              <p className="flex items-center gap-2">
                <span style={{ color: "var(--c-accent)" }}>$</span>
                <span
                  className="cursor-blink inline-block w-[7px]"
                  style={{ height: "1em", background: "var(--c-accent)" }}
                />
              </p>
            </div>
          </div>
        </div>

        {/* Footer branding */}
        <div className="mt-4 flex items-center justify-between">
          <Link
            href="/"
            className="font-mono text-xs flex items-center gap-1.5 hover:opacity-80 transition-opacity"
            style={{ color: "var(--c-text)" }}
          >
            <span style={{ color: "var(--c-accent)" }}>›</span>
            caqlayan.dev
          </Link>
          <p className="font-mono text-xs" style={{ color: "var(--c-muted)" }}>
            HTTP 404
          </p>
        </div>
      </div>
    </main>
  );
}
