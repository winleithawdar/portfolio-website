import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Win Lei Thawdar | Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const photo = await readFile(
    join(process.cwd(), "public/images/profile/my-profile.png"),
  );
  const photoSrc = `data:image/png;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 96px",
          background:
            "radial-gradient(circle at 85% 30%, #342a42 0%, #18131f 55%)",
          color: "#f2ebf3",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 640 }}>
          <div
            style={{
              fontSize: 22,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#b6aabf",
            }}
          >
            Portfolio
          </div>
          <div
            style={{
              marginTop: 20,
              fontSize: 76,
              lineHeight: 1.05,
              letterSpacing: -2,
              color: "#dfcfe7",
            }}
          >
            Win Lei Thawdar
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 30,
              lineHeight: 1.4,
              color: "#b6aabf",
            }}
          >
            Computer Science (AI) student at SMU and Vice President of SMUAI.
          </div>
          <div style={{ marginTop: 36, fontSize: 24, color: "#c3afd1" }}>
            winleithawdar.com
          </div>
        </div>

        <div
          style={{
            display: "flex",
            width: 300,
            height: 420,
            borderRadius: 999,
            overflow: "hidden",
            border: "2px solid rgba(223, 207, 231, 0.22)",
            background: "#342a42",
          }}
        >
          <img
            src={photoSrc}
            alt=""
            width={420}
            height={420}
            style={{ width: 420, height: 420, marginLeft: -60, objectFit: "cover" }}
          />
        </div>
      </div>
    ),
    size,
  );
}
