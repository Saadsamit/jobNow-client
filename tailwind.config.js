/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'Poppins':  ["'Poppins', sans-serif"],
      'Roboto': ["'Roboto', sans-serif"]
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}

