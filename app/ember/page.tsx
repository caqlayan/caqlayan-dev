import Link from "next/link";

export default function EmberPage() {
  return (
    <>
      <p className="font-mono text-sm mb-8" style={{ color: "var(--c-muted)" }}>
        <span style={{ color: "var(--c-accent)" }}>$</span> ls ./ember/legal
      </p>

      <div
        className="border mb-10"
        style={{ borderColor: "var(--c-border)", background: "var(--c-card)" }}
      >
        {/* Terminal title bar */}
        <div
          className="flex items-center gap-2 px-4 py-2.5"
          style={{ borderBottom: "1px solid var(--c-border)", background: "var(--c-bg)" }}
        >
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#ff5f57" }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#febc2e" }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#28c840" }} />
          <span className="font-mono text-xs ml-2" style={{ color: "var(--c-muted)" }}>
            ember — legal
          </span>
        </div>

        <div className="p-5 flex flex-col gap-1">
          <Link
            href="/ember/terms"
            className="font-mono text-sm flex items-center gap-2 py-1.5 group transition-colors"
            style={{ color: "var(--c-muted)" }}
          >
            <span style={{ color: "var(--c-accent)" }}>-rw-r--r--</span>
            <span className="group-hover:text-body group-hover:underline underline-offset-2 transition-colors">
              terms-of-service.md
            </span>
            <span className="opacity-0 group-hover:opacity-100 transition-opacity text-xs">↗</span>
          </Link>

          <Link
            href="/ember/privacy"
            className="font-mono text-sm flex items-center gap-2 py-1.5 group transition-colors"
            style={{ color: "var(--c-muted)" }}
          >
            <span style={{ color: "var(--c-accent)" }}>-rw-r--r--</span>
            <span className="group-hover:text-body group-hover:underline underline-offset-2 transition-colors">
              privacy-policy.md
            </span>
            <span className="opacity-0 group-hover:opacity-100 transition-opacity text-xs">↗</span>
          </Link>

          <div className="mt-3 pt-3" style={{ borderTop: "1px solid var(--c-border)" }}>
            <span className="font-mono text-sm flex items-center gap-1" style={{ color: "var(--c-muted)" }}>
              <span style={{ color: "var(--c-accent)" }}>$</span>
              <span className="cursor-blink inline-block w-1.5 h-4 align-middle" style={{ background: "var(--c-accent)" }} />
            </span>
          </div>
        </div>
      </div>

      <p className="font-mono text-xs" style={{ color: "var(--c-muted)" }}>
        Questions? Email{" "}
        <a
          href="mailto:ember@caqlayan.dev"
          className="underline underline-offset-2 transition-colors"
          style={{ color: "var(--c-accent)" }}
        >
          ember@caqlayan.dev
        </a>
      </p>
    </>
  );
}
