import { alpha, createTheme } from "@mui/material/styles";

const MuiOverrides = (theme) =>
  createTheme(theme, {
    palette: {
      // FIX: Added correct custom color definitions
      foundation: {
        main: theme.palette.mobiusFoundation.main,
        light: theme.palette.mobiusFoundation.light,
        dark: theme.palette.mobiusFoundation.dark,
        contrastText: '#fff',
      },
      discover: {
        main: theme.palette.mobiusDiscover.main,
        light: theme.palette.mobiusDiscover.light,
        dark: theme.palette.mobiusDiscover.dark,
        contrastText: '#fff',
      },
      decide: {
        main: theme.palette.mobiusDecide.main,
        light: theme.palette.mobiusDecide.light,
        dark: theme.palette.mobiusDecide.dark,
        contrastText: '#fff',
      },
      deliver: {
        main: theme.palette.mobiusDeliver.main,
        light: theme.palette.mobiusDeliver.light,
        dark: theme.palette.mobiusDeliver.dark,
        contrastText: '#fff',
      },
      // FIX: Added undefined color for practices without mobiusTag
      undefined: {
        main: theme.palette.grey[500],
        light: theme.palette.grey[300],
        dark: theme.palette.grey[700],
        contrastText: '#fff',
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          html {
            scroll-padding-top: 90px;
          }
        `,
      },
      MuiButton: {
        defaultProps: {
          color: "grey",
        },
        styleOverrides: {
          root: {
            borderRadius: "2rem",
          },
        },
        variants: [
          {
            props: { variant: "contained", color: "grey" },
            style: {
              color: theme.palette.getContrastText(theme.palette.grey[300]),
            },
          },
          {
            props: { variant: "outlined", color: "grey" },
            style: {
              color: theme.palette.text.primary,
              borderColor:
                theme.palette.mode === "light"
                  ? "rgba(0, 0, 0, 0.23)"
                  : "rgba(255, 255, 255, 0.23)",
              "&.Mui-disabled": {
                border: `1px solid ${theme.palette.action.disabledBackground}`,
              },
              "&:hover": {
                borderColor:
                  theme.palette.mode === "light"
                    ? "rgba(0, 0, 0, 0.23)"
                    : "rgba(255, 255, 255, 0.23)",
                backgroundColor: alpha(
                  theme.palette.text.primary,
                  theme.palette.action.hoverOpacity
                ),
              },
            },
          },
          {
            props: { color: "grey", variant: "text" },
            style: {
              color: theme.palette.text.primary,
              "&:hover": {
                backgroundColor: alpha(
                  theme.palette.text.primary,
                  theme.palette.action.hoverOpacity
                ),
              },
            },
          },
          {
            props: { color: "warning" },
            style: {
              color: theme.palette.common.white,
            },
          },
        ],
      },
    },
  });

export default MuiOverrides;