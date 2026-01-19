import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-space)", ...defaultTheme.fontFamily.sans]
      },
      colors: {
        primary: {
          50: "#f2fbff",
          100: "#d3efff",
          200: "#a6deff",
          300: "#73cbff",
          400: "#47b8ff",
          500: "#219fff",
          600: "#0d7fe6",
          700: "#0062bf",
          800: "#00468f",
          900: "#012a5b"
        }
      },
      boxShadow: {
        glow: "0 0 60px rgba(33, 159, 255, 0.25)"
      },
      backgroundImage: {
        grid: "linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(180deg, rgba(255,255,255,0.04) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
