import './App.css';
import { MovieListPage } from './components/MovieListPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<MovieListPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
