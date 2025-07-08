/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "purple-700":"#4343D9",
        "purple-500":"#DDE4FF"
      }
    },
  },
  plugins: [],
}

