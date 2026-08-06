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
        background: "#DDEBFA",
        surface: "#FFFFFF",
        "surface-raised": "#F4F9FF",
        "surface-blue": "#D3E4F8",
        foreground: "#1D1D1F",
        muted: "#6E6E73",
        accent: "#004FB3",
        "accent-hover": "#003B85",
        "accent-soft": "#D6EAFE",
        "accent-border": "#5F9EEA",
        "accent-muted": "#1E5E9F",
        red: "#C41E3A",
        "red-hover": "#991B30",
        "red-soft": "#FFE8EC",
        "red-border": "#F3A7B5",
        "red-muted": "#A73448",
        border: "#AFC8E2"
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
