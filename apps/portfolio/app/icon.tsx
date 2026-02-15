import { ImageResponse } from "next/og";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Image generation
export default function Icon() {
  return new ImageResponse(
    // ImageResponse JSX element
    <div
      style={{
        fontSize: 24,
        background: "#1e201e", // Dark background
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        borderRadius: "20%", // Rounded square
      }}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* T horizontal bar */}
        <line
          x1="4"
          y1="6"
          x2="32"
          y2="6"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* A legs */}
        <path
          d="M7 30L18 6L29 30"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* A crossbar */}
        <line
          x1="11"
          y1="21"
          x2="25"
          y2="21"
          stroke="white"
          strokeWidth="3.5"
          strokeLinecap="round"
        />

        {/* Accent underline */}
        {/* <line
          x1="7"
          y1="34"
          x2="29"
          y2="34"
          stroke="#10b981" // Emerald-500 accent
          strokeWidth="2"
          strokeLinecap="round"
        /> */}
      </svg>
    </div>,
    {
      // For convenience, we can re-use the exported icons size metadata
      // config to also set the ImageResponse's width and height.
      ...size,
    },
  );
}
