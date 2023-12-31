/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}',
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        'plus-jakarta-sans': ['Plus Jakarta Sans', 'sans-serif']
      },
      colors: {
        'custom-red': 'hsl(1, 90%, 64%)',
        'custom-blue': 'hsl(219, 85%, 26%)',
        'very-light-grayish-blue': 'hsl(210, 60%, 98%)',
        'light-grayish-blue-1': 'hsl(211, 68%, 94%)',
        'light-grayish-blue-2': 'hsl(205, 33%, 90%)',
        'grayish-blue': 'hsl(219, 14%, 63%)',
        'dark-grayish-blue': 'hsl(219, 12%, 42%)',
        'very-dark-blue': 'hsl(224, 21%, 14%)'
      }
    },
  },
  plugins: [require('tw-elements/dist/plugin.cjs')],
  darkMode: 'class'
}
