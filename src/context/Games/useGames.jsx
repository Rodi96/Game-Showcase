import { useContext } from "react";
import { GameContext } from "./GameContext";

export const useGames = () => {
    const { state, dispatch } = useContext(GameContext);
    return [state, dispatch];
  };