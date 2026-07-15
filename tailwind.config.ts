import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "2.5rem",
      },
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        cream: "#FBF7F0",
        ivory: "#FFFFFF",
        sand: "#F4EBD9",
        ink: "#2B2620",
        charcoal: "#3D372F",
        muted: "#8A7F71",
        line: "#EDE3D1",
        gold: {
          50: "#FBF6EA",
          100: "#F5EBD1",
          200: "#EBD8A9",
          300: "#DEBE77",
          400: "#CFA84E",
          500: "#BE9138",
          600: "#A5792C",
          700: "#856025",
          800: "#6E4F23",
          900: "#5E4421",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      boxShadow: {
        soft: "0 12px 40px -18px rgba(94, 68, 33, 0.28)",
        card: "0 20px 60px -30px rgba(94, 68, 33, 0.35)",
        goldglow: "0 18px 45px -20px rgba(190, 145, 56, 0.55)",
      },
      backgroundImage: {
        "gold-line":
          "linear-gradient(90deg, transparent, #CFA84E 20%, #BE9138 50%, #CFA84E 80%, transparent)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "ken-burns": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.12)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.22,1,0.36,1) both",
        "fade-in": "fade-in 1s ease both",
        "ken-burns": "ken-burns 14s ease-out both",
        float: "float 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
