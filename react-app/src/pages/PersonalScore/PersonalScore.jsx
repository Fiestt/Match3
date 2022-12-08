import React from "react";
import "./PersonalScore.css"

export default () => {

const pic = {
    backgroundImage: `url("https://damion.club/uploads/posts/2022-03/thumbs/1646424666_24-damion-club-p-anime-neon-art-27.jpg")`,
    width: "200px",
    height: "400px",
    border: "1px red solid",
    bacgroundSize: "cover",
    backgroundPosition: "center"
}

let date = new Date()

    return (
        <div className="score__container">
            <h1 className="score__title">Personal best</h1>
            <div className="score__info">
                <div className="score__pic">
                    <div className="pic" style={pic}></div>
                </div>
                <div className="player__info">
                    <div className="name">Alexander Romanov</div>
                    <div className="score">Счет: 999</div>
                    <div className="date">{date.getDate()+"."+ date.getMonth()+"."+ date.getYear()+" "+ date.getHours()+"."+ date.getMinutes()+"."+ date.getSeconds()}</div>
                </div>
            </div>

        </div>
    )
}