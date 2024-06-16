/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#cefbfd",
          200: "#9df7fb",
          300: "#6df4f8",
          400: "#3cf0f6",
          500: "#0becf4",
          600: "#09bdc3",
          700: "#078e92",
          800: "#045e62",
          900: "#022f31",
        },
        text_dark: {
          100: "#d0d1d1",
          200: "#a2a3a3",
          300: "#737474",
          400: "#454646",
          500: "#161818",
          600: "#121313",
          700: "#0d0e0e",
          800: "#090a0a",
          900: "#040505",
        },
        background: {
          100: "#f3f7f7",
          200: "#e7efef",
          300: "#dae6e6",
          400: "#cedede",
          500: "#c2d6d6",
          600: "#9babab",
          700: "#748080",
          800: "#4e5656",
          900: "#272b2b",
        },
      },
    },
  },
  plugins: [],
};
