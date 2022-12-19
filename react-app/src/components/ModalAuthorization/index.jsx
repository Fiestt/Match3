import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../App";

import { Form, Button } from "react-bootstrap";
// import Local from "../../local";

export default ({ changeAuthPopupActive }) => {
    const { api, setToken } = useContext(Context);

    const nav = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handler = e => {
        e.preventDefault();
        api.authPlayer({ "email": email, "password": password })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                // Local.setItem("shop-user", data.token);
                // Local.setItem("u", data.data, true)
                setToken(data.token);
                // setUser(data.data);
                setEmail("");
                setPassword("");
                changeAuthPopupActive(false)
                nav("/main");
            })
        nav("/main");
    }

    return <div className={changeAuthPopupActive ? "popupBox active" : "popupBox"}>
        <div className="popup neon__border__type__1 neon__text__type__2">
            <div className="popupClose" onClick={e => { changeAuthPopupActive(false) }}>x</div>
            <Form onSubmit={handler}>
                <Form.Group>
                    <Form.Label>Email </Form.Label>
                    <Form.Control
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className=" neon__border__type__1 input"
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password </Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className=" neon__border__type__1 input"
                    />
                </Form.Group>
                <Button variant="warning" type="submit" className="btn__type__1 neon__border__type__2 neon__text__type__2">Login</Button>
            </Form>
        </div>
    </div>
}
