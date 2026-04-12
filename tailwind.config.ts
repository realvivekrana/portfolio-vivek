import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
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
      fontFamily: {
        display: ["Syne", "sans-serif"],
        heading: ["Plus Jakarta Sans", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
        bebas: ["Bebas Neue", "sans-serif"],
      },
      fontSize: {
        "display-2xl": [
          "clamp(64px, 10vw, 120px)",
          { lineHeight: "0.95", letterSpacing: "-0.04em" },
        ],
        "display-xl": [
          "clamp(48px, 7vw, 88px)",
          { lineHeight: "1.0", letterSpacing: "-0.03em" },
        ],
        "display-lg": [
          "clamp(36px, 5vw, 64px)",
          { lineHeight: "1.05", letterSpacing: "-0.02em" },
        ],
        "display-md": [
          "clamp(28px, 4vw, 48px)",
          { lineHeight: "1.1", letterSpacing: "-0.02em" },
        ],
        "display-sm": [
          "clamp(22px, 3vw, 36px)",
          { lineHeight: "1.2", letterSpacing: "-0.01em" },
        ],
        "body-lg": [
          "clamp(16px, 1.5vw, 18px)",
          { lineHeight: "1.8", letterSpacing: "0.01em" },
        ],
        "body-md": [
          "clamp(14px, 1.2vw, 16px)",
          { lineHeight: "1.7", letterSpacing: "0.01em" },
        ],
        "body-sm": [
          "clamp(12px, 1vw, 14px)",
          { lineHeight: "1.6", letterSpacing: "0.02em" },
        ],
        "mono-lg": [
          "clamp(14px, 1.2vw, 16px)",
          { lineHeight: "1.6", letterSpacing: "0.05em" },
        ],
        "mono-sm": [
          "clamp(11px, 1vw, 13px)",
          { lineHeight: "1.5", letterSpacing: "0.08em" },
        ],
        label: ["11px", { lineHeight: "1.4", letterSpacing: "0.15em" }],
      },
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
        glass: {
          DEFAULT: "hsl(var(--glass))",
          border: "hsl(var(--glass-border))",
        },
        glow: "hsl(var(--glow))",
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
