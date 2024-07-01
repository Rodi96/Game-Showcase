import axios from 'axios';

const API_KEY = 'ff9e292b5b634fedb6d346d2b477adbf'; 
const baseURL = 'https://api.rawg.io/api';

const createApiInstance = (baseURL,page) => {

  return axios.get(
    baseURL,
   { params: {
      key: API_KEY,
      page,
      baseURL
    }},
  );
};

// export const platformsApi = createApiInstance('https://api.rawg.io/api/platforms');

export default createApiInstance;