import { Container, Grid, Typography, Tooltip } from '@mui/material';
import { useGames } from "../../context/Games/useGames";
import GameCard from '../Home/GameCard';
import { useState } from 'react';

export const MyLibrary = () => {
  const [gamesState] = useGames();
  const { playedGames } = gamesState;
  const [showReminder, setShowReminder] = useState(false);

  const handleMouseEnter = () => {
    setTimeout(() => setShowReminder(true), 4000);
  };

  const handleMouseLeave = () => {
    setShowReminder(false);
  };

  return (
    <Container style={{ marginTop: '230px', marginBottom: '380px'}}>
      <Tooltip
        title={showReminder ? "Here is where the album of the games you have played before is stored." : ""}
        arrow
      >
<Typography
  variant="h4"
  gutterBottom
  onMouseEnter={handleMouseEnter}
  onMouseLeave={handleMouseLeave}
  style={{ cursor: 'pointer', marginLeft: '475px' }}
  color={'white'}
>
  My Library
</Typography>
      </Tooltip>
      <Grid container spacing={2}>
        {playedGames.map((game) => (
          <Grid item xs={12} sm={6} md={4} lg={2.4} key={game.id}>
            <GameCard game={game} isInLibrary />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
