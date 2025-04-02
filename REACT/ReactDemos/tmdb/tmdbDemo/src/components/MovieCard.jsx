import {useEffect} from "react";

const MovieCard = ({data}) => {
    const {title,overview,vote_average,poster_path} = data
    const posterImage = `https://image.tmdb.org/t/p/w185/${poster_path}`
    useEffect(() => {
        console.log(title,overview,vote_average)
    }, []);
    return(
        <>
            <div style={{border: "red 3px solid"}}>
                <h1>{title}</h1>
                <img src={posterImage} alt={title}/>
                <p>{overview}</p>
                <p>{vote_average}</p>
            </div>


        </>
        )

}

export default MovieCard