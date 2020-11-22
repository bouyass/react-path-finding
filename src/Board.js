import React, {useCallback, useEffect, useState, useRef} from 'react'
import './Board.css'

function Board() {

    const [board, setBoard] = useState(Array.from(Array(26), ()=> {return Array(64).fill(0)}))
    const startIndex = useRef([])
    const destinationIndex = useRef([])

    const eventListener = (e) => {
        let newBoard = board
        let ids = e.target.id.split("-")
        if(e.target.style.backgroundColor === ''){
            newBoard[Number.parseInt(ids[0])][Number.parseInt(ids[1])] = 1
            setBoard(newBoard)
            e.target.style.backgroundColor = "#3f454e";
            // if the start cell is not defined yet, we define it firstly
            if(startIndex.current.length === 0){
                let tempArray = [Number.parseInt(ids[0]), Number.parseInt(ids[1])]
                startIndex.current = tempArray
                e.target.style.backgroundColor = "green";
            }else if(destinationIndex.current.length === 0){
                // if the destination is not defined yet, and the start cell is already defined
                destinationIndex.current = [Number.parseInt(ids[0]), Number.parseInt(ids[1])]
                e.target.style.backgroundColor = "red";
            }
        }else{

            if(JSON.stringify(startIndex) === JSON.stringify([Number.parseInt(ids[0]), Number.parseInt(ids[1])])){
                // start index click
                startIndex.current = []
            }else if(JSON.stringify(startIndex) === JSON.stringify([Number.parseInt(ids[0]), Number.parseInt(ids[1])])){
                // destination index click
                destinationIndex.current = []
            }
            e.target.style.backgroundColor = "";
            newBoard[Number.parseInt(ids[0])][Number.parseInt(ids[1])] = 0
            setBoard(newBoard)
        }

    }

    
    useEffect(() => {
        board.map((row, rowIndex) => row.map((column, columnIndex) => {
            let id = `${rowIndex}-${columnIndex}`
            document.getElementById(id).addEventListener('click', eventListener )
        })) 
    }, [])

    return (
        <div className="boardContainer">
            {board.map((row, rowIndex )=> row.map((cell,columnIndex) => {
                let id = `${rowIndex}-${columnIndex}`
                return <div id={id} className="cell">   </div>
        }))}
        </div>
    )
}

export default Board
