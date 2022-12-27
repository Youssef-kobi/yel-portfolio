/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fill: (theme) => ({
        red: theme('colors.red.primary'),
      }),
      // animation: {
      //   marquee: 'marquee 30s linear infinite',
      //   marquee2: 'marquee2 30s linear infinite',
      //   cart: 'transition: left .5s cubic-bezier(0.820, 0.085, 0.395, 0.895);',
      // },
      // keyframes: {
      //   marquee: {
      //     '0%': { transform: 'translateX(0%)' },
      //     '100%': { transform: 'translateX(-100%)' },
      //   },
      //   marquee2: {
      //     '0%': { transform: 'translateX(100%)' },
      //     '100%': { transform: 'translateX(0%)' },
      //   },
      //   slideLeft: {
      //     '0%': {
      //       transform: 'translateX(-100%)',
      //     },
      //     '100%': {
      //       transform: 'translateX(0)',
      //     },
      //   },
      // },
      colors: {
        // white: {
        //   pure: '#ffffff',
        //   light: '#f5f7fb',
        // },
        blue: {
          dark: '#1f1f38',
          darkLight: '#2c2c6c',
          light: '#4db5ff',
        },
        black: {
          light: '#495057',
          faded: '#0000004d',
        },
        // gray: {
        //   base: '#5f5f5f',
        //   light: '#ebebeb',
        //   background: '#fafafa',
        //   primary: '#dbdbdb',
        // },
        // red: {
        //   primary: '#ed4956 ',
        // },
      },
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
      },
      // boxShadow: {
      //   '005': '0 0 5px',
      // },
      // variants: {
      //   display: ['group-hover'],
      // },
    },
  },
  plugins: [],
}
