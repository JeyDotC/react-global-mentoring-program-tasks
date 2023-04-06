import { useState } from 'react';
import './App.css';
import { Counter } from './components/Counter';
import { GenreSelect } from './components/GenreSelect';
import { MovieTitle } from './components/MovieTitle';
import { SearchForm } from './components/SearchForm';
import { MovieDetails } from './components/MovieDetails';
import { SortControl } from './components/SortControl';
import { Dialog } from './components/Dialog';

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

  const [currentGenre, setCurrentGenre] = useState("All");
  const [currentSortOption, setCurrentSortOption] = useState("Release Date");
  const [showDialog, setShowDialog] = useState(false);

  // This is a dummy callback to demonstrate the search has been triggered.
  const handleSearch = (text) => alert(`Looking for ${text}`);

  const handleGenreSelect = (selectedGenre) => setCurrentGenre(selectedGenre);

  const handleSortControlChange = (sortOption) => setCurrentSortOption(sortOption);

  return (
    <div className="App">
      <h2>Learn React</h2>
      <Counter />
      <SearchForm initialSearchText="" onSearch={handleSearch} />
      <GenreSelect
        genreNames={genreNames}
        currentGenre={currentGenre}
        onSelect={handleGenreSelect}
      />
      <SortControl id="Sort-Control"
        options={[
          "Release Date",
          "Title",
        ]}
        currentSelection={currentSortOption}
        onChange={handleSortControlChange}
      />
      <MovieTitle
        movieData={pulpFiction}
        onClick={(movie) => console.log(movie)}
      />
      <MovieDetails
        movieData={pulpFiction}
      />
      <button onClick={() => setShowDialog(true)}>Open Dialog</button>
      <Dialog 
        title={<h1>My Cool Dialog</h1>}
        show={showDialog}
        onCloseButtonClicked={() => setShowDialog(false)}
      >
        <p>Hello World!</p>
      </Dialog>
    </div>
  );
}

export default App;
