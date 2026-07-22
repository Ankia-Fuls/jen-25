import { useState, useEffect } from "react";
import "../../css/Sigil.scss";

function RockBreaker({ styling }) {
  return (
    <>
      <svg className={styling} id="rock-breaker" viewBox="0 0 121.12259 121.17614" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
        <defs id="defs1" />
        <g transform="translate(-47.917137,-63.040446)">
          <path d="m 86.36687,106.22761 44.82331,0.1822" id="1__h-line-top" className="stroke" />
          <path d="m 108.77852,106.31871 -0.1822,39.63037" id="1__v-line-center" className="stroke" />
          <path d="M 87.460121,145.94908 H 129.5503" id="1__h-line-bottom" className="stroke" />
          <path d="m 98.757053,119.52883 -10.340336,10.34034 19.997393,15.12331" id="1__angle-left" className="stroke" />
          <path d="m 118.29897,119.52883 10.34034,10.34034 -19.9974,15.12331" id="1__angle-right" className="stroke" />
          <path d="m 87.824539,92.015335 9.657056,-13.119018 10.932515,10.385891 10.75031,-10.385891 10.02147,13.119018" id="1__m-top" className="stroke" />
          <path d="m 87.824539,154.69509 9.839264,13.11902 10.750307,-10.5681 10.75031,10.38589 9.83926,-12.7546" id="1__m-bottom" className="stroke" />
          <path d="m 162.89448,116.24908 0.1822,14.03006" id="1__t-right-vertical" className="stroke" />
          <path d="M 162.71227,123.53742 H 145.22024" id="1__t-right-horizontal" className="stroke" />
          <path d="m 54.115951,116.6135 -0.182208,13.66564" id="1__t-left-vertical" className="stroke" />
          <path d="m 54.298159,123.71963 17.309816,-0.18221" id="1__t-left-horizontal" className="stroke" />
          <ellipse id="1__circle-right" cx="136.47424" cy="123.27479" rx="2.090369" ry="2.0099702" className="fill" />
          <ellipse id="1__circle-left" cx="81.082832" cy="123.09258" rx="2.090369" ry="2.0099702" className="fill" />
          <ellipse id="1__container" cx="108.47843" cy="123.62852" rx="59.773796" ry="59.800571" className="stroke" />
        </g>
      </svg>
    </>
  );
}

export default RockBreaker;
