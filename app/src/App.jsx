import React, { useState } from 'react'
import Board from './components/Board'
import './App.css'

function App() {
  const [message, setMessage] = useState('First Player Go (You are X)!')
  const [value, setValue] = useState('X')
  const [gameOver, setGameOver] = useState(false)
  const [reset, setReset] = useState(false)

  const handleReset = () => {
    setReset(true)
    setGameOver(false)
    setValue('X')
    setMessage('First Player Go (You are X)!')
  }

  const toggleValue = () => {
    if (value === 'X') {
      setMessage("O's Turn")
    } else {
      setMessage("X's Turn")
    }
    setValue((prevPlayer) => prevPlayer === 'X' ? 'O' : 'X')
  }

  const winner = (who) => {
    if (!gameOver) {
      if (who) {
        setMessage(`${who} Wins!`)
      } else {
        setMessage("It's a Draw!")
      }
    setGameOver(true)
    }
  }


  return (
    <div className='bg-[#392F5A] min-h-screen align-text-center'>
      <h1 className='text-3xl bold text-[#A8C7BB] justify-self-center p-10 mb-25'>Tic Tac Toe</h1>
      <div className='flex items-center justify-center'>
        <Board changeData={toggleValue} value={value} winner={winner} reset={reset} gameOver={gameOver}/>
      </div>
      <div className='flex items-center justify-center mt-20 text-2xl text-yellow-400/50'>
        {message}
      </div>
      <div className="flex items-center justify-center mt-10 text-2xl text-yellow-400/50 active:scale-130 transition-all duration-200">
          {gameOver ? <button onClick={handleReset}>Reset</button> : ''}
      </div>
    </div>
  )
}

export default App
