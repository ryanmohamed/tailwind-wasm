const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./Components/*.{razor,html}", "./Pages/*.{razor,html}", "./wwwroot/tailwind.css"],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'xs': '475px',
        ...defaultTheme.screens,
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        display: ['"Poppins"', 'sans-serif'],
      },
      colors: {
        default: {
          bg: 'var(--color-default-bg)',
          primary: 'var(--color-default-primary)',
          secondary: 'var(--color-default-secondary)',
          tertiary: 'var(--color-default-tertiary)'
        },
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' }
        },
        shrink: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.75)' }
        },
        slide: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(75%)' },
          '75%': { transform: 'translateX(-75%)' }
        },
        fadeOut: {
          '0%, 100%': { opacity: '50%' },
          '50%': { opacity: '0%' }
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        shrink: 'shrink 1s ease-in-out infinite',
        slide: 'slide 500ms ease-in-out infinite',
        fade: 'fadeOut 3s ease-in-out infinite'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'), 
    require('@tailwindcss/forms'), 
    require('@tailwindcss/aspect-ratio'),
  ],
};