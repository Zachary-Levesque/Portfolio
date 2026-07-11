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
        background: "#F2F7FF",
        surface: "#FFFFFF",
        "surface-raised": "#F7FBFF",
        "surface-blue": "#EAF3FF",
        foreground: "#1D1D1F",
        muted: "#6E6E73",
        accent: "#0057B8",
        "accent-hover": "#003F87",
        "accent-soft": "#DCEEFF",
        "accent-border": "#8EC5FF",
        "accent-muted": "#2468A8",
        border: "#C7D8EA"
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
