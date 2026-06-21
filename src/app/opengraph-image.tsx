import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Berke Alpaslan — .NET Developer | Network & DevOps Explorer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0a0f1c 0%, #131b2e 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#f1f5f9",
            marginBottom: 16,
          }}
        >
          Berke Alpaslan
        </div>
        <div
          style={{
            fontSize: 32,
            color: "#64748b",
            display: "flex",
            gap: 12,
          }}
        >
          <span style={{ color: "#e8a838" }}>.NET Developer</span>
          <span>|</span>
          <span>Network & DevOps Explorer</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
