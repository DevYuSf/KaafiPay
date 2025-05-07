import React from 'react'

function Link({value,path}) {
  return <a href={path} className='hover:text-purple-500'>{value}</a>
}

export default Link