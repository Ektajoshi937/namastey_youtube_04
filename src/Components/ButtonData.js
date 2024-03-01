import React from 'react'

function ButtonData({name}) {
  return (
    <div>
        <button className='px-2 py-1 bg-gray-200 m-2 rounded-lg'>{name}</button>
    </div>
  )
}

export default ButtonData