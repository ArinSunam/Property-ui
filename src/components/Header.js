import React, { useRef } from 'react'
import "../Styles/Header.css"
import { Link } from 'react-router-dom';


const Header = () => {
  const menuRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");
  return (
    <div className="md:pl-[120px] pl-5 md:pr-[120px] pr-3 md:pt-[20px] ">
      <div className="Navbar bg-[#005555] flex justify-between items-center mmd:py-5 py-3 rounded-[8px]">
        <div className="left mmd:ml-10 ml-7">
          <p className="text-[24px] text-white">Property</p>
        </div>

        <div className="Nav mmd:relative absolute mmd:bg-transparent bg-white md:w-[480px] w-[80%] right-0 top-0 mmd:h-0 h-[100%] mmd:z-0 z-[99999]" ref={menuRef} onClick={toggleMenu}>

          <div className="close mmd:hidden flex justify-end  pr-5 cursor-pointer">
            <p className='text-[50px]'><i class="ri-close-line"></i></p>
          </div>

          <div className="right flex md:flex-row flex-col mmd:space-x-10 mmd:mr-12 md:text-white text-black text-[14px] mmd:pt-0 pt-2  mmd:pl-0 pl-10 mmd:space-y-0 space-y-3 ">

            <Link to='/Home'><p>Home</p></Link>
            <Link to='/Properties'><p>Properties</p></Link>
            <Link to='/Services'><p>Services</p></Link>
            <Link to='/About'><p>About</p></Link>
            <Link to='/ContactUs'><p>Contact Us</p></Link>
          </div>


        </div>

        <div className="menu text-white text-[30px] mmd:hidden cursor-pointer mr-7" onClick={toggleMenu}>
          <p><i class="ri-menu-line"></i></p>
        </div>
      </div>
    </div>
  )
}
export default Header