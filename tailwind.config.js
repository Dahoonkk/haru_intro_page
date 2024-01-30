/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideRight: {
          from: { left: '0px' },
          to: { left: '10px' },
        },
        slideLeft: {
          from: { right: '0px' },
          to: { right: '10px'}
        },
        bounce: {
          '0% 100%': {
            transform: 'translateY(-55%)',
            'animation-timing-function': 'cubic-bezier(0.8,0,1,1)',
          },
          '50%': {
            transform: 'none',
            'animation-timing-function': 'cubic-bezier(0,0,0.2,1)',
          },
        }
      },
      animation: {
        actSlideRight: 'slideRight 0.5s forwards',
        actSlideLeft: 'slideLeft 0.5s forwards',
      }
    },
  },
  plugins: [],
}