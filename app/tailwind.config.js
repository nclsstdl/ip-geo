/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "green-800": "#142d23",
        "green-500": "#64e1af",
        "green-100": "#c1f3df",
        "green-50": "#effcf7",
      },
    },
  },
  plugins: [],
};
