module.exports = {
  content: {
    enabled: true,
    content: [
      "./pages/**/*.js",
      "./comps/**/*.js"
    ]
  },

  theme: {
    screens: {
      xxs: '320px',
      xs: '480px',
      sm: '568px',
      md: '768px',
      lg: '992px',
      xl: '1312px',
      xxl: '1440px'
    },
    extend: {
      fontFamily: {
        sans: "-apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Ubuntu, roboto, noto, arial, sans-serif",
        // serif: "-apple-system-ui-serif, ui-serif, 'Georgia', serif",
      },
      fontSize: {
        'displayXLarge': '4.3rem',
        'displayLarge': '3.583rem',
        'displayMedium': '2.986rem',
        'displaySmall': '2.488rem',
        'displayXSmall': '2.074rem',
        'headingMedium': '1.44rem',
        'headingSmall': '1.2rem',
        'headingXSmall': '0.694rem',
        'bodyLarge': '1rem',
        'bodySmall': '1.2rem',
        'bodyXSmall': '0.694rem',
        'linkLarge': '1rem',
        'linkSmall': '0.833rem',
        'introMedium': '1.44rem',
        'introSmall': '1.2rem'
      },
      lineHeight: {
        '0': '1em',
        '1': '1.2em',
        '2': '1.125em',
        '3': '1.11em',
        '4': '1.115em',
        '5': '1.388em',
        '6': '1.333em',
        '7': '1.71em',
        '8': '1.6em',
        '9': '1.43em',
      },
      letterSpacing: {
        tightest: '-1.33px',
        tighter: '-1.06px',
        tight: '-0.85px',
        medium: '-0.71px',
        large: '-0.58px',
        xlarge: '-0.45px',
        xxlarge: '-0.31px',
        xxxlarge: '-0.15',
        xxxxlarge: '0.38px',
        normal: '0'

      },
      textColor: {
        /* Light Mode colours */
        'text-primary-l': '#2F3440',
        'text-onPrimary-l': '#F2EDE4',
        'text-secondary-l': '666A73',
        'text-onSecondary-l': '#F2EDE4',
        'text-tertiary-l': '#D04506',
        /* Dark Mode colours */
        'text-primary-d': '#F2EDE4',
        'text-onPrimary-d': '#F2EDE4',
        'text-secondary-d': '666A73',
        'text-onSecondary-d': '#F2EDE4',
        'text-tertiary-d': '#D04506',
      },
      colors: {
        /* Light Mode colours */
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
        /* Dark Mode colours */
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
