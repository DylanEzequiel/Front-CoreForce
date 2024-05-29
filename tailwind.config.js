/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1e293b",
        secondary: "#f97316",
        text: "#FFF",
        comp: "#9ca3af",
        bodyAdmin: "#AEB7C0",
        stroke: "#E2E8F0",
        gray2: "#EFF4FB",
        gray3: "#CFCFCF",
        gray4: "#C7C7C7",
        graydark: "#333A48",
      },
      boxShadow: {
        blue: "0 4px 6px -1px rgba(59, 130, 246, 0.5), 0 2px 4px -1px rgba(59, 130, 246, 0.25)",
      },
      screens: {
        "3xl": "1560px",
        "2xsm": "375px",
        xsm: "425px",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.1s ease-out",
        fadeOut: "fadeOut 0.5s ease-in",
      },
    },
  },
  plugins: [],
};
