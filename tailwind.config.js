/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        "primary":"#f57b51",
        "secondary":"#d63447",
        "text":"#f6eedf",
        "comp":"#d1cebd",
      }
    },
  },
  plugins: [],
}

