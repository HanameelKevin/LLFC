/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#050505',
        surface: '#0A0A0A',
        primary: '#3e7cb1',
        secondary: '#FDFBF7',
        accent: '#D4AF37', // Gold for spiritual highlights
      },
      fontFamily: {
        display: ['Plus Jakarta Sans', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '2rem',
        '3xl': '3rem',
      },
      animation: {
        'reveal-up': 'revealUp 0.8s cubic-bezier(0.32, 0.72, 0, 1) forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
      },
      keyframes: {
        revealUp: {
          '0%': {
            transform: 'translateY(40px)',
            opacity: '0',
            filter: 'blur(10px)',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
            filter: 'blur(0)',
          },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
