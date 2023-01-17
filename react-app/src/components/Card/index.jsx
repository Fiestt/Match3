import React, { useState, useContext } from "react";


import "./style.css"

export default ({ info }) => {
    let date = new Date()

    const [changeData, setChangeData] = useState(false)
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
    }

    return <>
        {!changeData ? <>
            <div className="card neon__border__type__2" >
                <div style={cardImg}></div>
                <div className="card-text">
                    <h2 className="neon__text__type__1">{info.playername}<span style={{color: "red", fontSize: "20px", marginLeft: "20px"}} onClick={changeHandler}>	
        &#9998;</span></h2> 
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
        </> 
        :
        <>
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
        </>}
    </>
} 
