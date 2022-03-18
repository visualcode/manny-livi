module.exports = {
  purge: {
    enabled: true,
    content: ["./pages/**/*.js"]
  },
  theme: {
    extend: {
      fontFamily: {
        manrope: 'Manrope, serif'
      },
      colors: {
        'primary': '#2F3440',
        'onPrimary': '#F2EDE4',
        'secondary': '#666A73',
        'onSecondary': 'F2EDE4',
        'tertiary': '#D04506',
        'onTertiary': '#FDFDFC',
        'surface': '#F2EDE4',
        'onSurface': '2F3440',
        


      }
    },
  },
  plugins: []
};
