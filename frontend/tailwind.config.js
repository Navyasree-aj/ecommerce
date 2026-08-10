// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#fcf9f8",
        surface: "#fcf9f8",
        primary: "#9f3c16",
        "primary-container": "#bf542c",
        "on-primary": "#ffffff",
        secondary: "#376847",
        "secondary-container": "#b6edc2",
        tertiary: "#635b48",
        "tertiary-fixed": "#ede1c9",
        "on-tertiary-fixed": "#211b0c",
        "on-surface": "#1b1c1c",
        "on-surface-variant": "#57423b",
        "outline-variant": "#dec0b7",
        "surface-container": "#f0eded",
        "surface-container-low": "#f6f3f2",
        "surface-container-lowest": "#ffffff",
        "surface-tint": "#a23e18",
      },
      fontFamily: {
        body: ["Be Vietnam Pro", "sans-serif"],
        headline: ["Manrope", "sans-serif"],
      }
    },
  },
  plugins: [],
};