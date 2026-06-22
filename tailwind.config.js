/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', "sans-serif"],
        body: ['"Inter"', "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      colors: {
        navy: {
          950: "#050E18",
          900: "#0B2A4A",
          800: "#0E3760",
          700: "#134A7E",
        },
        highway: {
          500: "#1859A3",
          400: "#2E7BD6",
          300: "#5B9CE6",
        },
        ice: {
          50: "#F7FAFD",
          100: "#EEF4FA",
        },
        hazard: {
          500: "#F5A623",
          600: "#D98C12",
        },
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(46,123,214,0.15), 0 8px 30px -10px rgba(11,42,74,0.25)",
      },
    },
  },
  plugins: [],
};
