import { MoviesList } from 'components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesByQuery } from 'utils/fetchApi/fetchApi';
const MoviesPage = () => {
  const [isloading, setIsloading] = useState(false);
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState(null);

  const [query, setQuery] = useState('');
  const [setSeacrhParams] = useSearchParams({});
  const onSubmit = e => {
    e.preventDefault();
    setQuery(e.target.query.value);
    setSeacrhParams({ query: query });
    e.target.query.value = '';
  };
  useEffect(() => {
    if (query === '') {
      return;
    }
    setSeacrhParams({ query: query });
    fetchMoviesByQuery(query)
      .then(resp => setMovies(resp.data.results))
      .catch(setError)
      .finally(() => setIsloading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);
  return (
    <>
      <form action="" onSubmit={e => onSubmit(e)}>
        <input type="text" placeholder="Search movie" name="query" />
        <button>Search</button>
      </form>
      {isloading && ''}
      {error && ''}
      {movies && <MoviesList movies={movies} />}
    </>
  );
};
export default MoviesPage;
