import React from 'react'
import Header from '../components/Header'
import HomePropertySlider from '../components/HomePropertySlider'

const Properties = () => {
  return (
    <div className="  "  >
      <div className="flex flex-col space-y-[80px] m-0 h-[70vh] w-[100vw]  bg-cover" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1569428047118-ae9338065103?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
        <Header />

        <div className='space-y-4 flex flex-col items-center'>
          <h1 className='text-white text-[40px] font-semibold'>Properties</h1>
          <div>
            <span className='text-white'>Home</span>
            <span className='text-gray-600 p-1'>/    Properties</span>
          </div>


        </div>


      </div>

      <h1 className='ml-[500px] mt-[50px] text-[32px] font-semibold text-[#13263b]'> Feaured Properties</h1>

      <HomePropertySlider />

    </div >
  )
}

export default Properties
