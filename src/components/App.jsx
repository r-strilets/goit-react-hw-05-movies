import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { HomePage } from 'pages/HomePage/HomePage';
import { MoviesPage } from 'pages/HomePage/MoviesPage/MoviesPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
      </Route>
      {/* https://api.themoviedb.org/3/movie/550?api_key=e15863a6aae97b6859d248b0c6515614 */}
      {/* https://api.themoviedb.org/3/trending/movie/week?api_key=e15863a6aae97b6859d248b0c6515614 */}
    </Routes>
  );
};
