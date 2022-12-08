import React from "react";
import MainPage from "./pages/Main/MainPage"
import PersonalScore from "./pages/PersonalScore/PersonalScore"
import "./App.css"

export default () => {
    return (
        <div className="center__block">
            <MainPage/>
            {/* <PersonalScore/> */}
        </div>
    )
}