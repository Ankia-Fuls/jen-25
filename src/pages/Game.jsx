import { useState } from "react";
import "../css/Game.scss";

import RockBreaker from "../components/Sigil/RockBreaker.jsx";
import GraspingWind from "../components/Sigil/GraspingWind.jsx";
import PyreBall from "../components/Sigil/PyreBall.jsx";
import MindWipe from "../components/Sigil/MindWipe.jsx";
import TimeRewind from "../components/Sigil/TimeRewind.jsx";
import SnugStone from "../components/Sigil/SnugStone.jsx";
import WaterBlade from "../components/Sigil/WaterBlade.jsx";
import LightSeal from "../components/Sigil/LightSeal.jsx";
import SylphShoes from "../components/Sigil/SylphShoes.jsx";
import SerpentBed from "../components/Sigil/SerpentBed.jsx";
import Iceberg from "../components/GamePage/Iceberg.jsx";
import Vines from "../components/GamePage/Vines.jsx";
import Rock from "../components/GamePage/Rock.jsx";
import Paper from "../components/GamePage/Paper.jsx";

function Game({ setState }) {
  // VARIABLES
  const [styles, setStyles] = useState({
    'rockbreaker': 'svg',
    'graspingwind': 'svg',
    'pyreball': 'svg',
    'timerewind': 'svg',
    'snugstone': 'svg',
    'waterblade': 'svg',
    'lightseal': 'svg',
    'sylphshoes': 'svg',
    'serpentbed': 'svg',
  });

  const [cleared, setCleared] = useState({
    rock: 0,
    vines: 0,
    paper: 0,
    iceberg: 0
  });

  const [displayText, setDisplayText] = useState("Uncover the hidden words...");
  const [selectedSigil, setSelectedSigil] = useState("");


  // Complete game, move on to final page
  const done = () => {
    setState(2);
    // maybe add small timer before setting to see effects
  };

  // Reset to start page
  const reset = () => {
    setState(3);
  }

  // Select a sigil
  const select = (selected) => {
    if (selectedSigil) {
      // sigil already in storage
      // reset the selected styling
    }

    // set styling
    // set selectedSigil variable
  }

  const action = (selected) => {
    console.log(selected)
    if (selectedSigil) {
      // check if sigil selected
      // check if sigil is correct - call function if correct
      // else call clear function and update display text with funny quip
    }
    else {
      // change text to say something about what was selected
    }
  }

  const correct = (sigil, icon) => {
    // set icon se clear variables vir display
    // set die sigil se css om uit te grey
    // check if all 4 done - if yes, run done function
    // run clearing function to reset all variables to initial state
  }

  const clearSelection = () => {
    // clear selected styling
    // clear selected variable
  }




  return (
    <section className="game-page">

      <div className="text-block">
        {displayText}
      </div>

      <button onClick={() => select("rockbreaker")}>{<RockBreaker styling={styles.rockbreaker} />}</button>
      <button onClick={() => select("graspingwind")}>{<GraspingWind styling={styles.graspingwind} />}</button>
      <button onClick={() => select("pyreball")}>{<PyreBall styling={styles.pyreball} />}</button>
      <button onClick={() => select("timerewind")}>{<TimeRewind styling={styles.timerewind} />}</button>
      <button onClick={() => select("snugstone")}>{<SnugStone styling={styles.snugstone} />}</button>
      <button onClick={() => select("waterblade")}>{<WaterBlade styling={styles.waterblade} />}</button>
      <button onClick={() => select("lightseal")}>{<LightSeal styling={styles.lightseal} />}</button>
      <button onClick={() => select("sylphshoes")}>{<SylphShoes styling={styles.sylphshoes} />}</button>
      <button onClick={() => select("serpentbed")}>{<SerpentBed styling={styles.serpentbed} />}</button>

      <button onClick={reset}>{<MindWipe />}</button>

      <button onClick={() => action("iceberg")} inert={cleared.iceberg}>{<Iceberg cleared={cleared.iceberg} />}</button>
      <button onClick={() => action("vines")} inert={cleared.vines}>{<Vines cleared={cleared.vines} />}</button>
      <button onClick={() => action("rock")} inert={cleared.rock}>{<Rock cleared={cleared.rock} />}</button>
      <button onClick={() => action("paper")} inert={cleared.paper}>{<Paper cleared={cleared.paper} />}</button>


      {/* TO BE REMOVED */}
      <button onClick={done}>DONE</button>
    </section>
  );
}

export default Game;
