import React from 'react'
import Header from '../components/Header'
import { FaLocationDot } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Button, Input } from "@material-tailwind/react";
import Footer from '../components/Footer';
import { IoCall } from "react-icons/io5";

const Contact = () => {
  return (
    <div>
      {/* Header Section */}

      <div className="flex flex-col space-y-[80px] m-0 h-[70vh] w-[100vw]  bg-cover" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5?q=80&w=1481&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
        <Header />

        <div className='space-y-4 flex flex-col items-center'>
          <h1 className='text-white text-[40px] font-semibold'>Contact Us</h1>
          <div>
            <span className='text-white'>Home</span>
            <span className='text-gray-600 p-1'>/    Contact Us</span>
          </div>
        </div>
      </div>

      {/* BODY */}

      <div className='mt-[70px] ml-[40px] grid grid-cols-3'>
        <div className='flex flex-col '>

          {/* item-1 */}

          <div className='w-[370px] mb-9 grid grid-cols-5 place-items-center col-start-1 col-end-2  '>

            <div className='bg-[#00204a] h-[44px] w-[44px] rounded-full col-start-1 col-end-2 items-center relative left-10'>
              <FaLocationDot className='text-xl text-white ml-[12px] mt-[11px] ' />
            </div>

            <div className=' mt-3 col-start-2 col-end-6 place-items-start'>
              <h1 className='text-[18px] font-medium text-[#00204a] mb-2'>Location</h1>
              <p className='text-sm text-[#777] '>Baluwatar-4, Kathmandu, Nepal</p>

            </div>
          </div>


          {/* item-2 */}

          <div className='w-[370px] mb-9 grid grid-cols-5 place-items-center gap-3  '>

            <div className='bg-[#00204a] h-[44px] w-[44px] rounded-full col-start-1 col-end-2  relative left-12'>
              <FaRegClock className='text-xl text-white ml-[12px] mt-[11px] ' />
            </div>

            <div className=' mt-3 col-start-2 col-end-6 relative right-[52px]'>
              <h1 className='text-[18px] font-medium text-[#00204a] mb-2'>Open hours</h1>
              <div className='text-sm text-[#777] flex flex-col'>
                <p className=' '>Sunday-Friday:</p>
                <p className=' '>10am-5pm</p>
              </div>
            </div>
          </div>


          {/* item-3 */}

          <div className='w-[370px] mb-9 grid grid-cols-5 place-items-center  '>

            <div className='bg-[#00204a] h-[44px] w-[44px] rounded-full col-start-1 col-end-2 items-center relative left-10'>
              <MdEmail className='text-xl text-white ml-[12px] mt-[11px] ' />
            </div>

            <div className=' mt-3 col-start-2 col-end-6 relative right-[26px]'>
              <h1 className='text-[18px] font-medium text-[#00204a] mb-2'>Email</h1>
              <p className='text-sm text-[#777] '>arinsunam@gmail.com</p>

            </div>
          </div>


          {/* item-4 */}

          <div className='w-[370px] mb-9 grid grid-cols-5 place-items-center  '>

            <div className='bg-[#00204a] h-[44px] w-[44px] rounded-full col-start-1 col-end-2 items-center relative left-10'>
              <IoCall className='text-xl text-white ml-[12px] mt-[11px] ' />
            </div>

            <div className=' mt-3 col-start-2 col-end-6 relative right-[56px]'>
              <h1 className='text-[18px] font-medium text-[#00204a] mb-2'>Call:</h1>
              <p className='text-sm text-[#777] '>9876543210</p>

            </div>
          </div>

        </div>

        {/* Form */}

        <div className='col-start-2 col-end-4 place-items-center flex flex-col items-center space-y-5'>
          <div className='flex justify-between gap-7 '>
            <Input label='Your Name' size='lg' className='w-[326px]' />
            <Input label='Your Email' size='lg' className='w-[326px]' />
          </div>


          <div className='space-y-5'>
            <Input label='Subject' size='lg' className='w-[682px] ' />
            <Input label='Message' className='w-[682px] py-36
             ' />

          </div>


        </div>

      </div>

      {/* BUTTON */}
      <Button className='bg-[#005555] mt-5 py-4 mx-[600px] rounded-full'>Send Message</Button>

      {/* FOOTER*/}

      <div className='mt-[58px]'>
        <Footer />
      </div>

    </div>


  )
}

export default Contact
