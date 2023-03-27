import { useState } from 'react';
import './App.css';
import { Counter } from './components/Counter';
import { GenreSelect } from './components/GenreSelect';
import { SearchForm } from './components/SearchForm';

const genreNames = [
  "All",
  "Comedy",
  "Romance",
  "Cartoon"
];

function App() {

  const [currentGenre, setCurrentGenre] = useState("All");

  // This is a dummy callback to demonstrate the search has been triggered.
  const handleSearch = (text) => alert(`Looking for ${text}`);

  const handleGenreSelect = (selectedGenre) => setCurrentGenre(selectedGenre);

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
    </div>
  );
}

export default App;
