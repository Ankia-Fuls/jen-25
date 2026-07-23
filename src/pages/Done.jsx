import { useState } from "react";
import "../css/Done.scss";

import RubyFunc from "../components/Functions/rubyFunction.jsx";

function Done({ setState }) {
  const done = () => {
    setState(3);
  };

  const [display, setDisplay] = useState([0, 0, 0, 0]);

  return (
    <section className="done-page">
      <h1>Done</h1>
      <span className="jp">
        {/* Happy 25th birthday */}

        <RubyFunc version={0} showArray={display} />

        <button onClick={done}>Reset</button>
      </span>
    </section>
  );
}

export default Done;
