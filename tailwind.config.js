module.exports = {
  content: {
    enabled: true,
    content: ["./pages/**/*.js", "./comps/**/*.js"]
  },

  theme: {
    screens: {
      xxs: "320px",
      xs: "480px",
      sm: "568px",
      md: "768px",
      lg: "992px",
      xl: "1312px",
      xxl: "1440px"
    },
    extend: {
      fontFamily: {
        sans: "-apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Ubuntu, roboto, noto, arial, sans-serif"
        // serif: "-apple-system-ui-serif, ui-serif, 'Georgia', serif",
      },
      fontSize: {
        displayLarge: "3.815rem",
        displaySmall: "3.052rem",
        displayXSmall: "2.441rem",
        h1Large: "3.052rem",
        h1Small: "2.441rem",
        h2Large: "2.441rem",
        h2Small: "1.563rem",
        h3Large: "1.563rem",
        h3Small: "1.25rem",
        h4Large: "1.25rem",
        h4Small: "1rem",
        intro: "1.563rem",
        introSmall: "1.25rem",
        brand: "1.25rem",
        paragraph: "1.25rem",
        body: "1rem",
        bodySmall: "0.875rem"
      },
      lineHeight: {
        0: "1.714em",
        1: "1.6em",
        2: "1.5em",
        3: "1.28em",
        4: "1.2em",
        5: "1.179em",
        6: "1.146em",
        7: "1.024em"
      },
      letterSpacing: {
        0: "0"
      },
      textColor: {
        /* Light Mode colours */
        "text-primary": "#737373",
        "text-secondary": "#ADADAD",
        "text-onColour": "#D4D4D4",
        /* Dark Mode colours */
        "text-primary-d": "#737373",
        "text-secondary-d": "#ADADAD",
        "text-onColour-d": "#222222"
      },
      backgroundColor: {
        /* Light Mode colours */
        "main-bg": "#FFFFFF",
        /* Dark Mode colours */
        "main-bg-d": "#212121"
      },
      borderColor: {
        /* Light Mode colours */
        "link-rest": "#737373",
        "link-hover": "#D4D4D4",
        "border-divider": "#D4D4D4",
        /* Dark Mode colours */
        "link-rest-d": "#D4D4D4",
        "link-hover-d": "#737373",
        "border-divider-d": "#737373"
      }
    }
  },
  plugins: [
    require("tailwindcss")("./tailwind.config.js"),
    require("autoprefixer")
  ]
};
