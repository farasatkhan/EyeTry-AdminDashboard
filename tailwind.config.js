/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Poppins', 'sans-serif'],
      },
      screens: {
        'custom-sm': '450px',
        'custom-md': '600px'
      }
    }
  },
  plugins: [],
}

