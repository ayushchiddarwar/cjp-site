import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        maroon: "#7A1E1E",
        gold: "#C9A227",
        ivory: "#FFF7E6",
        wine: "#3A0F0F",
        charcoal: "#2B2B2B"
      },
      boxShadow: {
        soft: "0 8px 30px rgba(0,0,0,.08)"
      }
    }
  },
  plugins: []
} satisfies Config;
