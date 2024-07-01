import { useEffect, useCallback, useState } from 'react';
import { Grid, CircularProgress, Button, Typography, Container, Select, MenuItem, InputBase, IconButton, Paper, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useGames } from '../../context/Games/useGames';
import GameCard from './GameCard';
import { getGames, setLoading } from '../../context/Games/GameAction';

export const Home = () => {
  const [gamesState, gamesDispatch] = useGames();
  const { games, loading, error } = gamesState;

  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('');

  const fetchGames = useCallback(async (pages, search = '', sort = '') => {
    await getGames(gamesDispatch, pages, search, sort);
    setLoading(gamesDispatch, false);
  }, [gamesDispatch]);

  useEffect(() => { 
      fetchGames(page, searchTerm, sortOption);
  }, [page, searchTerm, sortOption]);

  const loadMoreGames = () => {
    setPage(page + 1);
    fetchGames(page + 1, searchTerm, sortOption);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  return (
    <Container style={{ marginTop: '230px', marginBottom: '30px' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <Paper elevation={3} sx={{ borderRadius: '20px', padding: '2px 4px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)', marginRight: '10px' }}>
          <Select
            value={sortOption}
            onChange={handleSortChange}
            displayEmpty
            IconComponent={ArrowDropDownIcon}
            input={<InputBase style={{ paddingLeft: '10px', color: 'black' }} />}
          >
            <MenuItem value="">Sort By</MenuItem>
            <MenuItem value="name">Name</MenuItem>
            <MenuItem value="release_date">Date of Release</MenuItem>
          </Select>
        </Paper>
        <Paper component="form" elevation={3} sx={{ display: 'flex', alignItems: 'center', borderRadius: '20px', padding: '2px 4px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)', flex: 1 }}>
          <InputBase
            placeholder="Search Games"
            fullWidth
            value={searchTerm}
            onChange={handleSearchChange}
            sx={{ ml: 1, flex: 1 }}
          />
          <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
      </Box>
      {error && <Typography color="error">{error}</Typography>}
      <Grid container spacing={7}>
  {games && games.length > 0 && games?.map((game, index) => (
    <Grid item xs={12} sm={6} md={4} lg={2.4} key={`${game?.id}-${index}`} style={{ display: 'flex', justifyContent: 'center' }}>
      <GameCard game={game} />
    </Grid>
  ))}
</Grid>

      {loading && <CircularProgress style={{ marginTop: '20px' }} />}
      {!loading && games.length > 0 && (
        <Button
  variant="contained"
  color="primary"
  onClick={loadMoreGames}
  style={{
    marginTop: '20px',
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.5)',
    marginLeft: '500px',
    color: 'black'
  }}
>
       Load More
          </Button>
      )}
      {!loading && games.length === 0 && (
        <Typography variant="body1" style={{ marginTop: '20px' }}>
          No games found.
        </Typography>
      )}
    </Container>
  );
};
