/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.html'],
  theme: {
    extend: {
      animation: {
        left_entrance: 'left_entrance 1s ease-in-out',
      },
      keyframes: {
        left_entrance: {
          '0%': {opacity:'0'},
          
          '100%': {opacity:'1'},
        }
      },




      fontFamily:{
        fontBig:['Bebas+Neue']
      },
      colors:{
        main1:'#88E68B',
        main2:'#F8F0FB',
        main3:'#211A1D',
        main4:'#6320EE',
        main5:'#4690FF'
      }
    },
  },
  plugins: [],
}

