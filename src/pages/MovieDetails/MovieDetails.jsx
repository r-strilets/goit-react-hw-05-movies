import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, useParams, useLocation, NavLink } from 'react-router-dom';

import { fetchMovie } from 'utils/fetchApi/fetchApi';
import css from './MovieDetails.module.css';

export const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [isloading, setIsloading] = useState(false);
  const [error, setError] = useState(null);

  const [posterImg, setPosterImg] = useState(null);
  const location = useLocation();
  const navigation = useNavigate();
  const { movieId } = useParams();

  useEffect(() => {
    setIsloading(true);
    fetchMovie(movieId)
      .then(resp => {
        setMovie(resp.data);
        setPosterImg(resp.data.poster_path);
        console.log(resp.data);
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
          <button type="button" onClick={onBtnClick}>
            Go back
          </button>
          <div className={css.movie}>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w500/${posterImg}`}
                alt={movie.title}
                width="300"
              />
            </div>
            <div>
              <h2>{`${movie.title} (${movie.release_date.slice(0, 4)})`}</h2>
              <p>
                User Score: {Math.round(movie.vote_count / movie.vote_average)}%
              </p>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
              <h4>Genres</h4>
              <p>{movie.genres.map(genr => genr.name).join(', ')}</p>
            </div>
          </div>
          <></>
          <p>aditional information</p>
          <ul>
            <li>
              <p>Cast</p>
            </li>
            <li>
              <p>Rewievs</p>
            </li>
          </ul>
          <></>
        </>
      )}
    </>
  );
};
