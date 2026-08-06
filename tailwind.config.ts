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
        background: "#061426",
        surface: "#0B1B31",
        "surface-raised": "#10233D",
        "surface-blue": "#123056",
        foreground: "#F7FBFF",
        muted: "#B7C5D8",
        accent: "#69A7FF",
        "accent-hover": "#9CC7FF",
        "accent-soft": "#15365F",
        "accent-border": "#2D609A",
        "accent-muted": "#A9CEFF",
        red: "#FF2E63",
        "red-hover": "#FF5C85",
        "red-soft": "#351627",
        "red-border": "#FF4D78",
        "red-muted": "#FF7899",
        border: "#244B74"
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
