/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        width: "width"
      },
      colors:{
        "dark":{
          DEFAULT:"#31304A",
          "deep": "#0D0C10"
        }
      }
    },
  },
  plugins: [],
}
