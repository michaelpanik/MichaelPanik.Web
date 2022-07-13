/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        display: ["filson-pro", "Trebuchet MS", "Helvetica", "sans-serif"],
        mono: ["roboto-mono", "Courier New", "Courier", "monospace"],
      },
      colors: {
        primary: "#5ee2c3",
        secondary: "#751fde",
        gray: { 1000: "#212827" },
      },
    },
  },
  plugins: [],
};
