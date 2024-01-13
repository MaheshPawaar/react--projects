import './App.css';
import Accordion from './components/accordion';
import RandomColor from './components/hex-color';

function App() {
  return (
    <div className="App">
      {/* Accorion Component */}
      <Accordion />

      {/* Random Color Component */}
      <RandomColor/>
    </div>
  );
}

export default App;
