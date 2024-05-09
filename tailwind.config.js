/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        "primary": "#1e293b",
        "secondary":"#f97316",
        "text":"#FFF",
        "comp":"#9ca3af",
      },
      screens: {
        '3xl': '1560px'
      }
    },
    
  },
  plugins: [],
}

