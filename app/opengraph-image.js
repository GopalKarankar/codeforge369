import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import { join } from "path";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Codeforge | Software Development Company";

export default async function Image() {
  const logoPath = join(process.cwd(), "app", "codeforge-high-resolution-logo.png");
  const logoBuffer = await readFile(logoPath);
  const logoBase64 = logoBuffer.toString("base64");

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
          backgroundColor: "#09090B",
          padding: "60px",
          fontFamily: "system-ui, sans-serif",
          gap: "20px",
          position: "relative",
        }}
      >
        {/* Accent stripe */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(90deg, #4f46e5 0%, #818cf8 100%)",
          }}
        />

        {/* Logo */}
        <img
          src={`data:image/png;base64,${logoBase64}`}
          alt="Codeforge logo"
          style={{
            width: "120px",
            height: "120px",
            objectFit: "contain",
          }}
        />

        {/* Title */}
        <div
          style={{
            fontSize: "56px",
            fontWeight: "700",
            color: "#FAFAFA",
            margin: "0",
            textAlign: "center",
            letterSpacing: "-1px",
          }}
        >
          Codeforge
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: "20px",
            color: "#d4d4d8",
            margin: "0",
            textAlign: "center",
            maxWidth: "800px",
            lineHeight: "1.4",
          }}
        >
          Building scalable web applications, AI-powered products, and modern digital experiences
        </div>
      </div>
    ),
    { ...size }
  );
}
