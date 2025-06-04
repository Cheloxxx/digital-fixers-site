/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        blue: {
          50: '#f0f7ff',
          100: '#e0efff',
          200: '#c0dfff',
          300: '#90c9ff',
          400: '#5aa8fd',
          500: '#3b8cf8',
          600: '#2470eb',
          700: '#1a5cd8',
          800: '#1a4db0',
          900: '#1a438d',
        },
      },
      animation: {
        'bounce': 'bounce 2s infinite',
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
    },
  },
  plugins: [],
};