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
        background: "#EEF6FF",
        surface: "#FFFFFF",
        "surface-raised": "#F7FBFF",
        "surface-blue": "#E3F0FF",
        foreground: "#1D1D1F",
        muted: "#6E6E73",
        accent: "#004FB3",
        "accent-hover": "#003B85",
        "accent-soft": "#D6EAFE",
        "accent-border": "#7CB8F7",
        "accent-muted": "#1E5E9F",
        red: "#C41E3A",
        "red-hover": "#991B30",
        "red-soft": "#FFE8EC",
        "red-border": "#F3A7B5",
        "red-muted": "#A73448",
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
