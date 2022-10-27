import { MoviesList } from 'components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesByQuery } from 'utils/fetchApi/fetchApi';
const MoviesPage = () => {
  const [isloading, setIsloading] = useState(false);
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState(null);
  const [seacrhParams, setSeacrhParams] = useSearchParams({});
  const [query, setQuery] = useState(seacrhParams.get('query') ?? '');
  const onSubmit = e => {
    e.preventDefault();
    setQuery(e.target.query.value);

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
  }, [query, seacrhParams]);
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
export { MoviesPage };
