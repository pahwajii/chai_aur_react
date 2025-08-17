import React from 'react'

function Card({ username, testboxtxt = "hello guyz", img, member }) {
  return (
    <div className="max-w-xs p-6 rounded-md shadow-md bg-black text-white">
      <img
        src={img || "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"}
        alt={username}
        className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
      />
      <div className="mt-6 mb-2">
        <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
          {username || "no name"}
        </span>
        <h2 className="text-xl font-semibold tracking-wide">{member}</h2>
      </div>
      <p className="text-gray-300">{testboxtxt}</p>
    </div>
  )
}


export default Card