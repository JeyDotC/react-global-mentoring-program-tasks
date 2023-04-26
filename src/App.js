import './App.css';
import { MovieListPage } from './pages/MovieListPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MovieSearchPage } from './pages/MovieSearchPage';
import { MovieDetailsPage } from './pages/MovieDetailsPage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MovieListPage />}>
          <Route index element={<MovieSearchPage />} />
          <Route path=':movieId' element={<MovieDetailsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
