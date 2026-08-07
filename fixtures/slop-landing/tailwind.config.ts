import type { Config } from "tailwindcss"

export default {
  content: ["./index.html", "./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        night: "#0B0B12",
        mist: "#8A8AA3",
        brand: "#4F46E5",
      },
      borderRadius: { pill: "999px", card: "12px" },
      fontFamily: {
        display: ["Sora", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      fontSize: {
        hero: ["3.5rem", { lineHeight: "1.1" }],
        lead: ["1.25rem", { lineHeight: "1.5" }],
      },
    },
  },
  plugins: [],
} satisfies Config
