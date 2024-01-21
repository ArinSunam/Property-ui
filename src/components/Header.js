import React from 'react'
import { Navbar } from '@material-tailwind/react'
import { NavLink } from 'react-router-dom'


const Header = () => {
  return (
    <div >
      <Navbar


        className='bg-[#005555] ml-[100px] my-[20px] w-[1125px] py-7 flex justify-between items-center shadow-none border-none'>
        <div>
          <NavLink className='font-semibold text-2xl py-5 text' > Property</NavLink>
        </div>

        <div className='space-x-6 '>
          <NavLink className='hover:font-medium hover:text-lg'> Home</NavLink>
          <NavLink className='hover:font-medium hover:text-lg'> Properties</NavLink>
          <NavLink className='hover:font-medium hover:text-lg'> Services</NavLink>
          <NavLink className='hover:font-medium hover:text-lg'> About</NavLink>
          <NavLink className='hover:font-medium hover:text-lg'> Contact Us</NavLink>
        </div>

      </Navbar>


    </div>
  )
}

export default Header
