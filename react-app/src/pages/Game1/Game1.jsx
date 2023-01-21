import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../App";
import "./Game1.css"

import blueCoin from "../../images/blue_coin.png";
import greenCoin from "../../images/green_coin.png";
import orangeCoin from "../../images/orange_coin.png";
import purpleCoin from "../../images/purple_coin.png";
import redCoin from "../../images/red_coin.png";
import yellowCoin from "../../images/yellow_coin.png";
import blank from "../../images/blank.png";

const width = 8
const squareColors = [
    blueCoin,
    greenCoin,
    orangeCoin,
    purpleCoin,
    redCoin,
    yellowCoin
]

export default () => {

    const nav = useNavigate();
    const { api } = useContext(Context);

    const [currentScore, setCurrentScore] = useState(0);
    const [serverScore, setServerScore] = useState(0);

    useEffect(() => {
        const id = JSON.parse(localStorage.getItem("userMatch3")).id;
        api.getOnePlayer(id)
            .then(res => res.json())
            .then(data => {
                setServerScore(data.score)
            })
    }, [])

    useEffect(() => {
        if (currentScore > serverScore) {
            let obj = JSON.parse(localStorage.getItem("userMatch3"));
            obj.score = currentScore
            api.updPlayer(obj)
                .then(res => res.json())
                .then(data => {
                    localStorage.setItem("userMatch3", JSON.stringify(data))
                })
        }
    }, [currentScore])

    const [certainColorArray, setCertainColorArray] = useState([])
    const [pickedItem, setPickedItem] = useState()
    const [replacedItem, setReplacedItem] = useState()

    const checkColomnOfFour = () => {
        for (let i = 0; i <= 39; i++) {
            const columnOfFour = [i, i + width, i + width * 2, i + width * 3]
            const colorForCheck = certainColorArray[i]

            if (columnOfFour.every(elNumber => certainColorArray[elNumber] === colorForCheck)) {
                columnOfFour.forEach(elNumber => certainColorArray[elNumber] = blank)
                setCurrentScore(currentScore + 4)
                return true
            }
        }
    }

    const checkColomnOfThree = () => {
        for (let i = 0; i <= 47; i++) {
            const columnOfThree = [i, i + width, i + width * 2]
            const colorForCheck = certainColorArray[i]

            if (columnOfThree.every(elNumber => certainColorArray[elNumber] === colorForCheck)) {
                columnOfThree.forEach(elNumber => certainColorArray[elNumber] = blank)
                setCurrentScore(currentScore + 3)
                return true
            }
        }
    }

    const checkRowOfFour = () => {
        for (let i = 0; i < 64; i++) {
            const rowOfFour = [i, i + 1, i + 2, i + 3]
            const colorForCheck = certainColorArray[i]
            const blocksNotForCheck = [5, 6, 7, 13, 14, 15, 21, 22, 23, 29, 30, 31, 37, 38, 39, 45, 46, 47, 53, 54, 55, 62, 63, 64]

            if (blocksNotForCheck.includes(i)) continue

            if (rowOfFour.every(elNumber => certainColorArray[elNumber] === colorForCheck)) {
                rowOfFour.forEach(elNumber => certainColorArray[elNumber] = blank)
                setCurrentScore(currentScore + 4)
                return true
            }
        }
    }

    const checkRowOfThree = () => {
        for (let i = 0; i < 64; i++) {
            const rowOfThree = [i, i + 1, i + 2]
            const colorForCheck = certainColorArray[i]
            const blocksNotForCheck = [6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55, 63, 64]

            if (blocksNotForCheck.includes(i)) continue

            if (rowOfThree.every(elNumber => certainColorArray[elNumber] === colorForCheck)) {
                rowOfThree.forEach(elNumber => certainColorArray[elNumber] = blank)
                setCurrentScore(currentScore + 3)
                return true
            }
        }
    }

    const moveBelow = () => {
        for (let i = 0; i <= 55; i++) {
            const firstRow = [0, 1, 2, 3, 4, 5, 6, 7]
            const isfirstRow = firstRow.includes(i)

            if (isfirstRow && certainColorArray[i] === blank) {
                const randomNumberfromOneToFive = Math.floor(Math.random() * squareColors.length)
                certainColorArray[i] = squareColors[randomNumberfromOneToFive]
            }

            if (certainColorArray[i + width] === blank) {
                certainColorArray[i + width] = certainColorArray[i]
                certainColorArray[i] = blank
            }
        }
    }

    const dragStart = (e) => {
        console.log(e.target, "drag start")
        setPickedItem(e.target)
    }

    const dragDrop = (e) => {
        // e.preventDefault()
        console.log(e.target, "drag drop")
        setReplacedItem(e.target)
    }

    const dragEnd = (e) => {
        console.log(e.target, "drag end")

        const pickedItemId = parseInt(pickedItem.getAttribute('data-id'))
        const replacedItemId = parseInt(replacedItem.getAttribute('data-id'))

        certainColorArray[replacedItemId] = pickedItem.getAttribute("src")
        certainColorArray[pickedItemId] = replacedItem.getAttribute("src")

        const allowedMoves = [
            pickedItemId - 1,
            pickedItemId + 1,
            pickedItemId - width,
            pickedItemId + width
        ]

        const isAllowedMove = allowedMoves.includes(replacedItemId)

        const isColomnOfFour = checkColomnOfFour()
        const isColomnOfThree = checkColomnOfThree()
        const isRowOfFour = checkRowOfFour()
        const isRowOfThree = checkRowOfThree()

        if (replacedItemId && isAllowedMove && (isColomnOfFour || isRowOfFour)) {
            setPickedItem()
            setReplacedItem()
        } else if (replacedItemId && isAllowedMove && (isColomnOfThree || isRowOfThree)) {
            setPickedItem()
            setReplacedItem()

        } else {
            certainColorArray[replacedItemId] = replacedItem.getAttribute("src")
            certainColorArray[pickedItemId] = pickedItem.getAttribute("src")
            setCertainColorArray([...certainColorArray])
        }
    }


    const board = () => {
        const randomColorArray = []
        for (let i = 0; i < width * width; i++) {
            const randomNumberfromOneToFive = Math.floor(Math.random() * squareColors.length)
            const randomColor = squareColors[randomNumberfromOneToFive]
            randomColorArray.push(randomColor)
        }
        // console.log(randomColorArray)
        setCertainColorArray(randomColorArray)
    }

    useEffect(() => {
        board()

    }, [])

    useEffect(() => {
        const id = setInterval(() => {
            checkColomnOfFour()
            checkColomnOfThree()
            checkRowOfFour()
            checkRowOfThree()
            moveBelow()
            setCertainColorArray([...certainColorArray])
        }, 100)
        return () => clearInterval(id)
    }, [checkColomnOfFour, checkColomnOfThree, checkRowOfFour, checkRowOfThree, moveBelow, certainColorArray])

    //    useEffect(() => {
    //     const randomColorArray = []
    //     for (let i = 0; i < width * width; i++) {
    //         const randomNumberfromOneToFive = Math.floor(Math.random() * squareColors.length)
    //         const randomColor = squareColors[randomNumberfromOneToFive]
    //         randomColorArray.push(randomColor)
    //     }
    //     // console.log(randomColorArray)
    //     setCertainColorArray(randomColorArray)
    //      console.log(certainColorArray)
    // }, [])

    return <div>
        <button className="btn__type__1 neon__text__type__2 neon__border__type__1 logout" onClick={e => nav("/")}>back</button>
        <div className="neon__title neon__text__type__1 flicker score">{currentScore}</div>
        <div className="app neon__border__type__1">
            <div className="game">
                {certainColorArray.map((elColor, i) => <img
                    className="cell"
                    key={i}
                    src={elColor}
                    data-id={i}
                    draggable={true}
                    onDragStart={dragStart}
                    onDragOver={(e) => e.preventDefault()}
                    onDragEnter={(e) => e.preventDefault()}
                    onDragLeave={(e) => e.preventDefault()}
                    onDrop={dragDrop}
                    onDragEnd={dragEnd}
                ></img>
                )}
            </div>
        </div>
    </div>


}