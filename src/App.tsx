import "./App.css";
import { Counter } from "./components/Counter";
import { SetCounter } from "./components/SetCounter";
import { useState } from "react";

function App() {
  const [version, setVersion] = useState(0);

  return (
    <div className="container">
      <SetCounter onSet={() => setVersion(v => v + 1)} />
      <Counter version={version}/>
    </div>
  );
}

export default App;
