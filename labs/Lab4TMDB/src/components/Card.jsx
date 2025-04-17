import React from 'react';
import {Card as MUICard, CardMedia, CardContent, Typography, Grid, Box} from '@mui/material';
import missingPic from '../assets/confused-what.gif'

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';
const DEFAULT_IMG = '/shining.jpg';

function Card({ movie }) {
    return (
        <Grid container direction='row' spacing={2} >
            <MUICard sx={{ height: '100%', display: 'flex', flexDirection: 'column',marginTop:4 }}>
                <CardMedia
                    component="img"
                    image={movie.poster_path ? `${IMAGE_BASE_URL}${movie.poster_path}` : `${missingPic}` }
                    alt={movie.title}
                    sx={{
                        height: 350,
                        objectFit: 'contain',
                        backgroundColor: '#000', // adds padding area in background if needed
                    }}
                />
                <Box sx={{height:120, width: 360, overflowY:'auto',textAlign:'left',paddingRight:1}}>
                    <CardContent sx={{ flexGrow: 1 }}>
                        <Typography variant="h6" gutterBottom noWrap>
                            {movie.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            { movie.overview}
                        </Typography>
                        <Typography variant="caption" display="block" mt={1}>
                            Rating: {movie.vote_average}
                        </Typography>
                    </CardContent>
                </Box>

            </MUICard>
        </Grid>

    );
}

export default Card;