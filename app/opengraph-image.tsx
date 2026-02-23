import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Arda Caglayan Ercan — Next.js & Mobile App Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const baseUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "56px 64px",
          fontFamily: "monospace",
        }}
      >
        {/* Terminal dots */}
        <div style={{ display: "flex", gap: "10px", marginBottom: "52px" }}>
          <div style={{ width: 14, height: 14, borderRadius: "50%", background: "#ff5f57" }} />
          <div style={{ width: 14, height: 14, borderRadius: "50%", background: "#febc2e" }} />
          <div style={{ width: 14, height: 14, borderRadius: "50%", background: "#28c840" }} />
        </div>

        {/* whoami prompt */}
        <div style={{ display: "flex", color: "#555555", fontSize: 20, marginBottom: 28 }}>
          <span style={{ color: "#22c55e", marginRight: 10 }}>$</span> whoami
        </div>

        {/* Avatar + name/title */}
        <div style={{ display: "flex", alignItems: "center", gap: 48, flex: 1 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${baseUrl}/avatar.png`}
            width={180}
            height={180}
            style={{ imageRendering: "pixelated" }}
            alt="avatar"
          />
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div
              style={{
                color: "#e5e5e5",
                fontSize: 62,
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: "-1px",
              }}
            >
              Arda Caglayan Ercan
            </div>
            <div style={{ color: "#22c55e", fontSize: 26 }}>
              Next.js &amp; Mobile App Developer
            </div>
          </div>
        </div>

        {/* Bottom stat */}
        <div style={{ display: "flex", gap: 40, marginTop: 44 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              color: "#22c55e",
              fontSize: 18,
              border: "1px solid #22c55e",
              padding: "8px 18px",
            }}
          >
            ▲ 110,000+ downloads shipped
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              color: "#555555",
              fontSize: 18,
              border: "1px solid #1e1e1e",
              padding: "8px 18px",
            }}
          >
            caqlayan.dev
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
