import { useState } from "react";
import "../css/Done.scss";

import RubyFunc from "../components/Functions/rubyFunction.jsx";

function Done({ setState }) {
  const done = () => {
    setState(3);
  };

  const [display, setDisplay] = useState({
    "text-1": 0,
    "text-2": 0,
    "text-3": 0,
    "text-4": 0,
  });

  const [selectedWord, setSelectedWord] = useState("");

  const [styles, setStyles] = useState({
    "text-1": "jp",
    "text-2": "jp",
    "text-3": "jp",
    "text-4": "jp",
  });

  const clearSelection = () => {
    setStyles({
      "text-1": "jp",
      "text-2": "jp",
      "text-3": "jp",
      "text-4": "jp",
    });
    setDisplay({
      "text-1": 0,
      "text-2": 0,
      "text-3": 0,
      "text-4": 0,
    });
  };

  const select = (selected) => {
    if (selectedWord) {
      // word already in storage
      const temp_clear = {};
      temp_clear[selectedWord] = "jp";
      temp_clear[selected] = "jp jp--chosen";
      setStyles({ ...styles, ...temp_clear });
    } else {
      const temp = {};
      temp[selected] = "jp jp--chosen";
      setStyles({ ...styles, ...temp });
    }
    setSelectedWord(selected);
  };

  const action = (selected) => {
    // check if word selected
    if (selectedWord) {
      // check if word is correct - call function if correct
      if (selectedWord === selected) {
        correct(selectedWord, selected);
      }
      //else call clear function and update display text with funny quip
      else {
        clearSelection();
      }
    }
  };

  const correct = (word, space) => {
    // set icon se clear variables vir display
    const temp = {};
    temp[space] = 1;
    setDisplay({ ...display, ...temp });

    // Clear die selected sigil se styling
    const temp_clear = {};
    temp_clear[selectedWord] = "jp";
    setStyles({ ...styles, ...temp_clear });

    // if all done, complete game
    // if (amount === 4) {
    //   done();
    // }
  };

  return (
    <section className="done-page">
      {/* Happy 25th birthday */}

      <span className="jp" id="full-text">
        <RubyFunc version={0} showArray={display} action={action} />
      </span>

      <button className={styles["text-1"]} id="text-1" onClick={() => select("text-1")}>
        <RubyFunc version={1} action={action} />
      </button>
      <button className={styles["text-3"]} id="text-3" onClick={() => select("text-3")}>
        <RubyFunc version={2} action={action} />
      </button>
      <button className={styles["text-2"]} id="text-2" onClick={() => select("text-2")}>
        <RubyFunc version={3} action={action} />
      </button>
      <button className={styles["text-4"]} id="text-4" onClick={() => select("text-4")}>
        <RubyFunc version={4} action={action} />
      </button>

      <button onClick={done}>Reset</button>
    </section>
  );
}

export default Done;
