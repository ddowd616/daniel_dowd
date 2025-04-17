import React from 'react';
import { Box, Typography, Button } from '@mui/material';

function Error({ message }) {
    return (
        <Box
            sx={{
                height: '100vh',
                width: '100vw',// makes it full height of the viewport
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                padding: 2, // optional, adds padding
            }}
        >
            <Typography variant="h4" color="error" gutterBottom>
                Oops! Something went wrong.
            </Typography>
            <Typography variant="body1" color="text.secondary" mb={2}>
                {message || 'Please try again later.'}
            </Typography>
            <Button variant="contained" color="primary" onClick={() => window.location.reload()}>
                Try Again
            </Button>
        </Box>
    );
}

export default Error;