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
        background: "#B9CFE8",
        surface: "#FFFFFF",
        "surface-raised": "#F4F9FF",
        "surface-blue": "#B4CAE5",
        foreground: "#1D1D1F",
        muted: "#6E6E73",
        accent: "#004FB3",
        "accent-hover": "#003B85",
        "accent-soft": "#D6EAFE",
        "accent-border": "#4D8CDA",
        "accent-muted": "#1E5E9F",
        red: "#E11D48",
        "red-hover": "#BE123C",
        "red-soft": "#FFE1E8",
        "red-border": "#FB7185",
        "red-muted": "#BE123C",
        border: "#8EADCC"
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
