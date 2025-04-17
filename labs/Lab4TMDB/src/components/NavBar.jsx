import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, InputBase } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: '100%',
}));

function NavBar() {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        if (e.key === 'Enter' && query.trim() !== '') {
            navigate(`/results?query=${query}`);
        }
    };

    return (
        <AppBar position="sticky">
            <Toolbar>
                <Typography variant="h6" noWrap sx={{ flexGrow: 1, cursor: 'pointer' }} onClick={() => navigate('/')}>
                    TMDB (Landing Page)
                </Typography>
                <Typography variant="h6" noWrap sx={{ flexGrow: 1, cursor: 'pointer' }} onClick={() => navigate('/results')}>
                    Now Playing
                </Typography>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyDown={handleSearch}
                    />
                </Search>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;