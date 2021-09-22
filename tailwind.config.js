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
    },
    // screens: {
    //   '2xl': { max: '1537px' },
    //   xl: { max: '1281px' },
    //   lg: { max: '1025px' },
    //   md: { max: '769px' },
    //   sm: { max: '641px' },
    // },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
