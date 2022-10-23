import { MoviesList } from 'components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';

import { fetchApi } from 'utils/fetchApi/fetchApi';

export const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isloading, setIsloading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsloading(true);
    fetchApi()
      .then(resp => setMovies(resp.data.results))
      .catch(setError)
      .finally(() => setIsloading(false));
  }, []);
  return (
    <>
      <h2>Tranding this weak</h2>
      {isloading && ''}
      {error && ''}
      {movies && <MoviesList movies={movies} />};
    </>
  );
};
