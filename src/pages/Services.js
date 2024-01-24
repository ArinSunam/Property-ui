import React from 'react'
import Header from '../components/Header'
import { GiFamilyHouse } from "react-icons/gi";
import { BsBuildings } from "react-icons/bs";
import { GiVikingLonghouse } from "react-icons/gi";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import Reviews from '../components/Reviews';
import Footer from '../components/Footer';


const Services = () => {
  return (
    <div>
      {/* HEADER */}
      <div className="flex flex-col space-y-[80px] m-0 h-[70vh] w-[100vw]  bg-cover" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1569428047118-ae9338065103?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
        <Header />

        <div className='space-y-4 flex flex-col items-center'>
          <h1 className='text-white text-[40px] font-semibold'>Services</h1>
          <div>
            <span className='text-white'>Home</span>
            <span className='text-gray-600 p-1'>/    Services</span>
          </div>
        </div>
      </div>


      {/* ABOUT SEC */}


      <div className='py-8  bg-[#e6e6f7]'>
        <div className='mx-[110px]  grid grid-cols-4 space-x-6 space-y-7' >

          {/* properties */}

          <div className='ml-5 relative top-7 w-[250px] bg-white h-[270px] py-6 px-3  text-center rounded col-span-1'>
            <GiFamilyHouse className='m-auto text-6xl text-[#13263b]' />
            <p className='text-[#13263b] font-semibold pt-2'>Our Properties</p>
            <p className='text-sm  text-gray-800 font-medium py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores esse, adipisci </p>

            <p className='text-sm text-[#13263b]   underline leading-5 pb-[10px]  ' >Learn More</p>

          </div>

          {/* sale */}


          <div className=' w-[250px] h-[270px] bg-white  py-6 px-3 ml-8 text-center rounded col-span-1'>

            <BsBuildings className='m-auto text-6xl text-[#13263b]' />
            <p className='text-[#13263b] font-semibold pt-2'>Properties On Sale</p>
            <p className='text-sm  text-gray-800 font-medium py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores esse, adipisci </p>

            <p className='text-sm text-[#13263b]   underline pb-[10px]  hover:mr-0 duration-1000' >Learn More</p>

          </div>

          {/* agents */}
          <div className=' w-[250px] h-[270px] bg-white  py-6 px-3 ml-8 text-center rounded  col-span-1'>
            <MdOutlineRealEstateAgent className='m-auto text-6xl text-[#13263b]' />

            <p className='text-[#13263b] font-semibold pt-2'>Real Estate Agent</p>
            <p className='text-sm  text-gray-800 font-medium py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores esse, adipisci </p>

            <p className='text-sm text-[#13263b]   underline pb-[10px]  hover:mr-0 duration-1000' >Learn More</p>

          </div>


          {/* house on sale */}
          <div className=' w-[250px] h-[270px] bg-white  py-6 px-3 ml-8 text-center rounded col-span-1'>

            <GiVikingLonghouse className='m-auto text-6xl text-[#13263b]' />
            <p className='text-[#13263b] font-semibold pt-2'>House on Sale</p>
            <p className='text-sm  text-gray-800 font-medium py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores esse, adipisci </p>

            <p className='text-sm text-[#13263b]   underline pb-[10px]  hover:mr-0 duration-1000' >Learn More</p>

          </div>
          {/* property2 */}
          <div className=' w-[250px] h-[270px] bg-white  py-6 px-3 ml-8 text-center rounded col-span-1'>

            <GiFamilyHouse className='m-auto text-6xl text-[#13263b]' />
            <p className='text-[#13263b] font-semibold pt-2'>Our Proporties</p>
            <p className='text-sm  text-gray-800 font-medium py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores esse, adipisci </p>

            <p className='text-sm text-[#13263b]   underline pb-[10px]  hover:mr-0 duration-1000' >Learn More</p>

          </div>
          {/* sale2 */}
          <div className=' w-[250px] h-[270px] bg-white  py-6 px-3 ml-8 text-center rounded col-span-1'>

            <BsBuildings className='m-auto text-6xl text-[#13263b]' />
            <p className='text-[#13263b] font-semibold pt-2'>Proporties on Sale</p>
            <p className='text-sm  text-gray-800 font-medium py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores esse, adipisci </p>

            <p className='text-sm text-[#13263b]   underline pb-[10px]  hover:mr-0 duration-1000' >Learn More</p>

          </div>
          {/* agents2 */}
          <div className=' w-[250px] h-[270px] bg-white  py-6 px-3 ml-8 text-center rounded col-span-1'>

            <MdOutlineRealEstateAgent className='m-auto text-6xl text-[#13263b]' />
            <p className='text-[#13263b] font-semibold pt-2'>Real Estate Agent</p>
            <p className='text-sm  text-gray-800 font-medium py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores esse, adipisci </p>

            <p className='text-sm text-[#13263b]   underline pb-[10px]  hover:mr-0 duration-1000' >Learn More</p>

          </div>
          {/* house on sale */}
          <div className=' w-[250px] h-[270px] bg-white  py-6 px-3 ml-8 text-center rounded col-span-1'>

            <GiVikingLonghouse className='m-auto text-6xl text-[#13263b]' />
            <p className='text-[#13263b] font-semibold pt-2'>House on Sale</p>
            <p className='text-sm  text-gray-800 font-medium py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores esse, adipisci </p>

            <p className='text-sm text-[#13263b]   underline pb-[10px]  hover:mr-0 duration-1000' >Learn More</p>

          </div>

        </div>
      </div>


      {/* REVIEWS*/}
      <div className='mb-[70px]'>
        <Reviews />
      </div>


      {/* FOOTER */}

      <Footer />
    </div>



  )
}

export default Services
