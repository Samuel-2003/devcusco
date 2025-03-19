import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Colores neón
        neon: {
          orange: "#ff7b00",
          green: "#00ff9d",
          blue: "#00b3ff",
          purple: "#b300ff",
          pink: "#ff00d4",
          yellow: "#ffee00",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "pulse-neon": {
          "0%, 100%": {
            textShadow: "0 0 4px rgba(255, 255, 255, 0.5), 0 0 10px currentColor",
          },
          "50%": {
            textShadow: "0 0 8px rgba(255, 255, 255, 0.8), 0 0 20px currentColor",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 5px rgba(255, 255, 255, 0.5), 0 0 10px currentColor" },
          "50%": { boxShadow: "0 0 15px rgba(255, 255, 255, 0.8), 0 0 30px currentColor" },
        },
        "rotate-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "scale-slow": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-neon": "pulse-neon 2s infinite",
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s infinite",
        "rotate-slow": "rotate-slow 20s linear infinite",
        "scale-slow": "scale-slow 8s ease-in-out infinite",
      },
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
        neon: "0 0 5px rgba(255, 255, 255, 0.5), 0 0 10px currentColor",
      },
      boxShadow: {
        neon: "0 0 5px rgba(255, 255, 255, 0.5), 0 0 10px currentColor",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    ({ addUtilities }) => {
      const newUtilities = {
        ".text-shadow-neon": {
          textShadow: "0 0 5px rgba(255, 255, 255, 0.5), 0 0 10px currentColor",
        },
        ".text-shadow-neon-lg": {
          textShadow: "0 0 10px rgba(255, 255, 255, 0.7), 0 0 20px currentColor, 0 0 30px currentColor",
        },
        ".box-shadow-neon": {
          boxShadow: "0 0 5px rgba(255, 255, 255, 0.5), 0 0 10px currentColor",
        },
        ".box-shadow-neon-lg": {
          boxShadow: "0 0 10px rgba(255, 255, 255, 0.7), 0 0 20px currentColor, 0 0 30px currentColor",
        },
      }
      addUtilities(newUtilities)
    },
  ],
} satisfies Config

export default config

