import { Link, useLocation } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <>
      <ul>
        {movies &&
          movies.map(({ id, original_title: title }) => (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export { MoviesList };
