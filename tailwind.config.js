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
      fontSize: {
        'displayLarge': '8.332rem',
        'displayMedium': '6.583rem',
        'displaySmall': '5.202rem',
        'headingLarge': '3.247rem',
        'headingMedium': '2.566rem',
        'headingSmall': '2.027rem',
        'labelLarge': '0.889rem',
        'labelMedium': '0.79rem',
        'labelSmall': '0.702rem',
        'paragraphLarge': '1.125rem',
        'paragraphMedium': '1rem',
        'paragraphSmall': '0.889rem'
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
        'onSurfaceInverse': '#D9D1C7',
        'outline': '#D9D1C7'
      }
    },
  },
  plugins: []
};
