import React, { useState, useContext } from "react";
import "./style.css"

export default ({ error }) => {
    console.log(error)
    return <div className="alert__popup neon__border__type__2 neon__text__type__1">{error}</div>
} 
