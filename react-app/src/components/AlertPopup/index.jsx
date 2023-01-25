import React, { useState, useContext } from "react";
import { useEffect } from "react";
import "./style.css"

export default ({ error }) => {
    const [errorMessage, setErrorMessage] = useState();
    useEffect(() => {
        if (error === "Password is wrong!") { setErrorMessage("Login or password is wrong!") }
        else if (error === "Player does not exist") { setErrorMessage("You are not registred!") }
        else { setErrorMessage(error) }
    }, [])
    return <div className="alert__popup neon__border__type__2 neon__text__type__1">{errorMessage}</div>
} 
