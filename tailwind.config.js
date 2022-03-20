module.exports = {
  content: {
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
      lineHeight: {
        '11': '8.313rem'
      },
      textColor: {
        'text-primary-l': '#2F3440',
        'text-onPrimary-l': '#F2EDE4',
        'text-secondary-l': '666A73',
        'text-onSecondary-l': '#F2EDE4',
        'text-tertiary-l': '#D04506',
      },
      colors: {
        'primary-l': '#2F3440',
        'onPrimary-l': '#F2EDE4',
        'secondary-l': '#666A73',
        'onSecondary-l': 'F2EDE4',
        'tertiary-l': '#D04506',
        'onTertiary-l': '#FDFDFC',
        'surface-l': '#F2EDE4',
        'onSurface-l': '#2F3440',
        'onSurfaceInverse-l': '#D9D1C7',
        'outline-l': '#D9D1C7',

        'primary-d': '#F2EDE4',
        'onPrimary-d': '#2F3440',
        'secondary-d': '#A6B1B9',
        'onSecondary-d': '#020203',
        'tertiary-d': '#FF763A',
        'onTertiary-d': '#020203',
        'surface-d': '#2F3440',
        'onSurface-d': '#F2EDE4',
        'onSurfaceInverse-d': '#585D6B',
        'outline-d': '#585D6B',
      }
    },
  },
  plugins: [
    require('tailwindcss')('./tailwind.config.js'),
    require('autoprefixer')
  ]
};
