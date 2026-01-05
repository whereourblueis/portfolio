import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "이수현 - 프론트엔드 개발자 포트폴리오";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #ede9fe 0%, #dbeafe 50%, #e0e7ff 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: "bold",
              color: "#1f2937",
              letterSpacing: "0.15em",
            }}
          >
            LEE SU HYUN
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#6b7280",
              marginTop: 16,
              letterSpacing: "0.1em",
            }}
          >
            Frontend Developer Portfolio
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}