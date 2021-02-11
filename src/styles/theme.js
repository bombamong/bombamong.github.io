import { red } from "@material-ui/core/colors";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import MajorMono from "../assets/fonts/MajorMonoDisplay-Regular.ttf";
import Iceland from "../assets/fonts/Iceland-Regular.ttf";

// const montserrat = {
//   fontFamily: "Montserrat",
//   fontStyle: "normal",
//   fontDisplay: "swap",
//   fontWeight: 500,
//   src: `
//     url(${Montserrat}) format('truetype')
//   `,
// };

const majormono = {
  fontFamily: "Major Mono",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: "normal",
  src: `
    url(${MajorMono}) format('truetype')
  `,
};

const iceland = {
  fontFamily: "Iceland",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: "normal",
  src: `
    url(${Iceland}) format('truetype')
  `,
};

// const montserratSemiBold = {
//   fontFamily: "Montserrat",
//   fontStyle: "normal",
//   fontDisplay: "swap",
//   fontWeight: 600,
//   src: `
//     url(${MontserratSemiBold}) format('truetype')
//   `,
// };

let theme = createMuiTheme({
  typography: {
    fontFamily: ["Iceland", "Major Mono"].join(","),
  },
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#3366CC",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
    // text:{
    //   secondary: rgba(255, 255, 255, 0.7)
    // }
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [iceland, majormono],
      },
    },
  },
});
theme = responsiveFontSizes(theme);

export default theme;
