/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        prime: {
          100: "#F39DA7",
          200: "#EB5465",
          300: "#E83B4F",
          400: "#E52339",
          500: "#e30b23",
          600: "#CC091F",
          700: "#B5081C",
          800: "#9E0718",
          900: "#710511",
          1000: "#44030A",
        },
        accent: {
          100: "#9daabd",
          200: "#6c809c",
          300: "#3a567a",
          400: "#22416a",
          500: "#0a2c5a",
          600: "#092751",
          700: "#082348",
          800: "#071e3e",
          900: "#05162d",
          1000: "#030d1b",
        },
        complementary: {
          100: "#fcf9f3",
          200: "#faf6ee",
          300: "#f9f3e8",
          400: "#f8f2e5",
          500: "#f8f1e3",
          600: "#dfd8cc",
          700: "#c6c0b5",
          800: "#ada89e",
          900: "#7c7871",
          1000: "#4a4844",
        },
      },
    },
  },
  plugins: [],
};
