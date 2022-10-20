import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchApi } from 'utils/fetchApi/fetchApi';

export const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const location = useLocation();
  const searchParametr = location.pathname.replace(/s/g, '');

  useEffect(() => {
    fetchApi(searchParametr).then(data => setMovie(data));
  }, [searchParametr]);
  console.log(movie.data);
  return <div>MovieDetails</div>;
};
