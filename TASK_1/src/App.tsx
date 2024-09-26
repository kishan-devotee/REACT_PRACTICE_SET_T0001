
import './App.css';
import HomePage from './compo/HomePage';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <HomePage  id={1} text="Hello World!"/>
      </header>
    </div>
  );
}

export default App;
