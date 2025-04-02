import {BrowserRouter as B_Router,Link,Route,Routes} from "react-router-dom";

import './App.css'
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import axios from "axios";
import MovieCard from "./components/MovieCard.jsx";
import {useState} from "react";



const App = () => {

    const [movies,setMovies] = useState("");

    const handleClick = () =>{
        //endpoint
        //xml json
        //how much data
        //what does data look like
        //https://api.themoviedb.org/3/movie/now_playing
        const options = {
            method: 'GET',
                url: 'https://api.themoviedb.org/3/movie/now_playing',
                params: {language: 'en-US', page: '1'},
            headers: {
                accept: 'application/json',
                    Authorization: `Bearer ${process.env.VITE_TMDB_API_TOKEN}`
            }
        };
        axios
            .request(options)
            .then(response => {
                console.log(response.data)
                let movieArray = response.data.results.map((movie,i) => <MovieCard data={movie} key={i}/>)
                setMovies(movieArray)

            })
            .catch(error => {
                console.error(error)
            })
    }

  return (
    <>
      <h1>App Comp</h1>
        <B_Router>
            <div className="App">
                <ul>
                    <li>
                    {/*normal we would use anchor tags*/}
                        <Link to="/home">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact">
                            Contact
                        </Link>
                    </li>
                </ul>
                <hr/>
                <Routes>
                    <Route path={"/home"} element={<Home/>}/>
                    <Route path={"/about"} element={<About/>}/>
                    <Route path={"/contact"} element={<Contact/>}/>
                </Routes>
            </div>
        </B_Router>
        <button onClick={handleClick}>Now Playing</button>
        {movies}
    </>
  )
}

export default App
