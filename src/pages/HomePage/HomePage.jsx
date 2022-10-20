import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchApi } from 'utils/fetchApi/fetchApi';

export const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const searchParametr = 'trending/movie/week';
  const location = useLocation();
  console.log(location);
  useEffect(() => {
    fetchApi(searchParametr).then(resp => setMovies(resp.data.results));
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
