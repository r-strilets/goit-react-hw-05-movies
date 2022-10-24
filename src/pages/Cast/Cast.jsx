import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieCredits } from 'utils/fetchApi/fetchApi';
import { MoveiCredits } from 'components/MovieCredits/MovieCredits';

const Cast = () => {
  const [movieCredits, setMovieCredits] = useState(null);
  const [isloading, setIsloading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    setIsloading(true);
    fetchMovieCredits(movieId)
      .then(resp => {
        setMovieCredits(resp.data.cast);
      })
      .catch(setError)
      .finally(() => setIsloading(false));
  }, [movieId]);
  return (
    <>
      {isloading && ''}
      {error && ''}
      {movieCredits && <MoveiCredits movieCredits={movieCredits} />}
    </>
  );
};
export default Cast;
