/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "theme-1": "#3a015c",
        "theme-2": "#32004f",
        "theme-3": "#32004f",
        "theme-4": "#190028",
        "theme-5": "#11001c",
      },
      fontFamily: {
        virtual: "virtual",
      },
      screens: {
        xs: "280px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
  darkMode: "class",
};
