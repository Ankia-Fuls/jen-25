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
  const done = () => {
    setState(2);
  };
  return (
    <section className="game-page">
      <span>{<RockBreaker />}</span>
      <span>{<GraspingWind />}</span>
      <span>{<PyreBall />}</span>
      <span>{<MindWipe />}</span>
      <span>{<TimeRewind />}</span>
      <span>{<SnugStone />}</span>
      <span>{<WaterBlade />}</span>
      <span>{<LightSeal />}</span>
      <span>{<SylphShoes />}</span>
      <span>{<SerpentBed />}</span>
      <span>{<Iceberg />}</span>
      <span>{<Vines />}</span>
      <span>{<Rock />}</span>
      <span>{<Paper />}</span>
      <button onClick={done}>DONE</button>
    </section>
  );
}

export default Game;
