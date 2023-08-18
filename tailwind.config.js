/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purpleNormal: '#8860E6',
        purpleDark: '#5B409B',
        grayDark: '#202024',
        grayLight: '#F3F4FE',
        success: '#04D361',
        danger: '#FF8F8F'
      },
      backgroundImage: {
        gradient: 'linear-gradient(90deg, #DEE0FC 0%, #996DFF 51.04%, #BC9FFF 100%)',
        borderGradient: 'linear-gradient(90deg, #C497FF 0%, #9747FF 100%)'
      }
    },
  },
  plugins: [],
}

