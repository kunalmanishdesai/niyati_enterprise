import { blue, pink } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
 
export const appTheme = createTheme({
    palette: {
        primary: {
          main: blue[500],
        },
        secondary: {
          main: pink[500],
        },
      },

    components: {
        // Name of the component ⚛️
        MuiButtonBase: {
        defaultProps: {
            // The default props to change
            disableRipple: false, // No more ripple, on the whole application 💣!
        },
        },
    },
});
