import './App.css';
import { Counter } from './components/Counter';
import { SearchForm } from './components/SearchForm';

function App() {
  return (
    <div className="App">
      <Counter count={12} />
      <SearchForm initialSearchText="" onSearch={(text) => alert(`Looking for ${text}`)} />
    </div>
  );
}

export default App;
