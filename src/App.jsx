import { useState } from 'react'
import Start from './components/Start';
import Game from './components/Game';
import Done from './components/Done';

function App() {

  const [state, setState] = useState(0);


  return (
    <>
      {state === 0 && <Start setState={setState} />}
      {state === 1 && <Game setState={setState} />}
      {state === 2 && <Done />}
    </>
  )
}

export default App
