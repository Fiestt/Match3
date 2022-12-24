import React, { useState, useContext, useEffect } from "react";
import "./PersonalData.css"
import { Context } from "../../App";
import Card from "../../components/Card"

export default () => {
    let user = JSON.parse(localStorage.getItem("userMatch3"));

    return <div className="bg__personal">
        <Card info={user} />
    </div>
}