/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-golden": "#DCCA87",
        "color-black": "#0C0C0C",
        "color-gray": "#545454",
        "color-crimson": "#F5EFDB",
        "color-grey": "#AAAAAA",
        "color-white": "#FFFFFF",
      },
    },
    fontFamily: {
      fontBase: ["Cormorant Upright, serif"],
      fontAlt: ["Open Sans, sans-serif"],
    },
  },
  plugins: [],
};
