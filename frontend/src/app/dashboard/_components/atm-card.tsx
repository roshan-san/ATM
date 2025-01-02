import React from 'react'

export function AtmCard() {
  return (
    <div
        className="w-60 h-32 bg-red-500 text-white flex flex-col items-start justify-center p-4 rounded-lg shadow-lg cursor-pointer hover:scale-65"
        draggable
      >
        <p className="text-lg font-bold">ATM Card</p>
        <p className="mt-2 text-sm">**** **** **** 2424</p>
        <p className="mt-1 text-xs">EXP: 12/26</p>
        <p className="mt-1 text-xs">CARDHOLDER: ROSHAN JEYARUBAN</p>
    </div>
  )
}
