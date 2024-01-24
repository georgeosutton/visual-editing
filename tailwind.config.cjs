const plugin = require("tailwindcss/plugin");

const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4a1613",
        secondary: "#f85435",
        offWhite: "#f6f6f0",
        lightPink: "#f2d1d8",
      },
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1920px",
        },
      },
      fontFamily: {
        ivar: ["var(--font-ivar)"],
        polar: ["var(--font-polar)"],
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        ".ivar-light": {
          fontWeight: "300",
          fontFamily: ["var(--font-ivar)"],
        },
        ".page-container": {
          display: "grid",
          minHeight: "100vh",
          gridTemplateColumns: "100%",
          gridTemplateRows: "auto 1fr auto",
        },
      });
    }),
  ],
};
export default config;
