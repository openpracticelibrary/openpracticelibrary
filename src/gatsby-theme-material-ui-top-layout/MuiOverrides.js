import { alpha, createTheme } from "@mui/material/styles";

const MuiOverrides = (theme) =>
  createTheme(theme, {
    palette: {
      foundation: {
        main: theme.palette.text.primary,
      },
      discovery: {
        main: theme.palette.text.secondary,
      },
      options: {
        main: theme.palette.text.primary,
      },
      delivery: {
        main: theme.palette.text.primary,
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          html: {
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
