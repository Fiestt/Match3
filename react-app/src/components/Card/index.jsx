import React, { useState, useContext } from "react";
<<<<<<< HEAD
import ChangePopUp from "../ChangePopUp";
=======
>>>>>>> 324579ec7a711f8524c0b89fd26d36aece63ac3f


import "./style.css"

export default ({ user, setIsChangedFlag, isPersanalData }) => {
    let date = new Date()

    const [changeData, setChangeData] = useState(false)
<<<<<<< HEAD
  

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
=======
    const [name, setName] = useState(info.playername)
    const [surname, setSurname] = useState(info.surname)

    const cardImg = {
        background: `url("${info.avatar || "https://damion.club/uploads/posts/2022-03/thumbs/1646424666_24-damion-club-p-anime-neon-art-27.jpg"}")`,
        borderTopLeftRadius: "15px",
        borderTopRightRadius: "15px",
        backgroundSize: "cover",
    }

    const changeHandler = () => {
        console.log("CHANGE")
        setChangeData(!changeData)
>>>>>>> 324579ec7a711f8524c0b89fd26d36aece63ac3f
    }

    return <>
        {!changeData ? <>
            <div className="card neon__border__type__2" >
                <div style={cardImg}></div>
                <div className="card-text">
<<<<<<< HEAD
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
=======
                    <h2 className="neon__text__type__1">{info.playername}<span style={{color: "red", fontSize: "20px", marginLeft: "20px"}} onClick={changeHandler}>	
        &#9998;</span></h2> 
                    <h2 className="neon__text__type__1">{info.surname}<span style={{color: "red", fontSize: "20px", marginLeft: "20px"}}>	
        &#9998;</span></h2>
                    <p className="neon__text__type__1"> {info.email}</p>
                </div>
                <div className="card-stats ">
                    <div className="stat">
                        <div className="value neon__text__type__2">🏆 {info.score}</div>
>>>>>>> 324579ec7a711f8524c0b89fd26d36aece63ac3f
                    </div>
                </div>
            </div >
        </> 
        :
        <>
<<<<<<< HEAD
          <ChangePopUp setChangeData={setChangeData} changeData={changeData} setIsChangedFlag={setIsChangedFlag}/>
=======
            <div className="card neon__border__type__2" >
                <div style={cardImg}></div>
                <div className="card-text">
                    <input type="text" value={name} onChange={e => setName(e.target.value)}/> 
                    <h2 className="neon__text__type__1">{info.surname}<span style={{color: "red", fontSize: "20px", marginLeft: "20px"}}>	
        &#9998;</span></h2>
                    <p className="neon__text__type__1"> {info.email}</p>
                </div>
                <div className="card-stats ">
                    <div className="stat">
                        <div className="value neon__text__type__2">🏆 {info.score}</div>
                    </div>
                </div>
            </div >
>>>>>>> 324579ec7a711f8524c0b89fd26d36aece63ac3f
        </>}
    </>
} 
