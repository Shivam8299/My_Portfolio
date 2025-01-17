import React from 'react'
import { useNavigate } from 'react-router'
import { NavLink } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate()
  return (
        <ul className=' flex mt-4 m-auto sm:px-8 px-2  py-2 gap-6 sm:gap-12 border border-gray-400 rounded-3xl  w-[360px] sm:w-[518px] sm:rounded-full shadow-lg text-sm '>
        <NavLink to='/'>
            <li className='py-1'>HOME</li>
        </NavLink>

        <NavLink  to='/about'>
            <li className='py-1'>ABOUT</li>
        </NavLink>

        <NavLink  to='/projects'>
            <li className='py-1'>PROJECTS</li>
        </NavLink>

        <NavLink  to='/contact'>
            <li className='py-1'>CONTACT</li>
        </NavLink>
        <button>Dark</button>
      </ul>

  )
}

export default Navbar