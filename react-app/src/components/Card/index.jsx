import React, { useState, useContext } from "react";
import "./style.css"

export default ({ info }) => {
    let date = new Date()

    return <div className="card neon__border__type__2" >
        <div className="card-image"></div>
        <div className="card-text">
            <h2 className="neon__text__type__1">{info.playername}</h2>
            <h2 className="neon__text__type__1">{info.surname}</h2>
            <p className="neon__text__type__1"> {info.email}</p>
        </div>
        <div className="card-stats ">
            <div className="stat">
                <div className="value neon__text__type__2">{info.score}</div>
            </div>
        </div>
    </div >
} 
