import { useState } from "react";
import Start from "./pages/Start";
import Game from "./pages/Game";
import Done from "./pages/Done";
import "./css/App.scss";

function App() {
  const [state, setState] = useState(0);

  return (
    <>
      {state === 0 && <Start setState={setState} />}
      {state === 1 && <Game setState={setState} />}
      {state === 2 && <Done setState={setState} />}
    </>
  );
}

export default App;
