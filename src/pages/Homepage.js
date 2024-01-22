
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { Button } from "@material-tailwind/react";
import HomeMainSlider from "../components/HomeMainSlider";
import HomePropertySlider from "../components/HomePropertySlider";
import AboutCompo from "../components/AboutCompo";
import Reviews from "../components/Reviews";
import ForUser from "../components/ForUser";
import Agency from "../components/Agency"


const Homepage = () => {

  return (
    <>
      {/* Section above the image slider */}

      <div className="absolute  h-full w-full bg-black/0 z-50">
        <Header />
        <div className='grid items-center justify-center mt-[155px] space-y-7'>
          <h1 className='text-white text-4xl font-medium ' >Easiest way to find your dream home</h1>

          <div className='relative left-3'><input className='rounded-full bg-white text-black outline-none border-none w-[400px] p-[12px]'


            placeholder='Your ZIP code or City e.g. Dharan'></input>

            <Button className='ml-2 bg-[#005555] rounded-full'
              size='lg'

            >Search</Button>
          </div>
        </div>
      </div>

      <HomeMainSlider />


      {/* INDICATOR ABOVE PROPERTY SLIDES */}

      <div className="mt-16 flex justify-between items-end px-20">

        <h1 className="text-4xl text-[#13263b]  font-medium"> Popular properties</h1>
        <Button className="bg-[#005555] rounded-full py-5 px-4"
        >View All Properties</Button>
      </div>

      <HomePropertySlider />
      <AboutCompo />
      <Reviews />
      <ForUser />

      {/* AGENT RECRUIT */}

      <div className="my-12 flex flex-col items-center space-y-5">
        <h1 className="text-[32px] font-[500] text-[#13263b] ">Be a part of our growing real estate agent </h1>
        <Button className=" bg-[#005555] rounded-full py-5">Apply for a real estate agent</Button>

      </div>

      <Agency />



    </>
  )
}
export default Homepage