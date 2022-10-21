import axios from 'axios';

const API_KEY = 'e15863a6aae97b6859d248b0c6515614';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const fetchApi = () => {
  return axios('trending/movie/week', { params: { api_key: API_KEY } });
};
export const fetchMovie = movieId => {
  return axios(`movie/${movieId}`, { params: { api_key: API_KEY } });
};

/* https://api.themoviedb.org/3/trending/movie/week?api_key=e15863a6aae97b6859d248b0c6515614 */
