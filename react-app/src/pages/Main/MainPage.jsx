import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./MainPage.css"
import { Context } from "../../App";

export default () => {
    const nav = useNavigate();
    const { setToken, setUserMatch3 } = useContext(Context);

    const logout = () => {
        setToken();
        setUserMatch3();
        localStorage.removeItem("tokenMatch3");
        localStorage.removeItem("userMatch3");
    }
    return (
        <div className="center__block">
            <button className="btn__type__1 neon__text__type__2 neon__border__type__1 logout" onClick={e => logout()}>Logout</button>
            <div className="main__container">
                <div className="main__title">
                    <h1 className="neon__title neon__text__type__1">MATCH-<span className="neon__title neon__text__type__1 flicker">3</span> GAME</h1>
                </div>
                <div className="main__options">
                    <button className="btn__type__1 neon__text__type__2 neon__border__type__1" onClick={e => nav("/maps")}>Maps</button>
                    <button className="btn__type__1 neon__text__type__2 neon__border__type__1" onClick={e => nav("/records")}>Records</button>
                    <button className="btn__type__1 neon__text__type__2 neon__border__type__1" onClick={e => nav("/info")}>Info</button>
                    <button className="btn__type__1 neon__text__type__2 neon__border__type__1" onClick={e => nav("/personaldata")}>Personal data</button>
                </div>
            </div>
        </div>

    )
}
