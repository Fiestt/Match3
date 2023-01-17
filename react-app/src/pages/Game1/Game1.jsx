import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../App";
import "./Game1.css"


const width = 8
const squareColors = [
    "blue",
    "green",
    "orange",
    "purple",
    "red",
    "yellow"
]

export default () => {

    //!!!!!!!!! start fix by Vlad
    const nav = useNavigate();
    const { api } = useContext(Context);

    const [currentScore, setCurrentScore] = useState(0);
    const [serverScore, setServerScore] = useState(0);

    useEffect(() => {
        const id = JSON.parse(localStorage.getItem("userMatch3")).id;
        // console.log(id, "WWWWWWWWW");
        api.getOnePlayer(id)
            .then(res => res.json())
            .then(data => {
                setServerScore(data.score)
                console.log(data, "QQQQQQQQQQ");
            })
    }, [])

    useEffect(() => {
        if (currentScore > serverScore) {

            let obj = JSON.parse(localStorage.getItem("userMatch3"));
            console.log(obj, "VVVVVV")
            obj.score = currentScore
            api.updPlayer(obj)
                .then(res => res.json())
                .then(data => {
                    localStorage.setItem("userMatch3", JSON.stringify(data))
                    console.log(data, "NEW SCORE OF A PLAYER");
                })
        }
       
    }, [currentScore])

    //!!!!!!!!! end fix by Vlad

    const [certainColorArray, setCertainColorArray] = useState([])
    const [pickedItem, setPickedItem] = useState()
    const [replacedItem, setReplacedItem] = useState()

    const checkColomnOfFour = () => {
        for (let i = 0; i <= 39; i++) {
            const columnOfFour = [i, i + width, i + width * 2, i + width * 3]
            // console.log(columnOfThree)
            const colorForCheck = certainColorArray[i]

            if (columnOfFour.every(elNumber => certainColorArray[elNumber] === colorForCheck)) {
                columnOfFour.forEach(elNumber => certainColorArray[elNumber] = "")
                return true
            }
        }
        // setCurrentScore(currentScore + 4);
    }

    const checkColomnOfThree = () => {
        for (let i = 0; i <= 47; i++) {
            const columnOfThree = [i, i + width, i + width * 2]
            // console.log(columnOfThree)
            const colorForCheck = certainColorArray[i]

            if (columnOfThree.every(elNumber => certainColorArray[elNumber] === colorForCheck)) {
                columnOfThree.forEach(elNumber => certainColorArray[elNumber] = "")
                return true
            }
            // setCurrentScore(currentScore + 3);
        }
    }

    const checkRowOfFour = () => {
        for (let i = 0; i < 64; i++) {
            const rowOfFour = [i, i + 1, i + 2, i + 3]
            const colorForCheck = certainColorArray[i]
            const blocksNotForCheck = [5, 6, 7, 13, 14, 15, 21, 22, 23, 29, 30, 31, 37, 38, 39, 45, 46, 47, 53, 54, 55, 62, 63, 64]

            if (blocksNotForCheck.includes(i)) continue

            if (rowOfFour.every(elNumber => certainColorArray[elNumber] === colorForCheck)) {
                rowOfFour.forEach(elNumber => certainColorArray[elNumber] = "")
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
                rowOfThree.forEach(elNumber => certainColorArray[elNumber] = "")
                return true
            }
        }
    }

    const moveBelow = () => {
        for (let i = 0; i <= 55; i++) {
            const firstRow = [0, 1, 2, 3, 4, 5, 6, 7]
            const isfirstRow = firstRow.includes(i)

            if (isfirstRow && certainColorArray[i] === "") {
                const randomNumberfromOneToFive = Math.floor(Math.random() * squareColors.length)
                certainColorArray[i] = squareColors[randomNumberfromOneToFive]
            }

            if (certainColorArray[i + width] === "") {
                certainColorArray[i + width] = certainColorArray[i]
                certainColorArray[i] = ""
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
        console.log(pickedItem)

        const replacedItemId = parseInt(replacedItem.getAttribute('data-id'))
        console.log(replacedItemId)

        certainColorArray[replacedItemId] = pickedItem.style.backgroundColor
        certainColorArray[pickedItemId] = replacedItem.style.backgroundColor

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


        //!!!!!!!!! start fix by Vlad обновления счета
        if (replacedItemId && isAllowedMove && (isColomnOfFour || isRowOfFour)) {
            setPickedItem()
            setReplacedItem()
            setCurrentScore(currentScore + 4);
        } else if (replacedItemId && isAllowedMove && (isColomnOfThree || isRowOfThree)) {
            setPickedItem()
            setReplacedItem()
            setCurrentScore(currentScore + 3);
        } else {
            certainColorArray[replacedItemId] = replacedItem.style.backgroundColor
            certainColorArray[pickedItemId] = pickedItem.style.backgroundColor
            setCertainColorArray([...certainColorArray])
        }
        //!!!!!!!!! end fix by Vlad
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
            // console.log("SSSSSSSSSSS")
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


    //!!!!!!!!! start fix by Vlad кнопку бэк, счет
    return <div>
        <button className="btn__type__1 neon__text__type__2 neon__border__type__1 logout" onClick={e => nav("/")}>back</button>
        <div className="neon__title neon__text__type__1 flicker">{currentScore}</div>
        <div className="app neon__border__type__1">
            <div className="game">
                {certainColorArray.map((elColor, i) => <div
                    className="cell"
                    key={i}
                    style={{ backgroundColor: elColor, cursor: "grab" }}
                    data-id={i}
                    draggable={true}
                    onDragStart={dragStart}
                    onDragOver={(e) => e.preventDefault()}
                    onDragEnter={(e) => e.preventDefault()}
                    onDragLeave={(e) => e.preventDefault()}
                    onDrop={dragDrop}
                    onDragEnd={dragEnd}
                ></div>
                )}
            </div>
        </div>
    </div>


}