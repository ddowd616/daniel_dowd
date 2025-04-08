import MediaCard from "./components/MediaCard.jsx";
import {Button, ThemeProvider} from "@mui/material";
import theme from "./components/UI/ThemeDemo.jsx";


const App = () =>  {

    const theStyles = {
        mx:5,
        border:"10px red solid"
    }

  return (
    <>
        <ThemeProvider theme={theme}>
        <h1>Hi</h1>
        <Button variant="contained" color="success"
        sx={theStyles}>Contained</Button>
        <Button variant="outlined" color="error">Bad</Button>
        <MediaCard/>
        </ThemeProvider>
    </>
  )
}

export default App
