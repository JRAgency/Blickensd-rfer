import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Mechanische Werkstatt Blickensdörfer — Präzisionsteile aus Hanau";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0f1410",
          padding: "70px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "#c6f23e",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#0f1410",
              fontSize: 34,
            }}
          >
            ⚙
          </div>
          <div
            style={{
              color: "#fff",
              fontSize: 26,
              fontWeight: 700,
              letterSpacing: -0.5,
            }}
          >
            Blickensdörfer
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#c6f23e",
              fontSize: 22,
              letterSpacing: 4,
              textTransform: "uppercase",
              marginBottom: 18,
            }}
          >
            Mechanische Werkstatt · Hanau seit 1986
          </div>
          <div
            style={{
              color: "#fff",
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -2,
            }}
          >
            Aus Zeichnung wird
            <br />
            <span style={{ color: "#c6f23e" }}>Präzision.</span>
          </div>
        </div>

        <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 24 }}>
          CNC-Drehen · Fräsen · Kunststoffzerspanung · Prototypen
        </div>
      </div>
    ),
    { ...size }
  );
}
