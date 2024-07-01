import  { useReducer, useMemo } from "react";
import PropTypes from "prop-types"; 
import { GameContext } from "./GameContext";
import GameReducer from "./GameReducer";

export const GamesState = ({ children }) => {
  const initialState = {
    games: {},
    gameWithID: {},
    playedGames: [],
    loading: false,
    error: false,
    message: "",
    latestGames: [],
    platforms: [],
  };


  const [state, dispatch] = useReducer(GameReducer, initialState);

  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <GameContext.Provider value={contextValue}>
      {children}
    </GameContext.Provider>
  );
};

GamesState.propTypes = {
  children: PropTypes.node.isRequired 
};

export default GamesState;