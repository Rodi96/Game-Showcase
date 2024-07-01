import { Container, Box, Typography } from '@mui/material';
import { useEffect, useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGames } from '../../context/Games/useGames';
import { getGameWithId, getGamesTrailer, setLoading } from '../../context/Games/GameAction';
import GameCard from './GameCard';

const GameDetail = () => {
  const { id } = useParams();
  const [showDetails, setShowDetails] = useState(false);

  const [gamesState, gamesDispatch] = useGames();
  const { gameWithID, gameTrailerWithID } = gamesState;

  const fetchGames = useCallback(
    async () => {
      await getGameWithId(gamesDispatch, id);
      await getGamesTrailer(gamesDispatch, id);
      setLoading(gamesDispatch, false);
    },
    [gamesDispatch, id]
  );

  useEffect(() => {
    fetchGames();
  }, []);

  useEffect(() => {
    setShowDetails(true);
  }, []);

  return (
    <Container style={{ marginTop: '230px', marginBottom: '30px' }}>
      <Box
        sx={{
          borderRadius: '10px',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          padding: '20px',
        }}
      >
        {gameWithID && (
          <GameCard
            game={gameWithID}
            addToLibrary={() => {}}
            redirectToGameDetails={() => {}}
            showDetails={showDetails} 
          />
        )}
        {gameTrailerWithID && gameTrailerWithID?.results && gameTrailerWithID?.results[0] && gameTrailerWithID?.results[0]?.data && (
          <Box sx={{ marginTop: '30px', border: '2px solid black', padding: '10px' }}>
            <Typography variant="h5" style={{ color: 'white' }}>Game Trailer</Typography>
            <video controls width="600" style={{ height: 'calc(200px + 200px)' }}>
              <source src={gameTrailerWithID.results[0].data.max} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default GameDetail;
