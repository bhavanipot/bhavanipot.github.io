/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        typing: "typing 4s steps(20), blink 0.75s step-end infinite",
      },
      keyframes: {
        typing: {
          from: { width: "0" },
          to: { width: "15em" },
        },
        blink: {
          "50%": { borderColor: "transparent" },
        },
      },
    },
  },
  plugins: [],
}
