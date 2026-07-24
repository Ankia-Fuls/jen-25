import { useState, useEffect } from "react";

import "../css/Gallery.scss";

import { QifreyHat, OllyHat, GirlsHat } from "../components/Decorations/Hats.jsx";
import { Star1, Star2, Star3, Star4 } from "../components/Decorations/Stars.jsx";
import { Brushbuddy1, Brushbuddy2, Brushbuddy3, Brushbuddy4, Brushbuddy5, Brushbuddy6 } from "../components/Decorations/BrushBuddy.jsx";
import { Girls, QifreyGlasses, QifreyShoes, CocoShoes, CocoPen, CocoBook, Ribbon1, Ribbon2, Dream } from "../components/Decorations/Other.jsx";
import ToJen from "../components/StartPage/ToJenSVG.jsx";

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


function Gallery({ setState }) {

    const back = () => {
        setState(4);
    }

    return (
        <section className="gallery--page">
            <div className="header-wrapper">
                <button onClick={back} className="gallery--button">Go Back</button>
                <h1 className="gallery--header">Gallery</h1>
            </div>

            <h2 className="subheading">Sigils</h2>
            <div className="content-wrapper">
                <RockBreaker />
                <GraspingWind />
                <PyreBall />
                <SnugStone />
                <WaterBlade />
                <LightSeal />
                <SylphShoes />
                <SerpentBed />
                <TimeRewind />
                <MindWipe />
            </div>

            <h2 className="subheading">Game Images</h2>
            <div className="content-wrapper grid-4">
                <Iceberg cleared={0} />
                <Iceberg cleared={1} />

                <Vines cleared={0} />
                <Vines cleared={1} />

                <Rock cleared={0} />
                <Rock cleared={1} />

                <Paper cleared={0} />
                <Paper cleared={1} />
            </div>

            <h2 className="subheading">Brushbuddies</h2>
            <div className="content-wrapper">
                <Brushbuddy1 />
                <Brushbuddy2 />
                <Brushbuddy3 />
                <Brushbuddy4 />
                <Brushbuddy5 />
                <Brushbuddy6 />
            </div>

            <h2 className="subheading">Hats</h2>
            <div className="content-wrapper">
                <QifreyHat />
                <OllyHat />
                <GirlsHat />
            </div>

            <h2 className="subheading">Personal Items</h2>
            <div className="content-wrapper">
                <QifreyGlasses />
                <QifreyShoes />
                <CocoShoes />
                <CocoBook />
                <CocoPen />
            </div>

            <h2 className="subheading">Decorations and Doodles</h2>
            <div className="content-wrapper">
                <Ribbon1 />
                <Ribbon2 />
                <Star1 />
                <Star2 />
                <Star3 />
                <Star4 />
                <Girls />
                <Dream />
                <ToJen />
            </div>

        </section>
    );
}

export default Gallery;