import { useState, useEffect } from "react";
import Start from "./pages/Start";
import Game from "./pages/Game";
import Done from "./pages/Done";
import Reset from "./pages/Reset";

import "./css/App.scss";

function App() {
  const [state, setState] = useState(0);

  useEffect(() => {
    if (state === 3) {
      setTimeout(() => {
        setState(0);
      }, 3100)
    }
  }, [state])

  return (
    <>
      {state === 0 && <Start setState={setState} />}
      {state === 1 && <Game setState={setState} />}
      {state === 2 && <Done setState={setState} />}
      {state === 3 && <Reset />}
    </>
  );
}

export default App;
