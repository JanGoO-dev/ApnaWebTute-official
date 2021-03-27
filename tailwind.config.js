module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "apna": {
          "dark": "#2E3647",
          "light": "#363f53"
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
