import { useEffect, useState } from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useGames } from '../../context/Games/useGames';
import { getGamesForPlatform } from '../../context/Games/GameAction';

export const PlatformGames = () => {
  const { platformId } = useParams();
  const [{ games, loading }, dispatch] = useGames();
  const [visibleGames, setVisibleGames] = useState(12); 
  const [totalGames, setTotalGames] = useState(0); 

  useEffect(() => {
    getGamesForPlatform(dispatch, platformId);
  }, [dispatch, platformId]);

  useEffect(() => {
    if (Array.isArray(games)) {
      setTotalGames(games.length);
    }
  }, [games]);

  const handleLoadMore = () => {
    setVisibleGames(visibleGames + 6); 
  };

  return (
    <Box sx={{ padding: '230px 0 30px' }}>
      <Typography variant="h4" gutterBottom align="center" sx={{ color: 'white' }}>
        Games for this Platform
      </Typography>
      {loading ? (
        <Typography variant="body1" align="center" sx={{ color: 'white' }}>Loading...</Typography>
      ) : (
        <>
          <Grid container spacing={2}>
            {Array.isArray(games) && games.slice(0, visibleGames).map((game) => (
              <Grid item key={game.id} xs={12} sm={6} md={4}>
                <Box
                  sx={{
                    padding: '20px',
                    borderRadius: '10px',
                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.5)',
                    border: '1px solid white'
                  }}
                >
                  <Typography variant="h6" sx={{ color: 'white' }}>{game.name}</Typography>
                  <Typography variant="body2" sx={{ color: 'white' }}>{game.released}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
          {visibleGames < totalGames && ( 
            <Box mt={2} textAlign="center">
              <Button variant="contained" onClick={handleLoadMore} sx={{ backgroundColor: 'black', color: 'white', borderRadius: '20px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.5)' }}>
                Load More
              </Button>
            </Box>
          )}
        </>
      )}
    </Box>
  );
};
