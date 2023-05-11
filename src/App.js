import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './AppRoutes';
import { InitialState } from './contexts/InitialState';

function App() {

  return (
    <BrowserRouter>
      <InitialState>
        <AppRoutes />
      </InitialState>
    </BrowserRouter>
  );
}

export default App;
