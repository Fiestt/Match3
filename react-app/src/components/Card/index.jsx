import React, { useState, useContext } from "react";
import "./style.css"

export default ({ info }) => {
    let date = new Date()

    const cardImg = {
        background: `url("${info.avatar || "https://damion.club/uploads/posts/2022-03/thumbs/1646424666_24-damion-club-p-anime-neon-art-27.jpg"}")`,
        borderTopLeftRadius: "15px",
        borderTopRightRadius: "15px",
        backgroundSize: "cover",
    }

    return <div className="card neon__border__type__2" >
        <div style={cardImg}></div>
        <div className="card-text">
            <h2 className="neon__text__type__1">{info.playername}</h2>
            <h2 className="neon__text__type__1">{info.surname}</h2>
            <p className="neon__text__type__1"> {info.email}</p>
        </div>
        <div className="card-stats ">
            <div className="stat">
                <div className="value neon__text__type__2">🏆 {info.score}</div>
            </div>
        </div>
    </div >
} 
