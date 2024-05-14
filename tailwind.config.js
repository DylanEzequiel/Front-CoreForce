
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
        "bodyAdmin": '#AEB7C0',
        stroke: '#E2E8F0',
        gray2: '#EFF4FB',
        graydark: '#333A48'
      },
      screens: {
        '3xl': '1560px',
        '2xsm': '375px',
         xsm: '425px',
      }
    },
    
  },
  plugins: [],
}

