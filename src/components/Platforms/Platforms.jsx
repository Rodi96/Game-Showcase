import { useEffect, useState } from 'react';
import { Box, Typography, Grid, Button, Paper } from '@mui/material';
import { useGames } from '../../context/Games/useGames';
import { getPlatforms } from '../../context/Games/GameAction';
import { useNavigate } from 'react-router-dom';

export const Platforms = () => {
  const [{ platforms, loading }, dispatch] = useGames();
  const [visiblePlatforms, setVisiblePlatforms] = useState(8);
  const [sortByGames, setSortByGames] = useState('asc'); 
  const navigate = useNavigate();

  useEffect(() => {
    getPlatforms(dispatch);
  }, [dispatch]);

  const handleShowMore = () => {
    setVisiblePlatforms(visiblePlatforms + 8);
  };

  const handlePlatformClick = (platformId) => {
    navigate(`/platforms/${platformId}`);
  };

  const handleSortByGames = () => {
    const newSortOrder = sortByGames === 'asc' ? 'desc' : 'asc';
    setSortByGames(newSortOrder);
  };

  const sortedPlatforms = platforms
    .slice(0, visiblePlatforms)
    .sort((a, b) => (sortByGames === 'asc' ? a.games_count - b.games_count : b.games_count - a.games_count));

  return (
    <Box sx={{ padding: '230px 0 30px' }}>
      <Typography variant="h4" gutterBottom align="center" sx={{ color: 'white' }}> 
        Platforms
      </Typography>
      <Box sx={{ marginBottom: '20px', textAlign: 'center' }}> 
        <Button 
          variant="outlined" 
          onClick={handleSortByGames} 
          sx={{ 
            color: 'white', 
            borderColor: 'white', 
            borderRadius: '20px', 
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.5)' 
          }}
        >
          Sort by Number of Games ({sortByGames === 'asc' ? 'Ascending' : 'Descending'})
        </Button>
      </Box>
      {loading ? (
        <Typography variant="body1" align="center">Loading...</Typography> 
      ) : (
        <>
          <Grid container spacing={2}>
            {sortedPlatforms.map((platform) => (
              <Grid item key={platform.id} xs={12} sm={6} md={4} onClick={() => handlePlatformClick(platform.id)}>
                <Paper
                  sx={{
                    padding: 2,
                    borderRadius: '10px',
                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.5)',
                    cursor: 'pointer',
                  }}
                >
                  <Typography variant="h6">{platform.name}</Typography>
                  <Typography variant="body2">Total Games: {platform.games_count}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
          {visiblePlatforms < platforms.length && (
            <Box mt={2} textAlign="center">
              <Button 
                variant="contained" 
                onClick={handleShowMore} 
                sx={{ 
                  backgroundColor: 'black', 
                  color: 'white', 
                  borderRadius: '20px', 
                  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.5)' 
                }}
              >
                See More
              </Button>
            </Box>
          )}
        </>
      )}
    </Box>
  );
};
