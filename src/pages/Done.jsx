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
      {/* Happy 25th birthday */}

      <span className="jp" id="full-text">
        <RubyFunc version={0} showArray={display} />
      </span>

      <button className="jp" id="text-1">
        <RubyFunc version={1} showArray={display} />
      </button>
      <button className="jp" id="text-2">
        <RubyFunc version={2} showArray={display} />
      </button>
      <button className="jp" id="text-3">
        <RubyFunc version={3} showArray={display} />
      </button>
      <button className="jp" id="text-4">
        <RubyFunc version={4} showArray={display} />
      </button>

      <button onClick={done}>Reset</button>
    </section>
  );
}

export default Done;
