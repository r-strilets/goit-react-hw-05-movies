import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';
import { fetchMovie } from 'utils/fetchApi/fetchApi';

export const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  // const location = useLocation();
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovie(movieId).then(data => setMovie(data));
  }, [movieId]);
  console.log(movie.data);
  return <div>MovieDetails</div>;
};
