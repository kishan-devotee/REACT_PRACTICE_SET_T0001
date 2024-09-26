import './App.css';
import Navbar from './components/Header';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Home from './components/Home';
import MyWork from './components/MyWork';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <div className="App">
        <Navbar />
      <header className="App-header">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mywork" element={<MyWork />} />
        <Route path="/aboutme" element={<AboutMe />} />
      </Routes>
    </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
