/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#fffffc",
          "200": "#f8fdfe",
          "300": "#f8fbf8",
        },
        white: "#fff",
        shopprgreen: "#2e9092",
        "color-grey-grey-300": "#cbcbcb",
        black: "#121212",
        "color-grey-grey-200": "#f0f0f0",
        dimgray: "#565656",
        whitesmoke: "#f5f5f5",
        black1: "#000",
        gainsboro: "#d9d9d9",
        "accent-orange": "#feae24",
        darkcyan: {
          "100": "#2c8d8f",
          "200": "rgba(47, 144, 145, 0.99)",
        },
        cadetblue: "#63bbbe",
      },
      spacing: {
        reg: "12px",
        med: "16px",
        big: "24px",
        large: "32px",
        xlarge: "48px",
      },
      fontFamily: {
        "text-paragraph-p1": "Poppins",
        "text-heading-h2": "Roboto",
      },
      borderRadius: {
        "13xl": "32px",
        "81xl": "100px",
        "radius-s": "6px",
        "radius-big": "12px",
        "radius-med": "8px",
      },
    },
    fontSize: {
      sm: "14px",
      lg: "18px",
      "17xl": "36px",
      "33xl": "52px",
      xl: "20px",
      "29xl": "48px",
      base: "16px",
      "21xl": "40px",
      xs: "12px",
      "5xl": "24px",
      "45xl": "64px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
