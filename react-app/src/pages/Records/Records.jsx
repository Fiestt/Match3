import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Records.css";
import { Context } from "../../App";
import Card from "../../components/Card";
import Loader from "../../components/Loader";

export default ({isPersanalData, setIsPersanalData}) => {
    const nav = useNavigate();
    const { api } = useContext(Context);
    const [users, setUsers] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsPersanalData(false)
        api.getPlayers()
            .then(res => res.json())
            .then(data => {
                setUsers(data);
                setIsLoading(false);
                console.log(data)
            })
    }, [])


    const sortCards = (sortFlag) => {
        const copyCards = users.concat();
        const sortedCards = copyCards.sort((a, b) => { return a[sortFlag] > b[sortFlag] ? 1 : -1 });
        setUsers(sortedCards);
    }

    return <div className="records">
        <button className="btn__type__1 neon__text__type__2 neon__border__type__1 logout" onClick={e => nav("/")}>back</button>
        <div className="main__title">
            <h1 className="neon__title neon__text__type__1">REC<span className="neon__title neon__text__type__1 flicker">O</span>RDS</h1>
        </div>
        <form className="sort">
            <div className="radio">
                <input type="radio" value="score" id="score" name="sort" onClick={() => sortCards("score")}></input>
                <label htmlFor="score" className="neon__text__type__2 neon__border__type__1">Score</label>
            </div>
            <div className="radio">
                <input type="radio" value="playername" id="playername" name="sort" onClick={() => sortCards("playername")}></input>
                <label htmlFor="playername" className="neon__text__type__2 neon__border__type__1">Playername</label>
            </div>
            <div className="radio">
                <input type="radio" value="surname" id="surname" name="sort" onClick={() => sortCards("surname")}></input>
                <label htmlFor="surname" className="neon__text__type__2 neon__border__type__1">Surname</label>
            </div>
        </form>
        {
            isLoading ? <Loader /> :
                <div className="card__container " >
                    {users && users.map((d) =>
                        <Card key={d.id} user={d} isPersanalData={isPersanalData}/>
                    )}
                </div>
        }
    </div>
}