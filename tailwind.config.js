/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        light: "#d3dbdf",
        white: "#ffffff",
        dark: "#000100",
        primary: "#2b02e2",
        secondary: "#3571ea",
        info: "#878ee5",
        accent1: "#2c232d",
        accent2: "#efa912",
        accent3: "#f91f52",
        success: "#01a460",
        warning: "#e1cb01",
        danger: "#f01f00",
      },
    },
  },
  plugins: [],
};
