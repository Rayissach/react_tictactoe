import React, { useState } from 'react'

export default function Square() {
    return (
        <>
            <div className='flex items-center justify-center contain'>
                <button className='flex items-center justify-center w-16 h-16 bg-gray-800 text-yellow-400 border border-gray-600 rounded-lg shadow-md hover:bg-gray-700 transition-all duration-200 active:scale-95'>
                    <h1 className='text-lg/7 '>X</h1>
                </button>
            </div>
        </>
    )
}