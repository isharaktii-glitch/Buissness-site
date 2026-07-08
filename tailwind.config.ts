import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        galaxy: {
          950: "#05010f",
          900: "#0b0420",
          800: "#150936",
          700: "#231152",
          600: "#39187a",
          500: "#5b21b6",
          400: "#8b5cf6",
          300: "#c4b5fd",
        },
        accent: {
          DEFAULT: "#00e5c7",
          dark: "#00b8a3",
        },
      },
      backgroundImage: {
        "galaxy-radial":
          "radial-gradient(ellipse at top, #231152 0%, #05010f 60%)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
        twinkle: "twinkle 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
