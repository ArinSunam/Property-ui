import React from 'react'


import { Link, NavLink } from 'react-router-dom'
import { FaXTwitter, FaPinterestP, FaGithub } from "react-icons/fa6";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";

const Footer = () => {
  const empty = '';
  return (
    <div className='bg-[#efefef] px-20 py-16'>
      <div className='grid grid-cols-8 mmd:flex mmd:flex-col  mmd:gap-9
      '>

        {/* Contact */}
        <div className='ml-[145px] col-start-1 col-end-4 flex flex-col  space-y-4 mmd:ml-0 '>
          <h1 className='text-[12px] text-start text-[#13263b] uppercase font-extrabold '>Contact</h1>
          <p className='text-[#888] text-sm'>Baluwatar, Kathmandu-4, Nepal</p>

          <div className='underline text-sm text-[#777]  flex flex-col gap-3'>
            <NavLink className='hover:text-black hover:no-underline'>9702393579 </NavLink>
            <NavLink className='hover:text-black hover:no-underline'>9702393579 </NavLink>
            <NavLink className='hover:text-black hover:no-underline'>arinsunam@gmail.com</NavLink>
          </div>
        </div>



        <div className='mmd:flex mmd:gap-20 flex gap-9'>
          {/* Sources */}

          <div className='col-start-4 col-end-5 flex flex-col space-y-4'>
            <h1 className='text-[12px] text-[#13263b] uppercase font-extrabold '>Sources</h1>

            <div className='underline text-sm text-[#777] flex flex-col space-y-3'>
              <NavLink className='hover:text-black hover:no-underline'>About us</NavLink>
              <NavLink className='hover:text-black hover:no-underline'> Services</NavLink>
              <NavLink className='hover:text-black hover:no-underline'>Vision</NavLink>
              <NavLink className='hover:text-black hover:no-underline'>Mission</NavLink>
              <NavLink className='hover:text-black hover:no-underline'>Term</NavLink>
              <NavLink className='hover:text-black hover:no-underline'> Privacy</NavLink>
            </div>
          </div>
          {/* Sources col 2 */}

          <div className='col-start-5 col-end-6 flex flex-col space-y-4'>
            <h1 className='text-xs'>{empty}</h1>

            <div className='underline text-sm text-[#777] flex flex-col space-y-3 pt-4'>
              <NavLink className='hover:text-black hover:no-underline'>Partners </NavLink>
              <NavLink className='hover:text-black hover:no-underline'> Business</NavLink>
              <NavLink className='hover:text-black hover:no-underline'>Carrer</NavLink>
              <NavLink className='hover:text-black hover:no-underline'>Blog</NavLink>
              <NavLink className='hover:text-black hover:no-underline'>FAQ</NavLink>
              <NavLink className='hover:text-black hover:no-underline'> Creative</NavLink>
            </div>
          </div>

        </div>


        {/* Links */}

        <div className='col-start-6 col-end-9 space-y-4'>
          <h1 className='text-[12px] text-[#13263b] uppercase font-extrabold'>Links</h1>

          <div className='underline text-sm text-[#777] flex flex-col space-y-3'>
            <NavLink className='hover:text-black hover:no-underline'> Our Vision</NavLink>
            <NavLink className='hover:text-black hover:no-underline'> About Us</NavLink>
            <NavLink className='hover:text-black hover:no-underline'>Contact Us</NavLink>
            <div className='flex gap-2'>
              <h1 className=' h-[40px] w-[40px] bg-[#ccc] rounded-2xl'> <FaInstagram className='text-gray-800 text-md  ml-[13px] relative top-[13px]' /> </h1>

              <h1 className=' h-[40px] w-[40px] bg-[#ccc] rounded-2xl'> <FaFacebookF className='text-gray-800 text-md  ml-[13px] relative top-[13px]' /> </h1>

              <h1 className=' h-[40px] w-[40px] bg-[#ccc] rounded-2xl'> <FaXTwitter className='text-gray-800 text-md  ml-[13px] relative top-[13px]' /> </h1>

              <h1 className=' h-[40px] w-[40px] bg-[#ccc] rounded-2xl'> <FaPinterestP className='text-gray-800 text-md  ml-[13px] relative top-[13px]' /> </h1>

              <h1 className=' h-[40px] w-[40px] bg-[#ccc] rounded-2xl'> <FaGithub className='text-gray-800 text-md  ml-[13px] relative top-[13px]' /> </h1>


              <h1 className=' h-[40px] w-[40px] bg-[#ccc] rounded-2xl'> <IoLogoVercel className='text-gray-800 text-md  ml-[13px] relative top-[13px]' /> </h1>
            </div>
          </div>
        </div>
      </div>

      <p className='pt-12 text-center text-sm text-[#888]'>Copyright &copy; 2024.  All rights reserved. __   Designed by <Link className='underline text-[#777] uppercase'>Arin</Link></p>

      <p className='pt-4 text-center text-sm text-[#888]'> Distributed by <Link className='underline text-[#777] uppercase'>MeowSites</Link></p>

    </div>

  )
}

export default Footer
