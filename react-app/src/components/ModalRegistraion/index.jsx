import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../App";
import "./style.css";
import { Form, Button } from "react-bootstrap";
import AlertPopup from "../AlertPopup";

export default ({ changeRegPopupActive }) => {
    const { api, setToken, userMatch3, setUserMatch3 } = useContext(Context);

    const nav = useNavigate();

    const [playerName, setPlayerName] = useState("");
    const [surname, setSurname] = useState("");
    const [avatar, setAvatar] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState();

    const handler = e => {
        e.preventDefault();
        let currentEmail = ""
        api.regPlayer({ "email": email, "password": password, "avatar": avatar, "playername": playerName, "surname": surname })
            .then(res => res.json())
            .then(data => {
                setPlayerName("");
                setSurname("");
                setAvatar("");
                setPassword("");
                if (data.message === "New player is added") {
                    api.authPlayer({ "email": email, "password": password })
                        .then(res => res.json())
                        .then(data => {
                            if (data.error) {
                                setError(data.error);
                            } else {
                                setError();
                                localStorage.setItem("tokenMatch3", data.token);
                                localStorage.setItem("userMatch3", JSON.stringify(data.player));
                                setToken(data.token);
                                setUserMatch3(JSON.stringify(data.player));
                                changeRegPopupActive(false)
                            }
                        })
                }

            })
    }



    return <div className={changeRegPopupActive ? "popupBox active" : "popupBox"}>
        <div className="popup neon__border__type__1 neon__text__type__2">
            <div className="popupClose" onClick={e => { changeRegPopupActive(false) }}>x</div>
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
                <Form.Group>
                    <Form.Label>Email </Form.Label>
                    <Form.Control
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className="neon__border__type__1 input"
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password </Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className="neon__border__type__1 input"
                    />
                </Form.Group>
                <Button variant="warning" type="submit" className="btn__type__1 neon__border__type__2 neon__text__type__2">Registration</Button>
            </Form>
        </div>
        {error ? <AlertPopup error={error} /> : <></>}
    </div>
}
