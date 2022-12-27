import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import "./MainPage.css"

export default () => {
    const nav = useNavigate();

    return (
        <div className="center__block">
            <button className="btn__type__1 neon__text__type__2 neon__border__type__1 logout" onClick={e => nav("/")}>back</button>
            <div className="main__container">
                <div className="main__title">
                    <h1 className="neon__title neon__text__type__1">IN<span className="neon__title neon__text__type__1 flicker">F</span>O</h1>
                </div>
                <div className="neon__text__type__2">
                    <br />The game was created by<br />Alexander Romanov<br />and<br />Vladislav Yurin<br />as a graduation project at<br />SberUniversity
                </div>
            </div>
        </div>

    )
}