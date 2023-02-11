/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      keyframes:{
        slidewhite:{
          '0%':{
            transform: 'scale(0, 0) translateY(0)'
          },
          '15%, 70%': {
            transform: 'scale(1, 1) translateY(0)',
          }
        },
        slideslate:{
          '0%':{
            transform: 'scale(0, 0) translateY(0)'
          },
          '15%, 70%': {
            transform: 'scale(1, 1) translateY(0)',
          }
        }
      }
    }
  },
  plugins: []
}