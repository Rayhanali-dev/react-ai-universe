/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [{
      mytheme: {

        "primary": "#f4b0d3",

        "secondary": "#038437",

        "accent": "#0515aa",

        "neutral": "#212130",

        "base-100": "#F0EAF1",

        "info": "#449CF3",

        "success": "#64E3D4",

        "warning": "#E58F06",

        "error": "#F25F88",
      },
    }, ],
  },
  plugins: [require("daisyui")],
}