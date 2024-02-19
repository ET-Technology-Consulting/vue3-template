/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', "./node_modules/vue-tailwind-datepicker/**/*.js"],
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", "./node_modules/vue-tailwind-datepicker/**/*.js",],
  theme: {
    extend: {
      colors: {
        "vtd-primary": colors.violet, // Light mode Datepicker color
        "vtd-secondary": colors.slate, // Dark mode Datepicker color
      },
    },
    colors: {
      primary: {
        '50': '#f4f3ff',
        '100': '#eae9fe',
        '200': '#d8d6fe',
        '300': '#bbb5fd',
        '400': '#9a8cf9',
        '500': '#785df5',
        '600': '#5e30eb',
        '700': '#5829d8',
        '800': '#4922b5',
        '900': '#3e1e94',
        '950': '#241065',
    },
      secondary: colors.slate,
      neutral: colors.gray,
      success: colors.emerald,
      error: colors.pink,
      danger: colors.amber,
      transparent: colors.transparent,
      opacity: colors.opacity,
      white: colors.white,
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}