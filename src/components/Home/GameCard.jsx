import { Card, CardContent, CardMedia, Typography, Button, IconButton, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useGames } from '../../context/Games/useGames';
import { useCallback, useState } from 'react';
import { removeFromPlayedGames } from '../../context/Games/GameAction';

const GameCard = ({ game, isInLibrary = false, showDetails }) => { 
  const [gamesState, gamesDispatch] = useGames();
  const { playedGames } = gamesState;

  const addToPlayedGames = useCallback(() => {
    const result = [...playedGames, game];
    gamesDispatch({
      type: 'PLAYED_Games',
      payload: result,
    });
  }, [game, gamesDispatch, playedGames]);

  const removeFromLibrary = useCallback(() => {
    removeFromPlayedGames(gamesDispatch, game.id);
  }, [game.id, gamesDispatch]);

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div style={{ position: 'relative' }}>
      <Link to={`/games/${game.id}`} style={{ textDecoration: 'none' }}>
        <Card style={{ height: '100%' }}>
          <Box
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ overflow: 'hidden', height: '240px' }}
          >
            <CardMedia
              component="img"
              height="240"
              image={game.background_image}
              alt={game.name}
              style={{ transition: 'transform 0.5s', transform: isHovered ? 'scale(1.1)' : 'scale(1)' }}
            />
          </Box>
          {showDetails && ( 
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {game.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Released: {game.released}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Rating: {game.rating}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Rating Count: {game.ratings_count}
              </Typography>
            </CardContent>
          )}
        </Card>
      </Link>
      {isInLibrary ? (
        <IconButton
          onClick={removeFromLibrary}
          color="secondary"
          style={{ position: 'absolute', bottom: 0, right: 0 }}
        >
          <RemoveIcon />
        </IconButton>
      ) : (
        <Button
          onClick={addToPlayedGames}
          variant="contained"
          color="primary"
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            borderRadius: '50%',
            backgroundColor: 'black',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
            transform: 'scale(0.5)',
          }}
        >
          <AddIcon style={{ color: 'white' }} />
        </Button>
      )}
    </div>
  );
};

GameCard.propTypes = {
  game: PropTypes.object.isRequired,
  isInLibrary: PropTypes.bool,
  showDetails: PropTypes.bool.isRequired, 
};

export default GameCard;
