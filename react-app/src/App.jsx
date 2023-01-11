import React, { useEffect, useState, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import ReactAudioPlayer from 'react-audio-player';

import "./App.css"

import MainPage from "./pages/Main/MainPage"
import PersonalData from "./pages/PersonalScore/PersonalData"
import FirstPage from "./pages/FirstPage/FirstPage";
import Info from "./pages/Info/Info";
import Api from "./Api.js";
import Map1 from "./pages/Map1/Map1";
import Records from "./pages/Records/Records";

import music from "./music/Mareux.mp3";

const Context = React.createContext({});


export default () => {
    const [token, setToken] = useState();
    const [api, setApi] = useState(new Api(token));
    const [userMatch3, setUserMatch3] = useState();
    useEffect(() => {
        setApi(new Api(token));
        setToken(localStorage.getItem("tokenMatch3"));
    }, [token]);

    // setToken(localStorage.getItem("tokenMatch3"));

    return (
        <Context.Provider value={{
            api: api,
            setApi: setApi,
            setToken: setToken,
            token: token,
            userMatch3: userMatch3,
            setUserMatch3: setUserMatch3,
        }}>
            <div className="bg">
                <ReactAudioPlayer
                    src={music}
                    autoplay
                    volume={0.2}
                    loop
                    controls
                    className="audio"
                />

                <Routes>
                    {!token && <Route path="" element={<FirstPage />} />}
                    {token && <Route path="" element={<MainPage />} />}
                    <Route path="/maps" element={<Map1 />} />
                    <Route path="/map1" element={<></>} />
                    <Route path="/map2" element={<></>} />
                    <Route path="/map3" element={<></>} />
                    <Route path="/records" element={<Records />} />
                    <Route path="/info" element={<Info />} />
                    <Route path="/personaldata" element={<PersonalData />} />
                </Routes>
            </div>
        </Context.Provider>
    )
}

export { Context };