
import Header from "../components/Header";
import { Button } from "@material-tailwind/react";
import HomeMainSlider from "../components/HomeMainSlider";
import HomePropertySlider from "../components/HomePropertySlider";
import AboutCompo from "../components/AboutCompo";
import Reviews from "../components/Reviews";
import ForUser from "../components/ForUser";
import Agency from "../components/Agency"
import Footer from "../components/Footer";
import { animate, motion } from "framer-motion";




const Homepage = () => {

  const textVariants = {
    initial: {
      y: 100,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      },
    },
    searchAnimate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.75,
        staggerChildren: 0.1
      },
    },
    slowAnimate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.25,
        staggerChildren: 0.1
      },
    },
  }

  return (
    <>
      {/* Section above the image slider */}

      <div className="absolute  h-full w-full bg-black/0 z-40">
        <Header className='z-50' />
        <div className='grid items-center justify-center mt-[155px] space-y-7 msm:mt-[250px]' >
          <motion.h1 className='text-white text-4xl font-medium 
          mmd:text-2xl
          mmd:px-[40px]  msm:px-[25px] msm:text-center mmd:font-semibold' variants={textVariants} initial="initial" animate="animate" >Easiest way to find your dream home</motion.h1>

          <motion.div className='relative left-3' variants={textVariants} initial="initial" animate="searchAnimate"><input className='rounded-full bg-white text-black outline-none border-none w-[400px] p-[12px] msm:w-[55vw] msm:py-[14px]'
            placeholder='Your ZIP code or City e.g. Dharan'
          ></input>

            <Button className='ml-2 bg-[#005555] rounded-full z-30'
              size='lg'

            >Search</Button>
          </motion.div>
        </div>
      </div >

      <HomeMainSlider />


      {/* INDICATOR ABOVE PROPERTY SLIDES */}

      <div className="mt-16 flex justify-between items-end px-20 mmd:flex mmd:flex-col mmd:space-y-3 mmd:items-start msm:px-4">

        <h1 className="text-4xl text-[#13263b]  font-medium"> Popular properties</h1>
        <Button className="bg-[#005555] rounded-full py-5 px-4 "
        >View All Properties</Button>
      </div>

      <HomePropertySlider />


      <AboutCompo />


      <Reviews />
      <ForUser />

      {/* AGENT RECRUIT */}

      <motion.div className="my-12 flex flex-col items-center space-y-5" variants={textVariants} whileInView="slowAnimate" initial="initial">
        <motion.h1 className="text-[32px] font-[500] text-[#13263b] msm:text-2xl msm:text-center " variants={textVariants} whileInView="searchAnimate" initial="initial">Be a part of our growing real estate agent </motion.h1>
        <Button className=" bg-[#005555] rounded-full py-5" >Apply for a real estate agent</Button>

      </motion.div>

      <Agency />
      <Footer />



    </>
  )
}
export default Homepage