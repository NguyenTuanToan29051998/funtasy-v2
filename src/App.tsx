import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/organisms/Header';
import HomePage from './components/templates/HomePage';

function App() {
  return (
    <Router>
      <Header />
      <HomePage />
    </Router>
  );
}

export default App;
