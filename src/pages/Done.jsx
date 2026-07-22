import { useState } from "react";
import RubyFunc from "../components/Functions/rubyFunction.jsx";

function Done({ setState }) {
  const done = () => {
    setState(0);
  };

  const japaneseArray1 = [
    { kanji: "君", text: "kimi" },
    { kanji: "の", text: "no" }
  ];
  const japaneseArray2 = [
    { kanji: "二", text: "ni" },
    { kanji: "十", text: "jū" },
    { kanji: "五", text: "go" },
    { kanji: "歳", text: "sai" }
  ];
  const japaneseArray3 = [
    { kanji: "の", text: "no" }
  ];
  const japaneseArray4 = [
    { kanji: "誕", text: "tan" },
    { kanji: "生", text: "jō" },
    { kanji: "日", text: "bi" }
  ];
  const japaneseArray5 = [
    { kanji: "を", text: "wo" }
  ];
  const japaneseArray6 = [
    { kanji: "お", text: "o" },
    { kanji: "め", text: "me" },
    { kanji: "で", text: "de" },
    { kanji: "とう", text: "tō" }
  ];
  const japaneseArray7 = [
    { kanji: "ご", text: "go" },
    { kanji: "ざ", text: "za" },
    { kanji: "い", text: "i" },
    { kanji: "ま", text: "ma" },
    { kanji: "す", text: "su" }
  ];


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
