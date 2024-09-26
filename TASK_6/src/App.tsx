import React from 'react';
import logo from './logo.svg';
import './App.css';
import ShowData from './components/ShowData';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ShowData api="https://jsonplaceholder.typicode.com/users"/>
      </header>
    </div>
  );
}

export default App;
