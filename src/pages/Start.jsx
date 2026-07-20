import { useState, useEffect } from "react";
import "../css/start.scss";
import ToJen from "../components/StartPage/ToJenSVG.jsx";

function Start({ setState }) {
  const Add = () => {
    setState(1);
  };

  return (
    <section className="starting-page">
      {<ToJen />}
      <span className="starting-message">
        Let the hunt <button onClick={Add}>begin</button>
      </span>
    </section>
  );
}

export default Start;
