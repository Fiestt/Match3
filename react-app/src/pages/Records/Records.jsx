import React, { useState, useContext, useEffect } from "react";
import "./Records.css";
import { Context } from "../../App";
import Card from "../../components/Card";

export default () => {
    const { api } = useContext(Context);
    const [users, setUsers] = useState();
    const [cardsSort, setCardsSort] = useState("score");

    useEffect(() => {
        api.getPlayers()
            .then(res => res.json())
            .then(data => {
                setUsers(data);
            })
    }, [])


    const sortCards = (sortFlag) => {
        const copyCards = users.concat();
        const sortedCards = copyCards.sort((a, b) => { return a[sortFlag] > b[sortFlag] ? 1 : -1 });
        setUsers(sortedCards);
    }

    return <div>
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
        <div className="card__container">
            {users && users.map((d) =>
                <Card key={d.id} info={d} />
            )}
        </div>
    </div> 



}