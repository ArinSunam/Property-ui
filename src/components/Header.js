import React, { useState } from 'react'
import { Navbar } from '@material-tailwind/react'
import { NavLink } from 'react-router-dom'
import { FaBars, FaTimes } from "react-icons/fa";



const Header = () => {

  const navMenu = [
    { path: '/', name: 'Home' },
    { path: '/properties', name: 'Properties' },
    { path: '/services', name: 'Services' },
    { path: '/about', name: 'About' },
    { path: '/contact', name: 'Contact Us' },
  ];

  const [show, setShow] = useState(false);



  return (
    <div >
      <Navbar
        className='bg-[#005555] ml-[100px] my-[20px] w-[1125px] py-7 flex justify-between items-center shadow-none border-none'>
        <div>
          <NavLink className='font-semibold text-2xl py-5 text' > Property</NavLink>
        </div>

        <div className='space-x-6  '>{navMenu.map((nav, i) => {
          return <NavLink to={nav.path} className='hover:font-medium hover:text-lg'> {nav.name}</NavLink>
        })}


        </div>


      </Navbar>




    </div>
  )
}

export default Header
