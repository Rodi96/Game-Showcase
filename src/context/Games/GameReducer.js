  const GameReducer = (state, action) => {
    console.log('Action:', action.type);
    console.log('Current State:', state);
    
    console.log(state,"state", action, 'action')
    switch (action.type) {
      case "SET_GAMES":
        return {
          ...state,
          games: action.payload
        };
        case "LOAD_MORE":
        return {
          ...state,
          games: [...state.games, ...action.payload]
        };
        case "GAMEWITH_ID":
          return {
            ...state,
            gameWithID:action.payload,
          };
          case "PLAYED_Games" : 
          return {
            ...state,
            playedGames:action.payload,
          }
      case "SET_ERROR":
        return {
          ...state,
          error: action.payload.error,
          message: action.payload.message
        };
        case "REMOVE_PLAYED_GAME":
          return {
            ...state,
            playedGames: state.playedGames.filter(game => game.id !== action.payload),
          };
      case "SET_LOADING":
        return {
          ...state,
          loading: action.payload
        };
        case "SET_LATEST_GAMES":
        return {
        ...state,
        latestGames: action.payload,
        };
        case "GET_TRAILER":
          return {
            ...state,
            gameTrailerWithID: action.payload,
          };
          case "SET_PLATFORMS":
            return {
              ...state,
              platforms: action.payload,
            };
            case "SET_GAMES_FOR_PLATFORM": 
            return {
              ...state,
              gamesForPlatform: action.payload,
            };
      default:
        return state;
    }
  };
  
  export default GameReducer;


  