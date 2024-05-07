/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        "primary": "#927fbf",
        "secondary":"#4f3b78",
        "text":"#f6eedf",
        "comp":"#d1cebd",
      }
    },
    
  },
  plugins: [],
}

