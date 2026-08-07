import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Zachary Levesque portfolio preview";
export const size = {
  width: 1200,
  height: 630
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
          justifyContent: "space-between",
          padding: "76px 88px",
          width: "100%"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
            maxWidth: 690
          }}
        >
          <div
            style={{
              color: "#FF7899",
              fontFamily: "Menlo, Monaco, Consolas, monospace",
              fontSize: 28,
              letterSpacing: 2,
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
              fontSize: 74,
              fontWeight: 700,
              letterSpacing: 0,
              lineHeight: 0.98
            }}
          >
            <span>Zachary</span>
            <span>Levesque</span>
          </div>
          <div
            style={{
              color: "#B7C5D8",
              display: "flex",
              flexDirection: "column",
              fontFamily: "Arial, Helvetica, sans-serif",
              fontSize: 32,
              lineHeight: 1.28
            }}
          >
            <span>Machine learning infrastructure,</span>
            <span>hardware engineering, embedded</span>
            <span>systems, quant, and simulation.</span>
          </div>
          <div
            style={{
              background: "#FF2E63",
              height: 6,
              marginTop: 8,
              width: 180
            }}
          />
        </div>

        <div
          style={{
            alignItems: "center",
            border: "3px solid #2D609A",
            borderRadius: 36,
            display: "flex",
            height: 260,
            justifyContent: "center",
            position: "relative",
            width: 260
          }}
        >
          <div
            style={{
              color: "#69A7FF",
              display: "flex",
              fontFamily: "Arial, Helvetica, sans-serif",
              fontSize: 184,
              fontWeight: 800,
              lineHeight: 1
            }}
          >
            Z
          </div>
          <div
            style={{
              background: "#FF2E63",
              bottom: 48,
              height: 18,
              position: "absolute",
              right: 40,
              transform: "rotate(-38deg)",
              width: 150
            }}
          />
        </div>
      </div>
    ),
    size
  );
}
