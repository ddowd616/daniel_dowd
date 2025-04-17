import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import api from '../api';
import Card from './Card';
import Error from './Error';
import { Grid } from '@mui/material';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function Results() {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(false);
    const query = useQuery().get('query');

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const endpoint = query ? `/search/movie?query=${query}` : '/movie/now_playing';
                const res = await api.get(endpoint);
                setMovies(res.data.results);
            } catch (err) {
                setError(true);
            }
        };
        fetchMovies();
    }, [query]);

    if (error) return <Error message="Oops! Something went wrong fetching the movies." />;
    if (!movies.length) return <Error message="No movies found." />;

    return (
        <Grid container spacing={3} alignItems="stretch">
            {movies.map((movie) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
                    <Card movie={movie} />
                </Grid>
            ))}
        </Grid>
    );
}

export default Results;