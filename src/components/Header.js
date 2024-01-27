import React, { useRef } from 'react'
import { Navbar } from '@material-tailwind/react'
import { NavLink } from 'react-router-dom'
import { FaBars, FaTimes } from "react-icons/fa";
import '../Styles/Header.css'



const Header = () => {

  const menuRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  return (
    <div >
      <Navbar
        className='bg-[#005555] ml-[100px] my-[20px] w-[1125px] py-7 flex justify-between items-center shadow-none border-none  mmd:w-[575px] mmd:ml-[60px]'>
        <div>
          <NavLink className='font-semibold text-2xl py-5 text' > Property</NavLink>
        </div>

        <div className='Nav mmd:fixed mmd:right-0 mmd:top-0 mmd:h-[30vw] 
        mmd:bg-white mmd:w-2/5 mmd:z-50 ' ref={menuRef} onClick={toggleMenu}>
          <div className='hidden mmd:flex mmd:justify-end mmd:pr-5 mmd:cursor-pointer'>
            <p className='text-black'><FaTimes /></p>
          </div>

          <div className='space-x-6 mmd:flex mmd:flex-col 
        mmd:justify-end
        mmd:text-black mmd:text-[14px] mmd:pt-[2px] mmd:space-y-3 '>
            <NavLink to='/' className='mmd:ml-6'>Home</NavLink>
            <NavLink to='/properties'>Properties</NavLink>
            <NavLink to='/services'>Services</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/contact'>Contact Us</NavLink>


          </div>
        </div>



        <div className='menu hidden mmd:block mmd:text-white mmd:text-[30px] mmd:cursor-pointer mmd:mr-7' onClick={toggleMenu}>
          <p><FaBars /></p>
        </div>


      </Navbar>




    </div>
  )
}

export default Header
