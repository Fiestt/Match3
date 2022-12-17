import React, { useState } from "react";
import "./FirstPage.css"
import ModalAuth from "../../components/ModalAuthorization";
import ModalReg from "../../components/ModalRegistraion";

export default () => {
    const [authPopupActive, changeAuthPopupActive] = useState(false);
    const [regPopupActive, changeRegPopupActive] = useState(false);

    return (
        <div className="center__block"> 
            <div className="main__container">
                <div className="main__title">
                    <h1 className="neon__title neon__text__type__1">MATCH-<span className="neon__title neon__text__type__1 flicker">3</span> GAME</h1>
                </div>
                <div className="main__options">
                    <button
                        className="btn__type__1 neon__text__type__2 neon__border__type__1"
                        onClick={e => { changeAuthPopupActive(true) }}
                    >
                        Authorization</button>
                    <button
                        className="btn__type__1 neon__text__type__2 neon__border__type__1"
                        onClick={e => { changeRegPopupActive(true) }}
                    >Registration</button>
                </div>
            </div>
            {authPopupActive ? <ModalAuth changeAuthPopupActive={changeAuthPopupActive}/> : <></>}
            {regPopupActive ? <ModalReg changeRegPopupActive={changeRegPopupActive}/> : <></>}
        </div>
    )
}