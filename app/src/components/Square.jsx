import React, { useState } from 'react'

export default function Board({ value }) {
    return (
        <div>
            <div className='grid grid-cols-3 gap-0 w-72 h-72  border-gray-700/75 contain rounded-xl overflow-clip border-4 shadow-md'>
                {Array.from({length: 9}, (_,index) => (
                    <button key={index} className='flex items-center justify-center w-24 h-24 bg-gray-800 text-yellow-400 border border-gray-600 hover:bg-gray-700 transition-all duration-200 active:scale-110'>
                        <h1 className='text-lg/7 '>{value}</h1>
                    </button>
                ))}
            </div>
        </div>
    )
}