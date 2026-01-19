import { ImageResponse } from "next/og";

export const size = { width: 96, height: 96 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0f172a",
          borderRadius: 20
        }}
      >
        <svg width="60" height="60" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg">
          <path d="M26 60c6 10 16 16 26 16s20-6 26-16" stroke="#38bdf8" strokeWidth="6" strokeLinecap="round" fill="none" />
          <path d="M26 38c6-10 16-16 26-16s20 6 26 16" stroke="#1d4ed8" strokeWidth="6" strokeLinecap="round" fill="none" />
          <circle cx="48" cy="48" r="8" fill="#bae6fd" />
        </svg>
      </div>
    ),
    {
      ...size
    }
  );
}
