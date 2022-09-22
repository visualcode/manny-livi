module.exports = {
  content: {
    enabled: true,
    content: ["./pages/**/*.js", "./comps/**/*.js"]
  },
  theme: {
    screens: {
      xs: "20rem",
      sm: "23.438rem",
      md: "37.5rem", // 600px
      lg: "48rem", // 768px
      xl: "50rem", // 800px
      "inter": "70rem", // 1120px
      xxl: "90rem"
    },
    colors: {
      /* Light Mode colours */
      "main-bg": "#FFFFFF",
      "text-primary": "#222222",
      "text-secondary": "#737373",
      "text-onColour": "#ADADAD",
      "link-rest": "#737373",
      "link-hover": "#D4D4D4",
      "border-divider": "#D4D4D4",
      /* Dark Mode colours */
      "main-bg-d": "#212121",
      "text-primary-d": "#FFFFFF",
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
      "fontSize-6": "3.815rem",
      "fontSize-5": "3.052rem",
      "fontSize-4": "2.441rem",
      "fontSize-3": "1.563rem",
      "fontSize-2": "1.25rem",
      "fontSize-1": "1rem",
      "fontSize-0": "0.875rem"
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
