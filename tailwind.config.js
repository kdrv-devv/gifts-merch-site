/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gradientStart: '#9796f0',
        gradientEnd: '#ffe0e8',
      },
    },
  },
  plugins: [],
}