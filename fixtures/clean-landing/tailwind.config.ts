import type { Config } from "tailwindcss"

export default {
  content: ["./index.html", "./src/**/*.tsx"],
  theme: {
    // One breakpoint, at the width the hero stops holding its measure.
    screens: { wide: "48rem" },
    extend: {
      colors: {
        ink: "#1B1725",
        iris: "#5B2C8D",
        dusk: "#2E1F4A",
        chalk: "#F7F5F2",
        signal: "#D9752B",
      },
      borderRadius: { control: "6px", panel: "14px" },
      fontSize: {
        note: ["0.8125rem", { lineHeight: "1.4" }],
        body: ["1rem", { lineHeight: "1.6" }],
        display: ["3.25rem", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
      },
    },
  },
  plugins: [],
} satisfies Config
