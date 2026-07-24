import { useState, useEffect } from "react";
import "../css/Result.scss";

import { QifreyHat, OllyHat, GirlsHat } from "../components/Decorations/Hats.jsx";
import { Star1, Star2, Star3, Star4 } from "../components/Decorations/Stars.jsx";
import { Brushbuddy1, Brushbuddy2, Brushbuddy3, Brushbuddy4, Brushbuddy5 } from "../components/Decorations/BrushBuddy.jsx";
import { Girls, QifreyGlasses, QifreyShoes, CocoShoes, CocoPen, CocoBook, Ribbon1, Ribbon2, Dream } from "../components/Decorations/Other.jsx";

import RubyFunc from "../components/Functions/rubyFunction.jsx";

function Result({ setState }) {

    const reset = () => {
        setState(3);
    }

    const gallery = () => {
        setState(5);
    }

    return (
        <section className="final-page">
            <div className="center-text">
                <span className="text-wrapper">
                    <h1>Happy 25th Birthday Jennifer!</h1>
                </span>

                <span className="jp-final">
                    <RubyFunc version={5} />
                </span>
                <button onClick={reset}>
                    <span>Play Again</span>
                </button>
            </div>

            <span className="hat hat--qifrey" >
                <QifreyHat />
            </span>
            <span className="hat hat--olly" >
                <OllyHat />
            </span>
            <span className="hat hat--girls" >
                <GirlsHat />
            </span>

            <span className="star star--1" >
                <Star4 />
            </span>
            <span className="star star--2" >
                <Star3 />
            </span>
            <span className="star star--3" >
                <Star2 />
            </span>

            <button className="bb bb--1" onClick={gallery}>
                <Brushbuddy5 />
            </button>

            <span className="girls" >
                <Girls />
            </span>

            <div className="ribbons--container">
                <span className="ribbons--1">
                    <Ribbon1 />
                </span>
                <span className="ribbons--2">
                    <Ribbon2 />
                </span>
            </div>



        </section>
    );
}

export default Result;
