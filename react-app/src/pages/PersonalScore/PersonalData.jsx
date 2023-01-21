import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PersonalData.css"
import Card from "../../components/Card"

export default ({ isPersanalData, setIsPersanalData }) => {

    const [isChangedFlag, setIsChangedFlag] = useState(false)
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("userMatch3")))
    const nav = useNavigate();

    useEffect(() => {
        setIsPersanalData(true)
    }, [])

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("userMatch3")));
        console.log("CH")
    }, [isChangedFlag])


    return <div className="bg__personal">
        <button className="btn__type__1 neon__text__type__2 neon__border__type__1 logout" onClick={e => nav("/")}>back</button>
        <div className="main__title">
            <h1 className="neon__title neon__text__type__1">PERSONAL D<span className="neon__title neon__text__type__1 flicker">A</span>TA</h1>
        </div>
        <Card user={user} setIsChangedFlag={setIsChangedFlag} isPersanalData={isPersanalData} />
    </div>
}