import { useState, useEffect } from "react";
import "../../css/Sigil.scss";

function PyreBall({ setState }) {
  return (
    <>
      <svg className="svg" id="pyreball" viewBox="0 0 99.494102 99.494118" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
        <defs id="defs1" />
        <circle id="3__container" cx="49.747055" cy="49.747051" r="48.873589" className="stroke" />
        <g id="3__arrow-1" transform="translate(-60.28309,-65.179056)">
          <path d="m 137.9319,82.904906 10.38589,9.474848" id="path51" className="stroke" />
          <path d="m 143.21595,88.006747 -11.11472,11.114725 h 7.47055" id="path52" className="stroke" />
          <path d="m 132.07464,98.937051 -0.25788,-6.577192" id="path53" className="stroke" />
        </g>
        <g id="3__center" transform="translate(-60.28309,-65.179056)">
          <path d="m 109.87178,94.930673 -17.12761,29.882207 34.98405,0.18221 z" id="path47" className="stroke" />
          <path d="M 105.31656,112.24049 91.650919,104.0411" id="path48" className="stroke" />
          <path d="m 114.6092,111.69386 13.48344,-7.65276" id="path49" className="stroke" />
          <path d="m 109.68957,120.25767 0.18221,16.03435" id="path50" className="stroke" />
        </g>
        <g id="3__arrow-2" transform="matrix(-1,0,0,1,159.72262,-64.996848)">
          <path d="m 137.9319,82.904906 10.38589,9.474848" id="path54" className="stroke" />
          <path d="m 143.21595,88.006747 -11.11472,11.114725 h 7.47055" id="path55" className="stroke" />
          <path d="m 132.07464,98.937051 -0.25788,-6.577192" id="path56" className="stroke" />
        </g>
        <g id="3__arrow-3" transform="rotate(180,79.952415,82.292982)">
          <path d="m 137.9319,82.904906 10.38589,9.474848" id="path57" className="stroke" />
          <path d="m 143.21595,88.006747 -11.11472,11.114725 h 7.47055" id="path58" className="stroke" />
          <path d="m 132.07464,98.937051 -0.25788,-6.577192" id="path59" className="stroke" />
        </g>
        <g id="3__arrow-4" transform="matrix(1,0,0,-1,-60.283085,164.76817)">
          <path d="m 137.9319,82.904906 10.38589,9.474848" id="path60" className="stroke" />
          <path d="m 143.21595,88.006747 -11.11472,11.114725 h 7.47055" id="path61" className="stroke" />
          <path d="m 132.07464,98.937051 -0.25788,-6.577192" id="path62" className="stroke" />
        </g>
      </svg>
    </>
  );
}

export default PyreBall;
