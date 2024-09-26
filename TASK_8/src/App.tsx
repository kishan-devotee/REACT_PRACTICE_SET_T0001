import { useState } from "react";
import "./App.css";
import { CountdownTimer } from "./componnts/CountdownTimer";
import { Input } from "antd";

function App() {
  const [specifiedTime, setSpecifiedTime] = useState<undefined | number>();
  return (
    <div className="App">
      <header className="App-header">
        <Input
          placeholder="Enter time in seconds"
          type="number"
          value={specifiedTime}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSpecifiedTime(+e.target.value)
          }
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          {specifiedTime ? <CountdownTimer initialTime={specifiedTime} /> : "Set Time"}
        </div>
      </header>
    </div>
  );
}

export default App;
