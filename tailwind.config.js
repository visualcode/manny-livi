module.exports = {
  content: {
    enabled: true,
    content: ["./pages/**/*.js", "./comps/**/*.js"]
  },
  theme: {
    screens: {
      xs: "320px",
      sm: "375",
      md: "600px",
      lg: "768px",
      xl: "1440px"
    },
    colors: {
      /* Light Mode colours */
      "main-bg": "#FFFFFF",
      "text-primary": "#737373",
      "text-secondary": "#ADADAD",
      "text-onColour": "#D4D4D4",
      "link-rest": "#737373",
      "link-hover": "#D4D4D4",
      "border-divider": "#D4D4D4",
      /* Dark Mode colours */
      "main-bg-d": "#212121",
      "text-primary-d": "#737373",
      "text-secondary-d": "#ADADAD",
      "text-onColour-d": "#222222",
      "link-rest-d": "#D4D4D4",
      "link-hover-d": "#737373",
      "border-divider-d": "#737373"
    },
    fontFamily: {
      sans: [
        "Assistant",
        "-apple-system",
        "BlinkMacSystemFont",
        "avenir next",
        "avenir",
        "segoe ui",
        "helvetica neue",
        "helvetica",
        "Ubuntu",
        "roboto",
        "noto",
        "arial",
        "sans-serif"
      ]
      // sans: "-apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Ubuntu, roboto, noto, arial, sans-serif"
      // serif: "-apple-system-ui-serif, ui-serif, 'Georgia', serif",
    },
    fontSize: {
      "text-4xl": "3.815rem",
      "text-3xl": "3.052rem",
      "text-xl": "2.441rem",
      "text-l": "1.563rem",
      "text-m": "1.25rem",
      "text-sm": "1rem",
      "text-xs": "0.875rem"
    },
    lineHeight: {
      0: "4.5rem",
      1: "3.5rem",
      2: "2.5rem",
      3: "2rem",
      4: "1.5rem",
      5: "1rem"
    },
    fontWeight: {
      regular: "400",
      semibold: "600",
      bold: "700",
      extrabold: "800"
    },
    letterSpacing: {
      0: "0"
    }
  },
  plugins: [
    require("tailwindcss")("./tailwind.config.js"),
    require("autoprefixer")
  ]
};
