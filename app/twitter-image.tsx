import { ImageResponse } from "next/og";

export const alt = "Martin Lavin Carvajal — Software & Cloud Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "#0a0a0a",
          color: "#fafafa",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 24, color: "#a1a1aa" }}>
          MARTIN LAVIN CARVAJAL
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ display: "flex", fontSize: 72, fontWeight: 700, letterSpacing: -3 }}>
            Software &amp; Cloud Engineer
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 26, color: "#fde68a" }}>
            <span style={{ width: 10, height: 10, borderRadius: 999, background: "#fbbf24" }} />
            AWS Certified Solutions Architect – Associate
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 22, color: "#71717a" }}>
          Cloud architecture · Backend systems · Infrastructure as Code · AI
        </div>
      </div>
    ),
    size,
  );
}
