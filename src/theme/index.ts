import { createTheme, PaletteOptions } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const palette: PaletteOptions = {
  mode: "dark",
  primary: {
    main: "#FFFFFF",
    contrastText: "#101827",
  },
  secondary: {
    main: "#DFF5FF",
  },
  background: {
    default: "#101827",
  },
  text: {
    primary: "#FFFFFF",
    secondary: "#9CA3AF",
  },
  error: {
    main: red.A400,
  },
  grey: {
    A700: "#232A36",
  },
};

const theme = createTheme({
  palette,
});

export default theme;
