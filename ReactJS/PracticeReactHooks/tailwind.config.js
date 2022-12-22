/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors:{
        brand: '#0489B1',
      },
      backgroundImage:{
        banner: `url('../public/images/banner_1.jpg')`,
      }
    },
  },
  plugins: [],
}
