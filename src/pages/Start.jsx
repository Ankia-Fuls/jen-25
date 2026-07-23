import { useState, useEffect } from "react";
import "../css/start.scss";
import ToJen from "../components/StartPage/ToJenSVG.jsx";

import { QifreyHat, OllyHat, GirlsHat } from "../components/Decorations/Hats.jsx";
import { Star1, Star2, Star3, Star4 } from "../components/Decorations/Stars.jsx";
import { Brushbuddy1, Brushbuddy2, Brushbuddy3, Brushbuddy4, Brushbuddy5 } from "../components/Decorations/BrushBuddy.jsx";
import { Girls } from "../components/Decorations/Other.jsx";


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

      <span className="bb bb--1">
        <Brushbuddy2 />
      </span>

      <span className="bb bb--2">
        <Brushbuddy3 />
      </span>

      <span className="bb bb--3">
        <Brushbuddy1 />
      </span>

      <span className="">

      </span>
    </section>
  );
}

export default Start;
