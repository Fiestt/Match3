import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../App";
import "./style.css";
import { Form, Button } from "react-bootstrap";
import { useEffect } from "react";
// import Local from "../../local";

export default ({ changeData, setChangeData, isChanged, setIsChangedFlag }) => {
    const { api, setToken, userMatch3, setUserMatch3     } = useContext(Context);

    const nav = useNavigate();
    let obj = JSON.parse(localStorage.getItem("userMatch3"));
    const [playerName, setPlayerName] = useState(obj.playername);
    const [surname, setSurname] = useState(obj.surname);
    const [avatar, setAvatar] = useState(obj.avatar);

    const handler = e => {
        e.preventDefault()
        
        console.log(obj, "VVVVVV")
        obj.playername = playerName
        obj.surname = surname
        obj.avatar = avatar
        api.updPlayer(obj)
            .then(res => res.json())
            .then(data => {
                localStorage.setItem("userMatch3", JSON.stringify(data))
                console.log("set new player in local");
                setIsChangedFlag(true)
                setChangeData(false)
            })
        
    }

    // useEffect(() => {
    //     api.getOnePlayer(obj.id)
    //         .then(res => res.json())
    //         .then(data => {
    //             setPlayerName(data.playername)
    //             setSurname(data.surname)
    //             setAvatar(data.avatar)
    //             setEmail(data.email)
    //             console.log(data, "QQQQQQQQQQ");
    //         })
    // }, [isChanged])



    return <div className={changeData ? "popupBox active" : "popupBox"}>
        <div className="popup neon__border__type__1 neon__text__type__2">
            <div className="popupClose" onClick={e => { setChangeData(false) }}>x</div>
            <Form onSubmit={handler}>
                <Form.Group>
                    <Form.Label>Player name </Form.Label>
                    <Form.Control
                        type="text"
                        value={playerName}
                        onChange={e => setPlayerName(e.target.value)}
                        className="neon__border__type__1 input"
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Surname </Form.Label>
                    <Form.Control
                        type="text"
                        value={surname}
                        onChange={e => setSurname(e.target.value)}
                        className="neon__border__type__1 input"
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Avatar </Form.Label>
                    <Form.Control
                        type="text"
                        value={avatar}
                        onChange={e => setAvatar(e.target.value)}
                        className="neon__border__type__1 input"
                    />
                </Form.Group>
                <Button variant="warning" type="submit" className="btn__type__1 neon__border__type__2 neon__text__type__2">Accept changes</Button>
            </Form>
        </div>
    </div>
}