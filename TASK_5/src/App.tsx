import { useState } from 'react';
import './App.css';
import { Button } from 'antd';

function App() {

  const [theme, setTheme] = useState<boolean>(true);

  return (
    <div className="App">
      <header className="App-header" style={{backgroundColor : theme ? "#282c34" : "#fff"}}>
          <Button type="dashed" onClick={() => setTheme(!theme)}>Toggle Theme Mode : {theme ? "Dark" : "Light"}</Button>
      </header>
    </div>
  );
}

export default App;
