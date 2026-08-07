import type { Config } from "tailwindcss"

export default {
  content: ["./app/**/*.tsx", "./components/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        ink: "#191C22",
        paper: "#FBFAF7",
        rule: "#DFDBD2",
        ledger: "#2F5D50",
        flag: "#B4451F",
      },
      borderRadius: { control: "5px", panel: "12px", chip: "999px" },
      fontFamily: {
        display: ["Newsreader", "Georgia", "serif"],
        body: ["Inter Tight", "system-ui", "sans-serif"],
        figure: ["Inter Tight", "system-ui", "sans-serif"],
      },
      fontSize: {
        note: ["0.8125rem", { lineHeight: "1.35" }],
        body: ["0.9375rem", { lineHeight: "1.55" }],
        figure: ["1.75rem", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
        title: ["2.25rem", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
      },
      boxShadow: {
        // One elevated level. Everything at rest separates with border-rule.
        raised: "0 10px 28px -14px rgba(25, 28, 34, 0.45)",
      },
    },
  },
  plugins: [],
} satisfies Config
