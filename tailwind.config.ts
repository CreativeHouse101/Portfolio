import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
    "./hooks/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        paper: "rgb(var(--color-paper) / <alpha-value>)",
        surface: "rgb(var(--color-surface) / <alpha-value>)",
        soft: "rgb(var(--color-soft) / <alpha-value>)",
        ink: "rgb(var(--color-ink) / <alpha-value>)",
        signal: "rgb(var(--color-signal) / <alpha-value>)",
        peach: "#EAC8B0",
        olive: "#66735B",
        muted: "rgb(var(--color-muted) / <alpha-value>)",
        line: "rgb(var(--color-line) / <alpha-value>)"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Arial", "Helvetica", "sans-serif"],
        serif: ["Georgia", "Times New Roman", "serif"]
      },
      boxShadow: {
        "hard-sm": "3px 3px 0 #0F0F0D",
        "hard-md": "7px 7px 0 #0F0F0D"
      },
      keyframes: {
        scan: {
          "0%": { transform: "translateY(-30%)", opacity: "0" },
          "20%": { opacity: "1" },
          "100%": { transform: "translateY(120%)", opacity: "0" }
        }
      },
      animation: {
        scan: "scan 4s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
