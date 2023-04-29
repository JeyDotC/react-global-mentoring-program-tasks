import './App.css';
import { MovieListPage } from './pages/MovieListPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MovieSearchPage } from './pages/MovieSearchPage';
import { MovieDetailsPage } from './pages/MovieDetailsPage';
import { MovieAddPage } from './pages/MovieAddPage';
import { MovieSuccessPage } from './pages/MovieSuccessPage';
import { MovieEditPage } from './pages/MovieEditPage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MovieListPage />}>
          <Route element={<MovieSearchPage />}>
            <Route index element={<></>} />
            <Route path='new' element={<MovieAddPage />}  />
            <Route path=':movieId/edit' element={<MovieEditPage />} />
            <Route path='success' element={<MovieSuccessPage />} />
          </Route>
          <Route path=':movieId' element={<MovieDetailsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
