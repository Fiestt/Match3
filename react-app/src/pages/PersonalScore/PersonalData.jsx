import React from "react";
import { useNavigate } from "react-router-dom";
import "./PersonalData.css"
import Card from "../../components/Card"

export default () => {
    const nav = useNavigate();
    let user = JSON.parse(localStorage.getItem("userMatch3"));

    return <div className="bg__personal">
        <button className="btn__type__1 neon__text__type__2 neon__border__type__1 logout" onClick={e => nav("/")}>back</button>
        <div className="main__title">
            <h1 className="neon__title neon__text__type__1">PERSONAL D<span className="neon__title neon__text__type__1 flicker">A</span>TA</h1>
        </div>
        <Card info={user} />
    </div>
}