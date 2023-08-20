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
        purples: "#5f43b2",
        "dark-purple": "#3a3153",
        "text-white": "#fefdfd",
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
