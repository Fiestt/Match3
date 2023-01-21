import React, { useState, useContext } from "react";
import ChangePopUp from "../ChangePopUp";


import "./style.css";

export default ({ user, setIsChangedFlag, isPersanalData }) => {
    const [changeData, setChangeData] = useState(false)

    const cardImg = {
        background: `url("${user.avatar || "https://damion.club/uploads/posts/2022-03/thumbs/1646424666_24-damion-club-p-anime-neon-art-27.jpg"}")`,
        backgroundSize: "cover",
        borderTopLeftRadius: "15px",
        borderTopRightRadius: "15px",
        
 
    }

    const changeHandler = () => {
        console.log("CHANGE activated")
        setChangeData(true)
        setIsChangedFlag(false)
    }
    return <>
        {!changeData ? <>
            <div className="card neon__border__type__2" >
                <div style={cardImg}></div>
                <div className="card-text">
                    <h2 className="neon__text__type__1">{user.playername || "No name"}</h2> 
                    <h2 className="neon__text__type__1">{user.surname || "No surname"}</h2>
                    <p className="neon__text__type__1"> {user.email}</p>
                </div>
                {isPersanalData ? <div className="change-data" onClick={changeHandler}>	
                    <p>&#9998;</p>
                </div>
                :
                <div></div>}
                <div className="card-stats ">
                    <div className="stat">
                        <div className="value neon__text__type__2">🏆 {user.score}</div>

                    </div>
                </div>
            </div >
        </> 
        :
        <>
          <ChangePopUp setChangeData={setChangeData} changeData={changeData} setIsChangedFlag={setIsChangedFlag}/>
        </>}
    </>
} 