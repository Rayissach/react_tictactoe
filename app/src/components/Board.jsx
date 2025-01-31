import React, { useState } from 'react'

export default function Board({ value, changeData }) {
    //An array of null values to allow access to squares by index [null, null..]
    const [squares, setSquares] = useState(Array(9).fill(null)) 
    const lines = [
        [0,1,2] , [3,4,5], [6,7,8], //Rows
        [0,4,8], [2,4,6],           //Diagonals
        [0,3,6], [1,4,7], [2,5,8]   //Columns
    ]

    //Function to update square values using it's index
    const handlePlayer = (index) => {
        if (squares[index] !== null) {
            return
        }
        //Create copy of null squares array
        const newSquares = [...squares]
        //On click assign square at index prop value
        newSquares[index] = value
        //Update hook with new value if not null
        setSquares(newSquares)
        //Callback function to toggle values and update to parent
        changeData()

        for (let line of lines) {
            const [a, b, c] = line
            if (newSquares[a] && newSquares[a] === newSquares[b] &&  newSquares[a] === newSquares[c]) {
                console.log("Winner!!")
            }
        }
    }
    return (
        <div>
            <div className='grid grid-cols-3 gap-0 w-72 h-72  border-gray-700/75 contain rounded-xl overflow-clip border-4 shadow-md'>
                {Array.from({length: 9}, (_,index) => (
                    <button key={index} className='flex items-center justify-center w-24 h-24 bg-gray-800 text-yellow-400 border border-gray-600 hover:bg-gray-700 transition-all duration-200 active:scale-110' onClick={() => handlePlayer(index)}>
                        <h1 className='text-lg/7 '>{squares[index]}</h1>
                    </button>
                ))}
            </div>
        </div>
    )
}