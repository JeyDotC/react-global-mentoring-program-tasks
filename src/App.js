import { useState } from 'react';
import './App.css';
import { Counter } from './components/Counter';
import { GenreSelect } from './components/GenreSelect';
import { MovieTitle } from './components/MovieTitle';
import { SearchForm } from './components/SearchForm';
import { MovieDetails } from './components/MovieDetails';
import { SortControl } from './components/SortControl';
import { Dialog } from './components/Dialog';
import { MovieListPage } from './components/MovieListPage';

const genreNames = [
  "All",
  "Comedy",
  "Romance",
  "Cartoon"
];

const pulpFiction = {
  imageUrl: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/pulpfiction.2436_500x749.jpg?v=1620048742",
  movieName: "Pulp Fiction",
  releaseYear: 2004,
  relevantGenres: ["Action", "Adventure"],
  durationInMinutes: 154,
  description: "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",
  rating: 8.9
};

function App() {

  return (
    <MovieListPage />
  );
}

export default App;
