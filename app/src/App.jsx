import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

function App() {
  const [message, setMessage] = useState('Tic Tac Toe')

  return (
    <div className='bg-[#392F5A] h-screen align-text-center'>
      <h1 className='text-3xl bold text-[#A8C7BB] justify-self-center p-10'>{message}</h1>
      <Square />
    </div>
  )
}

export default App
