module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'footer-dots': 'url("/assets/dots.png")',
        'subscription-colorful': 'url("/assets/email.webp")',
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        mono: ['DM Mono', 'sans-serif'],
      },
      colors: {
        optim: {
          dark: '#131415',
        },
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        'fade-in': 'fade-in linear 0.2s',
        transform: 'transform linear 0.2s',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
