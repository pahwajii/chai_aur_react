/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#231942",
        secondary: "#5E548E",
        accent: "#9F86C0",
        muted: "#BE95C4",
        blush: "#E0B1CB",
      },
      boxShadow: {
        soft: "0 10px 20px -10px rgba(35,25,66,0.35)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
}