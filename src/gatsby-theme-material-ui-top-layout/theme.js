import { grey } from "@mui/material/colors";
import { createTheme, darken, lighten, responsiveFontSizes, rgbToHex } from "@mui/material/styles";
import MuiOverrides from "./MuiOverrides";
// https://material-ui.com/customization/default-theme/
// Don't override here unless you mean to do it site wide.

const mainMobiusColours = {
  foundation: "#a54ccf", // purple
  discover: "#00a6e7", // blue
  decide: "#ec6624", // orange
  deliver: "#76b82a", // green
};

const coefficient = 0.3;

const mobiusColours = {
  foundation: {
    dark: rgbToHex(darken(mainMobiusColours.foundation, coefficient)),
    main: mainMobiusColours.foundation,
    light: rgbToHex(lighten(mainMobiusColours.foundation, coefficient))
  },
  discover: {
    dark: rgbToHex(darken(mainMobiusColours.discover, coefficient)),
    main: mainMobiusColours.discover,
    light: rgbToHex(lighten(mainMobiusColours.discover, coefficient))
  },
  decide: {
    dark: rgbToHex(darken(mainMobiusColours.decide, coefficient)),
    main: mainMobiusColours.decide,
    light: rgbToHex(lighten(mainMobiusColours.decide, coefficient))
  },
  deliver: {
    dark: rgbToHex(darken(mainMobiusColours.deliver, coefficient)),
    main: mainMobiusColours.deliver,
    light: rgbToHex(lighten(mainMobiusColours.deliver, coefficient))
  }
};

const theme = createTheme({
  spacing: 8,
  breakpoints: {
    keys: ["xs", "sm", "md", "lg", "xl"],
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    common: {
      black: "#000",
      white: "#fff",
    },
    mobiusFoundation: mobiusColours.foundation,
    mobiusDiscover: mobiusColours.discover,
    mobiusDecide: mobiusColours.decide,
    mobiusDeliver: mobiusColours.deliver,
    primary: {
      dark: "#00075e",
      main: "#272c8c", // foundation
      light: "#5d55bd",
    },
    secondary: {
      dark: "#29009a",
      main: "#6535cc", // discovery
      light: "#9b63ff",
    },
    error: {
      main: "#E30F8D", // options
    },
    warning: {
      main: "#FF6D38", // delivery
    },
    info: {
      main: "#bac9ff",
    },
    success: {
      main: "#76F598",
    },
    grey: {
      main: grey[300],
      dark: grey[400],
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#eeeeee",
      300: "#e0e0e0",
      400: "#bdbdbd",
      500: "#9e9e9e",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
      A100: "#d5d5d5",
      A200: "#aaaaaa",
      A400: "#303030",
      A700: "#616161",
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)",
    },
    divider: "rgba(0, 0, 0, 0.12)",
    background: {
      paper: "#fff",
      default: "#fafafa",
    },
    action: {
      active: "rgba(0, 0, 0, 0.54)",
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  },
  shadows: [
    "none",
    "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
    "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)",
    "0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)",
    "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
    "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)",
    "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
    "0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)",
    "0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)",
    "0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)",
    "0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)",
    "0px 6px 7px -4px rgba(0,0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)",
    "0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)",
    "0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)",
    "0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)",
    "0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)",
    "0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)",
    "0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)",
    "0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)",
    "0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)",
    "0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)",
    "0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)",
    "0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)",
    "0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)",
    "0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)",
  ],
  linearGradient: [
    "linear-gradient(135deg, #bdbdbd 0%, #eeeeee 100%)",
    `linear-gradient(135deg, ${mobiusColours.foundation.main} 0%, ${mobiusColours.foundation.light} 100%)`, // foundation
    `linear-gradient(135deg, ${mobiusColours.discover.main} 0%, ${mobiusColours.discover.light} 100%)`, // discovery
    `linear-gradient(135deg, ${mobiusColours.decide.main} 0%, ${mobiusColours.decide.light} 100%)`, // options
    `linear-gradient(135deg, ${mobiusColours.deliver.main} 0%, ${mobiusColours.deliver.light} 100%)`, // delivery
  ],
  shape: {
    borderRadius: 4,
  },
  transitions: {
    easing: {
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
      easeIn: "cubic-bezier(0.4, 0, 1, 1)",
      sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
    },
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
    },
  },
  typography: {
    htmlFontSize: 16,
    fontFamily: ["Montserrat", "sans-serif"].join(","),
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontFamily: ["Montserrat", "sans-serif"].join(","),
      fontWeight: 700,
      fontSize: "6rem",
      lineHeight: 1.167,
      letterSpacing: "-0.01562em",
    },
    h2: {
      fontFamily: ["Montserrat", "sans-serif"].join(","),
      fontWeight: 500,
      fontSize: "3.75rem",
      lineHeight: 1.2,
      letterSpacing: "-0.00833em",
    },
    h3: {
      fontFamily: ["Montserrat", "sans-serif"].join(","),
      fontWeight: 700,
      fontSize: "3rem",
      lineHeight: 1.167,
      letterSpacing: "0em",
    },
    h4: {
      fontFamily: ["Montserrat", "sans-serif"].join(","),
      fontWeight: 500,
      fontSize: "2.125rem",
      lineHeight: 1.235,
      letterSpacing: "0.00735em",
    },
    h5: {
      fontFamily: ["Montserrat", "sans-serif"].join(","),
      fontWeight: 400,
      fontSize: "1.5rem",
      lineHeight: 1.334,
      letterSpacing: "0em",
    },
    h6: {
      fontFamily: ["Montserrat", "sans-serif"].join(","),
      fontWeight: 500,
      fontSize: "1rem",
      lineHeight: 1.5,
      letterSpacing: "0.0075em",
    },
    subtitle1: {
      fontFamily: ["Montserrat", "sans-serif"].join(","),
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: 1.75,
      letterSpacing: "0.00938em",
    },
    subtitle2: {
      fontFamily: ["Montserrat", "sans-serif"].join(","),
      fontWeight: 500,
      fontSize: "0.875rem",
      lineHeight: 1.57,
      letterSpacing: "0.00714em",
    },
    body1: {
      fontFamily: ["Montserrat", "sans-serif"].join(","),
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: 1.5,
      letterSpacing: "0.00938em",
    },
    body2: {
      fontFamily: ["Montserrat", "sans-serif"].join(","),
      fontWeight: 400,
      fontSize: "0.875rem",
      lineHeight: 1.43,
      letterSpacing: "0.01071em",
    },
    button: {
      fontFamily: ["Montserrat", "sans-serif"].join(","),
      fontWeight: 500,
      fontSize: "0.875rem",
      lineHeight: 1.75,
      letterSpacing: "0.02857em",
      textTransform: "uppercase",
    },
    caption: {
      fontFamily: ["Montserrat", "sans-serif"].join(","),
      fontSize: "0.5rem",
      lineHeight: 1.66,
      letterSpacing: "0.03333em",
    },
    overline: {
      fontFamily: ["Montserrat", "sans-serif"].join(","),
      fontWeight: 400,
      fontSize: "0.75rem",
      lineHeight: 2.66,
      letterSpacing: "0.08333em",
      textTransform: "uppercase",
    },
  },
  zIndex: {
    mobileStepper: 1000,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
});

export default responsiveFontSizes(MuiOverrides(theme));
