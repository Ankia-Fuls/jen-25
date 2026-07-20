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
        {<RubyFunc kanji="君" text="kimi" />} {/* 君は??? */}
        {<RubyFunc kanji="の" text="no" />}
        {/**/}
        {<RubyFunc kanji="二" text="ni" />}
        {<RubyFunc kanji="十" text="jū" />}
        {<RubyFunc kanji="五" text="go" />}
        {<RubyFunc kanji="歳" text="sai" />}
        {<RubyFunc kanji="の" text="no" />}
        {/**/}
        {<RubyFunc kanji="誕" text="tan" />}
        {<RubyFunc kanji="生" text="jō" />}
        {<RubyFunc kanji="日" text="bi" />}
        {<RubyFunc kanji="を" text="wo" />}
        {/**/}
        {<RubyFunc kanji="お" text="o" />}
        {<RubyFunc kanji="め" text="me" />}
        {<RubyFunc kanji="で" text="de" />}
        {<RubyFunc kanji="とう" text="tō" />}
        {/**/}
        {<RubyFunc kanji="ご" text="go" />}
        {<RubyFunc kanji="ざ" text="za" />}
        {<RubyFunc kanji="い" text="i" />}
        {<RubyFunc kanji="ま" text="ma" />}
        {<RubyFunc kanji="す" text="su" />}
        <button onClick={done}>Reset</button>
      </span>
    </>
  );
}

export default Done;
