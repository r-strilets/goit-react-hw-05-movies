import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchApi } from 'utils/fetchApi/fetchApi';

export const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isloading, setIsloading] = useState(false);
  const [error, setError] = useState(null);

  const location = useLocation();

  useEffect(() => {
    setIsloading(true);
    fetchApi()
      .then(resp => setMovies(resp.data.results))
      .catch(setError)
      .finally(() => setIsloading(false));
  }, [isloading]);
  return (
    <>
      <ul>
        {isloading && ''}
        {error && ''}
        {movies &&
          movies.map(({ id, original_title: title }) => (
            <li key={id}>
              <Link to={`movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};
