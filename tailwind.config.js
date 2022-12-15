/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '300px', //Small Phones min 300px

      'sm': '400px', //phone min 400px

      'md': '760px', //Tablet portrait min 760px

      'lg': '1024px', //Tablets landscapem, Laptops min 1024px

      'xl': '1280px', // Desktop Pcs min 1280px
      
    },
    extend: {
      spacing: {
        '128': '32rem',
        '200': '40rem',
      },
    },
  },
  plugins: [],
}
