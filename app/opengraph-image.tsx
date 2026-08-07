import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Zachary Levesque portfolio preview";
export const size = {
  width: 2400,
  height: 1260
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#061426",
          color: "#F7FBFF",
          display: "flex",
          height: "100%",
          padding: "96px 100px",
          width: "100%"
        }}
      >
        <div
          style={{
            background: "#FF2E63",
            height: 960,
            marginLeft: 58,
            width: 16
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 54,
            paddingLeft: 128,
            width: 890
          }}
        >
          <div
            style={{
              color: "#FF7899",
              fontFamily: "Menlo, Monaco, Consolas, monospace",
              fontSize: 80,
              letterSpacing: 7,
              textTransform: "uppercase"
            }}
          >
            Portfolio
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontFamily: "Arial, Helvetica, sans-serif",
              fontSize: 168,
              fontWeight: 700,
              lineHeight: 1.04
            }}
          >
            <span>Zachary</span>
            <span>Levesque</span>
          </div>
          <div
            style={{
              background: "#FF2E63",
              height: 18,
              marginTop: 16,
              width: 610
            }}
          />
        </div>

        <img
          src="http://127.0.0.1:3000/z-logo.png"
          alt=""
          width={920}
          height={920}
          style={{
            display: "flex",
            height: 920,
            marginLeft: 238,
            objectFit: "cover",
            width: 920
          }}
        />
      </div>
    ),
    size
  );
}
