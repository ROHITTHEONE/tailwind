module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    colors: {
      orange: "F26C45",
      white: "#FFFFFF",
      black: "#000000",
    },
    fontFamily: {
      serif: ["BIZ UDPMincho", "serif"],
      sans: ["Roboto", "sans-serif"],
    },
  },
  variants: {
    extend: {
      borderBottom: ["hover", "active"],
    },
  },
  plugins: [],
};
