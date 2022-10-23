import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { MovieReviews } from 'components/MovieReviews/MovieReviews';
import { fetchMovieReviews } from 'utils/fetchApi/fetchApi';

const Reviews = () => {
  const [movieReviews, setMovieCredits] = useState(null);
  const [isloading, setIsloading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    setIsloading(true);
    fetchMovieReviews(movieId)
      .then(resp => {
        setMovieCredits(resp.data.results);
      })
      .catch(setError)
      .finally(() => setIsloading(false));
  }, [movieId]);
  return (
    <>
      {isloading && ''}
      {error && ''}
      {movieReviews && <MovieReviews movieReviews={movieReviews} />}
    </>
  );
};
export default Reviews;
