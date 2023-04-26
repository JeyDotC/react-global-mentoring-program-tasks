import './App.css';
import { MovieListPage } from './pages/MovieListPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MovieSearchPage } from './pages/MovieSearchPage';
import { MovieDetailsPage } from './pages/MovieDetailsPage';
import { MovieAddPage } from './pages/MovieAddPage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MovieListPage />}>
          <Route element={<MovieSearchPage />}>
            <Route index element={<></>} />
            <Route path='new' element={<MovieAddPage />} />
          </Route>
          <Route path=':movieId' element={<MovieDetailsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
