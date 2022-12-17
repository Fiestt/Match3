import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css"

import MainPage from "./pages/Main/MainPage"
import PersonalData from "./pages/PersonalScore/PersonalData"
import FirstPage from "./pages/FirstPage/FirstPage";
import Info from "./pages/Info/Info";
import Api from "./Api.js";
import Map1 from "./pages/Map1/Map1"


const Context = React.createContext({});
export { Context };

export default () => {
    const [token, setToken] = useState();
    const [api, setApi] = useState(new Api(token));

    useEffect(() => {
        setApi(new Api(token));
    }, [token]);

    return (
        <Context.Provider value={{
            api: api,
            setApi: setApi,
            setToken: setToken,
            token: token,
        }}>
            <div className="center__block">
                <Routes>
                    <Route path="" element={<FirstPage />} />
                    <Route path="/main" element={<MainPage />} />
                    <Route path="/maps" element={<Map1 />} />
                    <Route path="/map1" element={<></>} />
                    <Route path="/map2" element={<></>} />
                    <Route path="/map3" element={<></>} />
                    <Route path="/records" element={<></>} />
                    <Route path="/info" element={<Info />} />
                    <Route path="/personaldata" element={<PersonalData />} />
                </Routes>

                {/* <FirstPage /> */}
                {/* <MainPage /> */}
                {/* <PersonalScore/> */}
            </div>
            {/* <Map1></Map1> */}
        </Context.Provider>
    )
}