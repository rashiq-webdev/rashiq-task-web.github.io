module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  plugins: [require('daisyui'), require("@tailwindcss/typography")],
  theme: {
    screens: {
      'xs': '320px',

      'sm': '768px',
      // => @media (min-width: 576px) { ... }

      'md': '960px',
      // => @media (min-width: 960px) { ... }

      'lg': '1441px',
      'xl': '1550px',
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      width: {
        '128': '27rem',
      }
    }
  }
};
