import { useState, useEffect } from 'react';
import { useNavigate, useParams, useLocation, Outlet } from 'react-router-dom';
import { fetchMovie } from 'utils/fetchApi/fetchApi';
import { MovieDetails } from 'components/MovieDetails/MovieDetails';

// import css from './MovieDetails.module.css';

export const Movie = () => {
  const [movie, setMovie] = useState(null);
  const [isloading, setIsloading] = useState(false);
  const [error, setError] = useState(null);

  const location = useLocation();
  const navigation = useNavigate();
  const { movieId } = useParams();

  useEffect(() => {
    setIsloading(true);
    fetchMovie(movieId)
      .then(resp => {
        setMovie(resp.data);
      })
      .catch(setError)
      .finally(() => setIsloading(false));
  }, [movieId]);

  const onBtnClick = () => {
    navigation(location?.state?.from ?? '/');
  };

  return (
    <>
      {isloading && ''}
      {error && ''}
      {movie && (
        <>
          <MovieDetails
            movie={movie}
            movieId={movieId}
            onBtnClick={onBtnClick}
          />
          <Outlet />
        </>
      )}
    </>
  );
};
