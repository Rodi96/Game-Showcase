import createApiInstance from "../../API/api";

export const setLoading = (dispatch, status) =>
  dispatch({ type: "SET_LOADING", payload: status });

export const setError = (dispatch, error) =>
  dispatch({
    type: "SET_ERROR",
    payload: { error: error.status, message: error.message },
  });

export const getGames = async (dispatch, page = 1, searchTerm = '', sortOption = '') => {
  setLoading(dispatch, true);

  try {
    let url = `https://api.rawg.io/api/games?page=${page}`;
    
    if (searchTerm) {
      url += `&search=${searchTerm}`;
    }

    if (sortOption) {
      if (sortOption === 'name') {
        url += `&ordering=name`;
      } else if (sortOption === 'release_date') {
        url += `&ordering=released`;
      }
    }

    const response = await createApiInstance(url);

    const result = response.data.results;

    if (page === 1) {
      dispatch({
        type: "SET_GAMES",
        payload: result,
      });
    } else {
      dispatch({
        type: "LOAD_MORE",
        payload: result,
      });
    }
  } catch (error) {
    dispatch({
      type: "SET_ERROR",
      payload: {
        error: true,
        message: error.message,
      },
    });
  }
};

export const removeFromPlayedGames = (dispatch, gameId) => {
  dispatch({
    type: "REMOVE_PLAYED_GAME",
    payload: gameId,
  });
};

export const getGameWithId = async (dispatch, id) => {
  setLoading(dispatch, true);

  try {
    const response = await createApiInstance(
      `https://api.rawg.io/api/games/${id}`
    );

    const result = response.data;

    console.log(response,"resopnse")

      dispatch({
        type: "GAMEWITH_ID",
        payload: result,
      });
   
  } catch (error) {
    dispatch({
      type: "SET_ERROR",
      payload: {
        error: true,
        message: error.message,
      },
    });
  }
};


export const getGamesTrailer = async (dispatch , id) => {
  setLoading(dispatch, true);

  try {
    const response = await createApiInstance(
      `https://api.rawg.io/api/games/${id}/movies`
    );

    const result = response.data;

      dispatch({
      type: "GET_TRAILER",
      payload: result,
    });
   
  } catch (error) {
    dispatch({
      type: "SET_ERROR",
      payload: {
        error: true,
        message: error.message,
      },
    });
  }
};


export const getLatestGames = async (dispatch, page = 1) => {
  setLoading(dispatch, true);

  try {
    const url = `https://api.rawg.io/api/games?page=${page}&ordering=-released&page_size=20`;
    const response = await createApiInstance(url);
    const result = response.data.results;

    dispatch({
      type: "SET_LATEST_GAMES",
      payload: result,
    });
  } catch (error) {
    console.error('API Error:', error); 
    setError(dispatch, { status: true, message: error.message });
  } finally {
    setLoading(dispatch, false);
  }
};

export const getPlatforms = async (dispatch) => {
  setLoading(dispatch, true);

  try {
    const url = `https://api.rawg.io/api/platforms?key=YOUR_API_KEY`; 
    const response = await createApiInstance(url);
    const result = response.data.results.map(platform => ({
      ...platform,
      games_count: platform.games_count, 
    }));

    dispatch({
      type: "SET_PLATFORMS",
      payload: result,
    });
  } catch (error) {
    console.error('API Error:', error); 
    setError(dispatch, { status: true, message: error.message });
  } finally {
    setLoading(dispatch, false);
  }
};


export const getGamesForPlatform = async (dispatch, platformId) => {
  setLoading(dispatch, true);

  try {
    const url = `https://api.rawg.io/api/games?platforms=${platformId}&key=YOUR_API_KEY`; 
    const response = await createApiInstance(url);
    const result = response.data.results;

    dispatch({
      type: "SET_GAMES",
      payload: result,
    });
  } catch (error) {
    console.error('API Error:', error); 
    setError(dispatch, { status: true, message: error.message });
  } finally {
    setLoading(dispatch, false);
  }
};