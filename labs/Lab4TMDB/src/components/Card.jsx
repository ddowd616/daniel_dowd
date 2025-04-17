import React from 'react';
import { Card as MUICard, CardMedia, CardContent, Typography } from '@mui/material';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';
const DEFAULT_IMG = '/shining.jpg';

function Card({ movie }) {
    return (
        <MUICard sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardMedia
                component="img"
                image={movie.poster_path ? `${IMAGE_BASE_URL}${movie.poster_path}` : DEFAULT_IMG}
                alt={movie.title}
                sx={{
                    height: 350,
                    objectFit: 'contain',
                    backgroundColor: '#000', // adds padding area in background if needed
                }}
            />
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" gutterBottom noWrap>
                    {movie.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {movie.overview.length > 100 ? movie.overview.slice(0, 100) + '...' : movie.overview}
                </Typography>
                <Typography variant="caption" display="block" mt={1}>
                    Rating: {movie.vote_average}
                </Typography>
            </CardContent>
        </MUICard>
    );
}

export default Card;