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
      },
      colors: {
        primary: {
          100: '#e5f9f6',
          900: '#00c9a7',
        },
        danger: {
          100: '#fdedf1',
          900: '#ef5978',
        },
        warning: {
          100: '#fff1e2',
          900: '#f3a04b',
        },
        tertiary: {
          100: '#818181'
        },
        offwhite: {
          100: '#677788'
        }
      }
    }
  },
  plugins: [],
}

