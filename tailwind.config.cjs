const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    data: {
      error: 'error~="true"',
    },
    extend: {
      transitionProperty: {
        height: "height",
      },
      backgroundImage: {
        darkGradientHorizonal:
          "linear-gradient(180deg, rgba(101, 101, 101, 0.21) 13.68%, rgba(0, 0, 0, 0.32) 34.24%, rgba(4, 4, 4, 0.30) 63.21%, rgba(190, 190, 190, 0.00) 84.23%)",
        darkGradientVertical:
          "linear-gradient(90deg, rgba(101, 101, 101, 0.21) 13.68%, rgba(0, 0, 0, 0.32) 34.24%, rgba(4, 4, 4, 0.30) 63.21%, rgba(190, 190, 190, 0.00) 84.23%)",
      },
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
      fontWeight: {
        book: "350",
      },
      fontFamily: {
        ivar: ["var(--font-ivar)"],
        polar: ["var(--font-polar)"],
      },
      height: {
        13: "3.25rem",
      },
      fontSize: {
        body: [
          "1.3125rem",
          {
            lineHeight: "1.75rem",
          },
        ],
        xsHeading: [
          "0.75rem",
          {
            lineHeight: "0.85rem",
            letterSpacing: "0.15rem",
          },
        ],
        "4xlHeading": [
          "2.375rem",
          {
            lineHeight: "2.4rem",
          },
        ],
        "5xlHeading": [
          "3rem",
          {
            lineHeight: "3.5625rem",
          },
        ],
        "6xlHeading": ["4.375rem", { lineHeight: "5.3125rem" }],
        "7xlHeading": [
          "5rem",
          {
            lineHeight: "5.3125rem",
          },
        ],
        "9xlHeading": [
          "8.125rem",
          {
            lineHeight: "9rem",
          },
        ],
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
        "accordion-down": "accordion-down 0.5s ease",
        "accordion-up": "accordion-up 0.5s ease",
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        "@media (max-width: 1024px)": {
          ".container": {
            paddingRight: "1.5rem",
            paddingLeft: "1.5rem",
          },
        },
        "@media (max-width: 768px)": {
          ".container": {
            paddingRight: "1rem",
            paddingLeft: "1rem",
          },
        },
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
