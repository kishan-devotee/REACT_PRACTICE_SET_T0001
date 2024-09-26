import './App.css';

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Home from './components/Home';
import MyWork from './components/MyWork';
import AboutMe from './components/AboutMe';
import Navbar from './components/Header';

function App() {
  return (
    <div className="App">
        <Navbar />
      <header className="App-header">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/myWork" element={<MyWork />} />
        <Route path="/aboutMe" element={<AboutMe />} />
      </Routes>
      </header>
    </div>
  );
}

export default App;
