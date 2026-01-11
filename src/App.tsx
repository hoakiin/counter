import "./App.css";
import { Counter } from "./components/Counter";
import { SetCounter } from "./components/SetCounter";
import { useState } from "react";

function App() {
  const [version, setVersion] = useState(0);
  const [error, setError] = useState<boolean>(false)
  const [isSetMode, setIsSetMode] = useState(true)

  return (
    <div className="container">
      <SetCounter onSet={() => setVersion(v => v + 1)} error={error} setError={setError} setIsSetMode={setIsSetMode}/>
      <Counter version={version} error={error} isSetMode={isSetMode}/>
    </div>
  );
}

export default App;
