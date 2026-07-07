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
        paper: "#FBFAF7",
        ink: "#0B1426",
        signal: "#1463FF",
        peach: "#EAC8B0",
        olive: "#66735B",
        muted: "#5F6875",
        line: "#DDE3EC"
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
