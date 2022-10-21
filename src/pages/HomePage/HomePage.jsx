import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchApi } from 'utils/fetchApi/fetchApi';

export const HomePage = () => {
  const [movies, setMovies] = useState([]);

  const location = useLocation();

  useEffect(() => {
    fetchApi().then(resp => setMovies(resp.data.results));
  }, []);
  return (
    <>
      <ul>
        {movies.map(({ id, original_title: title }) => (
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
