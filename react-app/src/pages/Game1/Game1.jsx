import React, {useState, useEffect} from "react";
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

    const [certainColorArray, setCertainColorArray] = useState([])

    const checkColomnOfFour = () => {
        for (let i = 0; i <= 39; i++ ) {
            const columnOfFour = [i, i + width, i + width * 2, i + width * 3]
            // console.log(columnOfThree)
            const colorForCheck = certainColorArray[i]

            if (columnOfFour.every(elNumber =>  certainColorArray[elNumber] === colorForCheck)) {
                columnOfFour.forEach(elNumber => certainColorArray[elNumber] = "")
            }
        }
    }

    const checkColomnOfThree = () => {
        for (let i = 0; i <= 47; i++ ) {
            const columnOfThree = [i, i + width, i + width * 2]
            // console.log(columnOfThree)
            const colorForCheck = certainColorArray[i]

            if (columnOfThree.every(elNumber =>  certainColorArray[elNumber] === colorForCheck)) {
                columnOfThree.forEach(elNumber => certainColorArray[elNumber] = "")
            }
        }
    }

    const checkRowOfFour = () => {
        for (let i = 0; i <= 64; i++ ) {
            const rowOfFour = [i, i + 1, i + 2, i + 3]
            const colorForCheck = certainColorArray[i]
            const blocksNotForCheck = [5, 6, 7, 13, 14, 15, 21, 22, 23, 29, 30, 31, 37, 38, 39, 45, 46, 47, 53, 54, 55, 62, 63, 64]

            if (blocksNotForCheck.includes(i)) continue

            if (rowOfFour.every(elNumber =>  certainColorArray[elNumber] === colorForCheck)) {
                rowOfFour.forEach(elNumber => certainColorArray[elNumber] = "")
            }
        }
    }

    const checkRowOfThree = () => {
        for (let i = 0; i <= 64; i++ ) {
            const rowOfThree = [i, i + 1, i + 2]
            const colorForCheck = certainColorArray[i]
            const blocksNotForCheck = [6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55, 63, 64]

            if (blocksNotForCheck.includes(i)) continue

            if (rowOfThree.every(elNumber =>  certainColorArray[elNumber] === colorForCheck)) {
                rowOfThree.forEach(elNumber => certainColorArray[elNumber] = "")
            }
        }
    }

    const moveBelow = () => {
        for (let i = 0; i < 64 - width; i++) {
            const firstRow = [1, 2, 3, 4, 5, 6, 7]
            const isfirstRow = firstRow.includes(i)

            if (isfirstRow && certainColorArray[i] === "") {
                const randomNumberfromOneToFive = Math.floor(Math.random() * squareColors.length)
                certainColorArray[i] = squareColors[randomNumberfromOneToFive]
            }

            if ( certainColorArray[i + width] === "") {
                certainColorArray[i + width] = certainColorArray[i]
                certainColorArray[i] = ""
            }
        }
    }

    const dragStart = () => {
        console.log("drag start")
    }

    const dragDrop = () => {
        console.log("drag drop")
    }

    const dragEnd = () => {
        console.log("drag end")
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
  


    return <div className="app">
        <div className="game">
            {certainColorArray.map((elColor, i) => <img 
                                                    key={i}
                                                    style={{backgroundColor: elColor}}
                                                    data-id={i}
                                                    draggable={true}
                                                    onDragStart={dragStart}
                                                    onDragOver={(e) => e.preventDefault()}
                                                    onDragEnter={(e) => e.preventDefault()}
                                                    onDragLeave={(e) => e.preventDefault()}
                                                    onDrop={dragDrop}
                                                    onDragEnd={dragEnd}
                                                     />
            )}

        </div>
    </div>
}