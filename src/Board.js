import React, {useEffect, useState} from 'react'
import './Board.css'

function Board() {

    const [board, setBoard] = useState(new Array(26).fill(new Array(64).fill(0)))

    useEffect(() => {
        console.log("lyes")
    }, [])

    return (
        <div className="boardContainer">
            {board.map(row => row.map((cell,x) => <div className="cell">  </div>))}
        </div>
    )
}

export default Board
