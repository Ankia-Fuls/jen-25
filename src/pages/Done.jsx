import { useState } from "react";
import RubyFunc from "../components/Functions/rubyFunction.jsx";

function Done({ setState }) {
  const done = () => {
    setState(0);
  };


  return (
    <>
      <h1>Done</h1>
      <span className="jp">
        {/* Happy 25th birthday */}

        <RubyFunc version={0} />

        <button onClick={done}>Reset</button>
      </span>
    </>
  );
}

export default Done;
