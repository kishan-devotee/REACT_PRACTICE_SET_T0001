
import { Button } from 'antd'
import './App.css';
import CounterPage from './components/CounterPage';

function App() {
  return (
    <div className="App">
      <h1>Counter Application</h1>
      <header className="App-header">
       <CounterPage />
      </header>
    </div>
  );
}

export default App;
