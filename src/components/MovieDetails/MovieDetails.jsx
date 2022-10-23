import { Link } from 'react-router-dom';
import { BackButton } from 'components/BackButton/BackButton';
import css from './MovieDetails.module.css';
import { Suspense } from 'react';

export const MovieDetails = ({ movie, onBtnClick }) => {
  return (
    <>
      <BackButton onBtnClick={onBtnClick} />
      <div className={css.movie}>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
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

      <p>aditional information</p>
      <ul>
        <Suspense>
          <li>
            <Link to={`cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`reviews`}>Reviews</Link>
          </li>
        </Suspense>
      </ul>
    </>
  );
};
