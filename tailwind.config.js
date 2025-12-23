/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fbf7e6',
          100: '#f5ebc3',
          200: '#ecd990',
          300: '#e3c258',
          400: '#dba92e',
          500: '#d48f14',
          600: '#b86f10',
          700: '#925010',
          800: '#784013',
          900: '#633514',
        },
        gold: {
          DEFAULT: '#d48f14',
          50: '#fbf7e6',
          100: '#f5ebc3',
          200: '#ecd990',
          300: '#e3c258',
          400: '#dba92e',
          500: '#d48f14',
          600: '#b86f10',
          700: '#925010',
          800: '#784013',
          900: '#633514',
        },
        dark: '#0a0a0a',
        light: '#fafafa',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Outfit', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

