import Results from './components/Results.jsx'
import Error from './components/Error.jsx'
import NavBar from "./components/NavBar.jsx";
import {Box, ThemeProvider} from "@mui/material";
import {Route,Routes} from 'react-router-dom'
import theme from './components/ui/Theme.jsx'
import Background from './assets/movie_background.jpeg'

const Landing = () => (
    <div className="landing" style={{}}>
      <button onClick={() => (window.location.href = '/results')}>See What’s Now Playing</button>
    </div>
);


const App = () => {


  return (
    <>
<Box
    sx={{
        height: '100vh',
        backgroundImage: `url(${Background})`,
        width: '100vw',// makes it full height of the viewport
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        textAlign: 'center',
        padding: 2, // optional, adds padding
    }}>
    <ThemeProvider theme={theme}>
        <NavBar position="fixed" sx={{ top: 0, left: 0, right: 0 }}/>
        <Routes>
            <Route path="/" element={<Landing/>} />
            <Route path="/results" element={<Results/>} />
            <Route path="*" element={<Error/>} />
        </Routes>
    </ThemeProvider>
</Box>


    </>
  )
}

export default App
