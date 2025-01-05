/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          'custom-cyan': 'hsl(180, 66%, 49%)',
          'dark-violet': 'hsl(257, 27%, 26%)'
        },
        secondary: {
          'custom-red': 'hsl(0, 87%, 67%)'
        },
        neutral: {
          'custom-gray': 'hsl(0, 0%, 75%)',
          'grayish-violet': 'hsl(257, 7%, 63%)',
          'very-dark-blue': 'hsl(255, 11%, 22%)',
          'very-dark-violet': 'hsl(260, 8%, 14%)',
        }
      },
      backgroundImage: {
        'boost-pattern-desktop': 'url("./assets/images/bg-boost-desktop.svg")',
        'boost-pattern-mobile': 'url("./assets/images/bg-boost-mobile.svg")',
        'shorten-pattern-desktop': 'url("./assets/images/bg-shorten-desktop.svg")',
        'shorten-pattern-mobile': 'url("./assets/images/bg-shorten-mobile.svg")'
      },
      fontFamily: {
        primaryRegular: ['Regular'],
        primaryBold: ['Bold']
      }
    },
  },
  plugins: [],
}
