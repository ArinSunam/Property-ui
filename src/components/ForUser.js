import React from 'react'
import { IoMdHome } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";

const ForUser = () => {
  return (
    <div className='mt-[100px] '>
      <div className='bg-[#f7f7f9] py-[64px] px-[125px]'>

        {/* TOPICS */}

        <h1 className='font-[600] text-[32px] text-[#13263b]  text-center w-[380px] m-auto mb-4'>Let's find home that's perfect for you</h1>
        <p className='text-sm text-center text-gray-800  w-[300px]  m-auto mb-4 '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti architecto alias consectetur </p>



        {/* GRID SECTION */}

        <div className='mt-12 grid grid-cols-3 gap-72'>

          {/* lists */}
          <div className='col-start-1 col-end-2 flex flex-col'>

            {/* item-1 */}

            <div className='w-[370px] mb-9 grid grid-cols-4 gap-1  '>

              <div className='bg-gray-200 h-[85px] w-[85px] rounded-full col-start-1 col-end-2 items-center'>
                <IoMdHome className='text-xl ml-[36px] mt-[36px]' />
              </div>

              <div className=' mt-3 col-start-2 col-end-5'>
                <h1 className='text-[18px] font-medium text-[#13263b] mb-2'>2M Properties</h1>
                <p className='text-sm text-gray-800 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, eius sint tempora non architecto</p>

              </div>
            </div>
            {/* item-2 */}

            <div className='w-[370px] mb-9 grid grid-cols-4 gap-1 '>

              <div className='bg-gray-200 h-[85px] w-[85px] rounded-full col-start-1 col-end-2 items-center'>
                <FaUser className='text-xl ml-[36px] mt-[36px]' />

              </div>

              <div className=' mt-3 col-start-2 col-end-5'>
                <h1 className='text-[18px] font-medium text-[#13263b] mb-2'>Top Rated Agents</h1>
                <p className='text-sm text-gray-800 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, eius sint tempora non architecto</p>

              </div>
            </div>

            {/* item-3 */}

            <div className='w-[370px] grid grid-cols-4 gap-1 '>

              <div className='bg-gray-200 h-[85px] w-[85px] rounded-full col-start-1 col-end-2 items-center'>
                <MdOutlineSecurity className='text-xl ml-[36px] mt-[36px]' />

              </div>

              <div className=' mt-3 col-start-2 col-end-5'>
                <h1 className='text-[18px] font-medium text-[#13263b] mb-2'>Legit Properties</h1>
                <p className='text-sm text-gray-800 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, eius sint tempora non architecto</p>

              </div>
            </div>

          </div>

          {/* image */}

          <img src="https://images.unsplash.com/photo-1606402179428-a57976d71fa4?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='col-start-2 col-end-4 h-[512px] w-[641px]' />
        </div>


        {/* Numbers */}

        <div className='mt-[50px] flex'>

          {/* Data1 */}
          <div className='mr-[130px] flex flex-col items-center'>
            <h1 className='font-bold text-[40px] text-[#13263b] '>3,981</h1>
            <p className='text-sm text-gray-800 '># Buy of properties</p>

          </div>

          {/* Data2 */}
          <div className='mr-[130px] flex flex-col items-center'>
            <h1 className='font-bold text-[40px] text-[#13263b] '>2,217</h1>
            <p className='text-sm text-gray-800 '># of sell properties</p>

          </div>

          {/* Data3 */}
          <div className='mr-[130px] flex flex-col items-center'>
            <h1 className='font-bold text-[40px] text-[#13263b] '>9,534</h1>
            <p className='text-sm text-gray-800 '>#  of all properties</p>

          </div>

          {/* Data4 */}
          <div className='flex flex-col items-center'>
            <h1 className='font-bold text-[40px] text-[#13263b] '>7,081</h1>
            <p className='text-sm text-gray-800 '># of agent</p>

          </div>

        </div>


      </div>

    </div>




  )
}

export default ForUser
