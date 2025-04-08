import {createTheme} from "@mui/material";
import {cyan, grey, red} from "@mui/material/colors";

const theme = createTheme(
    {
        palette: {
            primary: {
                main: cyan[500]
            },
            secondary: {
                main: grey[900]
            },
            text: {
                primary: "#fff"
            },
            error: {
                main: red[400]
            }
        }
}
)


export default theme;

