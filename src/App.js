import './App.css';
import { Counter } from './components/Counter';
import { SearchForm } from './components/SearchForm';

function App() {
  return (
    <div className="App">
      <Counter count={0} />
      <SearchForm />
    </div>
  );
}

export default App;
