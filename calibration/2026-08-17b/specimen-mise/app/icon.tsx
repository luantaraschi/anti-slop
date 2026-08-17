import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/**
 * Five cells for the five stations, one of them hollow.
 *
 * ABSTENTION on iconography everywhere else in this tree: no icon appears
 * beside a word that already says it, and no set was chosen to fill the same
 * slot in five panels. This is the only mark in the product, and it earns the
 * place because a favicon has no room for the word.
 *
 * Colours are the theme's, not a second palette invented at 32px: `range` for
 * the ground, `chalk` for a station that is set, `flame` for the gap. The whole
 * product in the one glyph a browser tab will show.
 */
export default function Icon() {
  const cells = ["chalk", "chalk", "flame", "chalk", "chalk"] as const;
  const fill = { chalk: "#E9ECEE", flame: "#E45A3E" };

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
          background: "#0E1013",
        }}
      >
        {cells.map((tone, i) => (
          <div
            key={i}
            style={{
              width: 3,
              height: 18,
              borderRadius: 1,
              background: tone === "flame" ? "transparent" : fill[tone],
              border: tone === "flame" ? `1px solid ${fill.flame}` : "none",
            }}
          />
        ))}
      </div>
    ),
    size,
  );
}
