import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './AppRoutes';
import { InitialState } from './contexts/InitialState';

let movieList;
let currentMovie;

if(window && window.___initialState){
  movieList = window.___initialState.movieList;
  currentMovie = window.___initialState.currentMovie;
}

function App() {

  return (
    <BrowserRouter>
      <InitialState movieList={movieList} currentMovie={currentMovie}>
        <AppRoutes />
      </InitialState>
    </BrowserRouter>
  );
}

export default App;
