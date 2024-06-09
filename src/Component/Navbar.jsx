import React from 'react'

function Navbar() {
  return (
    <nav className='flex justify-center'>
      <ul className='flex space-x-20 text-xl p-4'>
        <li><a href='#' className='text-blue-500 hover:text-blue-700'>Home</a></li>
        <li><a href='#' className='text-blue-500 hover:text-blue-700'>About</a></li>
        <li><a href='#' className='text-blue-500 hover:text-blue-700'>Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar