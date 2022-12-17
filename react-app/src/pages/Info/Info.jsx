import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import "./MainPage.css"

export default () => {
    const nav = useNavigate();

    return (
        <div className="center__block">
            <div className="main__container">
                <div className="main__title">
                    <h1 className="neon__title neon__text__type__1">MATCH-<span className="neon__title neon__text__type__1 flicker">3</span> GAME</h1>
                </div>
                <div className="neon__text__type__2">
                    <br />The game was created by<br />Alexander Romanov<br />and<br />Vladislav Yurin<br />as a graduation project at<br />SberUniversity
                </div>
            </div>
        </div>

    )
}