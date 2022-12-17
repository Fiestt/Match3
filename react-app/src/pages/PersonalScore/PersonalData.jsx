import React, { useState, useContext } from "react";
import "./PersonalData.css"
import { Context } from "../../App";

export default () => {
    const { api } = useContext(Context);

    const pic = {
        backgroundImage: `url("https://damion.club/uploads/posts/2022-03/thumbs/1646424666_24-damion-club-p-anime-neon-art-27.jpg")`,
        width: "200px",
        height: "400px",
        backgroundSize: "cover",
        backgroundPosition: "center"
    }


    let date = new Date()

    return (
        <div className="score__container">
            <h1 className="score__title neon__text__type__1">Personal Data</h1>
            <div className="score__info">
                <div className="score__pic">
                    <div className="pic neon__border__type__1" style={pic}></div>
                </div>
                <div className="player__info neon__text__type__2">
                    <div className="name">Alexander Romanov</div>
                    <div className="score">Score: 999</div>
                    <div className="date">{date.getDate() + "." + date.getMonth() + "." + date.getYear() + " " + date.getHours() + "." + date.getMinutes() + "." + date.getSeconds()}</div>
                </div>
            </div>

        </div>
    )
}