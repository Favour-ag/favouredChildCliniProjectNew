/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // colors: {
      //   'silver': '#ecebff',
      //   'bubble-gum': '#ff77e9',
      //   'bermuda': '#78dcca',
      // },
      fontFamily: {
        'sans': 'Poppins, sans-serif'
      }
    },
    
  },
  plugins: [],
}