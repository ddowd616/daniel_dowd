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
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYzk1OTRjMzZmYzM1YzM0OGE3ZTNlMjgyNWY4NDdmZSIsIm5iZiI6MTc0MzQ0MDEyMy41MjcsInN1YiI6IjY3ZWFjOGZiMzAxNDhiODkyYWY5YmU4YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gaAhAFrKC-z2xyyoeJNXaaEf64rKd-AhsG_eqWNjdUA'
            }
        };
        axios
            .request(options)
            .then(response => {
                console.log(response.data)
                let movieArray = response.data.results.map(movie => <MovieCard data={movie}/>)
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
