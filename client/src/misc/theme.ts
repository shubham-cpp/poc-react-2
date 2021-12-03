import { createTheme } from "@mui/material";
import { orange, purple } from "@mui/material/colors";

const themes = createTheme({
  palette: {
    mode: "dark",
    primary: orange,
    secondary: purple,
  },
});
export default themes;
