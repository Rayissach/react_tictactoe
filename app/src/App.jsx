import React, { useState } from 'react'
import Board from './components/Board'
import './App.css'

function App() {
  const [message, setMessage] = useState('First Player Go (You are X)!')
  const [value, setValue] = useState('X')

  const toggleValue = () => {
    setValue((prevPlayer) => prevPlayer === 'X' ? 'O' : 'X')
  }

  return (
    <div className='bg-[#392F5A] min-h-screen align-text-center'>
      <h1 className='text-3xl bold text-[#A8C7BB] justify-self-center p-10 mb-25'>Tic Tac Toe</h1>
      <div className='flex items-center justify-center'>
        <Board changeData={toggleValue} value={value}/>
      </div>
      <div className='flex items-center justify-center mt-20 text-2xl text-yellow-400/50'>
        {message}
      </div>
    </div>
  )
}

export default App
