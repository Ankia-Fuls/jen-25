import { useState, useEffect } from "react";
import "../css/start.scss";
import ToJen from "../components/StartPage/ToJenSVG.jsx";
import QifreyHat from "../components/Decorations/QifreyHat.jsx";

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
      {/* <QifreyHat /> */}
    </section>
  );
}

export default Start;
