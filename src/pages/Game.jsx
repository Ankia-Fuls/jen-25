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

import { QifreyGlasses } from "../components/Decorations/Other.jsx";
import { Brushbuddy6 } from "../components/Decorations/BrushBuddy.jsx";

function Game({ setState }) {
  // VARIABLES
  const [styles, setStyles] = useState({
    rockbreaker: "svg",
    graspingwind: "svg",
    pyreball: "svg",
    timerewind: "svg",
    snugstone: "svg",
    waterblade: "svg",
    lightseal: "svg",
    sylphshoes: "svg",
    serpentbed: "svg",
  });

  const [cleared, setCleared] = useState({
    rock: 0,
    vines: 0,
    paper: 0,
    iceberg: 0,
  });

  const [displayText, setDisplayText] = useState("Uncover the hidden words...");
  const [selectedSigil, setSelectedSigil] = useState("");
  const [amountCorrect, setAmountCorrect] = useState(0);

  const correctStates = {
    iceberg: {
      correct: "pyreball",
      incorrect: {
        rockbreaker: "I don't think ice counts as rock...",
        graspingwind: "It's a bit big to be pulled...",
        timerewind: "Do icebergs start as something else?",
        snugstone: "Maybe a bit more amplification would work?",
        waterblade: "Fighting ice with water, I like it.",
        lightseal: "It's...lighter now I guess.",
        sylphshoes: "Do icebergs have feet?",
        serpentbed: "Putting it to sleep is... interesting.",
      },
    },
    vines: {
      correct: "graspingwind",
      incorrect: {
        rockbreaker: "A bit violent for a plant.",
        pyreball: "Don't just burn it you heathen!",
        snugstone: "It's more comfy now I guess...",
        timerewind: "Were you hoping for a seed?",
        waterblade: "It's wet.",
        lightseal: "Baby you light up my plants like nobody else!",
        sylphshoes: "How would they even wear it?",
        serpentbed: "Can plants sleep?",
      },
    },
    rock: {
      correct: "rockbreaker",
      incorrect: {
        pyreball: "It's scorched now I guess.",
        graspingwind: "It's too heavy to pull.",
        snugstone: "It feels comfy, but remains in place.",
        timerewind: "I think it was still a rock a day ago...",
        waterblade: "It glances off the surface, leaving it slightly wet...",
        lightseal: "Shiny! Still there though.",
        sylphshoes: "DIY catapult! There is surely an easier way.",
        serpentbed: "A sleeping rock! Cute?",
      },
    },
    paper: {
      correct: "timerewind",
      incorrect: {
        rockbreaker: "So violent! The poor paper.",
        pyreball: "Don't just burn it, you'll ruin the word!",
        graspingwind: "It moved, what now?",
        snugstone: "It is warm to the touch, still unreadable though.",
        waterblade: "Water will ruin the ink!",
        lightseal: "...",
        sylphshoes: "...really?",
        serpentbed: "Whatever man, put that paper to bed, why not?",
      },
    },
  };

  const [success, setSuccess] = useState(false);

  // Complete game, move on to final page
  const done = () => {
    // setTimeout(() => {
    //   setState(2);
    //   clearSelection();
    // }, 1000);

    setState(2);
  };

  // Reset to start page
  const reset = () => {
    clearSelection();
    setState(3);
  };

  // Select a sigil
  const select = (selected) => {
    if (selectedSigil) {
      // sigil already in storage
      const temp_clear = {};
      temp_clear[selectedSigil] = "svg";
      temp_clear[selected] = "svg svg--chosen";
      setStyles({ ...styles, ...temp_clear });
    } else {
      const temp = {};
      temp[selected] = "svg svg--chosen";
      setStyles({ ...styles, ...temp });
    }
    setSelectedSigil(selected);
  };

  const action = (selected) => {
    // check if sigil selected
    if (selectedSigil) {
      // check if sigil is correct - call function if correct
      if (correctStates[selected].correct === selectedSigil) {
        correct(selectedSigil, selected);
      }

      // else call clear function and update display text with funny quip
      else {
        const temp = correctStates[selected].incorrect[selectedSigil] || "What?";
        setDisplayText(temp);
      }
    } else {
      // change text to say something about what was selected
      if (selected === "rock") {
        setDisplayText("It's a rock...");
      } else if (selected === "paper") {
        setDisplayText("The paper is very crumpled...");
      } else if (selected === "vines") {
        setDisplayText("I can't see through the vines.");
      } else if (selected === "iceberg") {
        setDisplayText("A large iceberg is blocking the way.");
      } else {
        setDisplayText("What?");
      }
    }
  };

  const correct = (sigil, icon) => {
    // set icon se clear variables vir display
    const temp = {};
    temp[icon] = 1;
    setCleared({ ...cleared, ...temp });

    // increment counter
    const amount = amountCorrect + 1;
    setAmountCorrect(amount);

    // Display correct
    setDisplayText("Correct!");
    setSelectedSigil("");

    // Clear die selected sigil se styling
    const temp_clear = {};
    temp_clear[selectedSigil] = "svg";
    setStyles({ ...styles, ...temp_clear });

    // if all done, complete game
    if (amount >= 4) {
      setSuccess(true);
    }
  };

  const clearSelection = () => {
    setStyles({
      rockbreaker: "svg",
      graspingwind: "svg",
      pyreball: "svg",
      timerewind: "svg",
      snugstone: "svg",
      waterblade: "svg",
      lightseal: "svg",
      sylphshoes: "svg",
      serpentbed: "svg",
    });
    setCleared({
      rock: 0,
      vines: 0,
      paper: 0,
      iceberg: 0,
    });
    setDisplayText("Uncover the hidden words...");
    setSelectedSigil("");
    setAmountCorrect(0);
  };

  return (
    <section className="game-page">
      <div className="text-block">
        {displayText}
        <span className="qifrey-glasses-game">
          <QifreyGlasses />
        </span>

        <span className={success ? "bb--game bb--success" : "bb--game"}>
          <Brushbuddy6 />
        </span>

        {success && (<button className="complete-btn" onClick={done}>continue?</button>)}

        <div className={"counter-display"}>
          <div className={"counter-display--" + amountCorrect.toString()}></div>
        </div>
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

      <button onClick={() => action("iceberg")} inert={cleared.iceberg}>
        {<Iceberg cleared={cleared.iceberg} />}
      </button>
      <button onClick={() => action("vines")} inert={cleared.vines}>
        {<Vines cleared={cleared.vines} />}
      </button>
      <button onClick={() => action("rock")} inert={cleared.rock}>
        {<Rock cleared={cleared.rock} />}
      </button>
      <button onClick={() => action("paper")} inert={cleared.paper}>
        {<Paper cleared={cleared.paper} />}
      </button>

    </section>
  );
}

export default Game;
