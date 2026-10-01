import { ImageResponse } from "next/og";
export const alt = "Lumo — Seu negócio merece um site à altura.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "65px",
        background: "#11151d",
        color: "#f0f3fa",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 30,
        }}
      >
        <span>lumo®</span>
        <span style={{ color: "#91b5ff" }}>DESIGN + DESENVOLVIMENTO</span>
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 90,
          letterSpacing: "-5px",
          lineHeight: 1.05,
        }}
      >
        Seu negócio merece
        <br />
        um site à altura.
      </div>
      <div style={{ display: "flex", fontSize: 24, color: "#91b5ff" }}>
        Presença clara. Design com intenção. Contato fácil.
      </div>
    </div>,
    size,
  );
}
