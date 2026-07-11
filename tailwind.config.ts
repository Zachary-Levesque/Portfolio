import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#F5F5F7",
        surface: "#FFFFFF",
        "surface-raised": "#FBFBFD",
        foreground: "#1D1D1F",
        muted: "#6E6E73",
        accent: "#0066CC",
        "accent-hover": "#004C99",
        "accent-soft": "#EAF3FF",
        "accent-border": "#B8D9FF",
        "accent-muted": "#3B78B8",
        border: "#D2D2D7"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Arial", "Helvetica", "sans-serif"],
        mono: ["var(--font-mono)", "Menlo", "Monaco", "Consolas", "monospace"]
      }
    }
  },
  plugins: []
};

export default config;
