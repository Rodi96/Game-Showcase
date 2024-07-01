import { useEffect } from 'react';
import { Box, Grid, Typography, Pagination, Paper } from '@mui/material';
import { useGames } from '../../context/Games/useGames';
import { getLatestGames } from '../../context/Games/GameAction';

export const NewReleases = () => {
  const [{ latestGames, loading }, dispatch] = useGames();
  console.log('Context Value:', { latestGames, loading });

  useEffect(() => {
    getLatestGames(dispatch);
  }, [dispatch]);

  const handlePageChange = (event, value) => {
    getLatestGames(dispatch, value);
  };

  return (
    <Box sx={{ padding: 2, marginTop: '230px', marginBottom: '20px' }}>
      <Grid container justifyContent="center" alignItems="center" spacing={2} marginBottom="10px">
        <Grid item>
          <Typography variant="h4" gutterBottom sx={{ color: 'white' }}>
            New Releases
          </Typography>
        </Grid>
      </Grid>
      {loading ? (
        <Typography>Loading...</Typography>
      ) : (
        <Grid container spacing={2}>
          {latestGames.map((game) => (
            <Grid item key={game.id} xs={12} sm={6} md={4}>
              <Paper sx={{ padding: 2, borderRadius: '10px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.5)' }}>
                <Typography variant="h6">{game.name}</Typography>
                <Typography variant="body2">
                  The game plans to be released on: {game.released}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      )}
      <Grid container justifyContent="center" alignItems="center" sx={{ marginTop: '10px' }}>
      <Pagination 
          count={10} 
          onChange={handlePageChange} 
          sx={{ pt: '20px', color: 'white', '& .MuiPaginationItem-root': { color: 'white' } }} 
        />
      </Grid>
    </Box>
  );
};
