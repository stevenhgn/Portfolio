const themes = {
  standard: {
    spacing: 4,
    palette: {
      primary: "#007ACA",
      primaryGreen: "#4D8400",
      // Neutrals
      greyBlueTint: "#F0F2F5",
      darkGrey: "#646464",

      black: "#282828",

      lightBluetint: "#0089D9",
      darkBlueTint: "#0062A3",

      lightGreen: "#68A611",
      lighterGreen: "#8FBC8F",
      darkGreen: "2D660B",
      // content colour
      purple: "#915AD5",
      orange: "#ffa626",
      red: "#e94454",
      lightCoral: "#F08080",
      borderGrey: "#DDDDDD",
      lightGrey: "#D3D3D3",
    },
    typography: {
      fontFamily: [
        `'Fira sans', 'sans-serif', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
      'Droid Sans', 'Helvetica Neue'`,
      ].join(","),
    },
  },
};

export default themes;
