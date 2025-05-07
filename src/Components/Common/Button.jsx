import React from 'react'

function Button({value,fun}) {
  return <button className='bg-purple-500 px-5 py-2 rounded-md cursor-pointer'>
    {value}
    </button>
}

export default Button