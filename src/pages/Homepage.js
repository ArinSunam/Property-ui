import Slider from "react-slick"
import "../Styles/HomeSlider.css"
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { Button } from "@material-tailwind/react";


const Homepage = () => {
  const settings = {
    fade: false,
    speed: 1000,
    autoplaySpeed: 5000,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };
  return (
    <>
      <div className="absolute  h-full w-full bg-black/0 z-10">
        <Header />
        <div className='grid items-center justify-center mt-[155px] space-y-7'>
          <h1 className='text-white text-4xl font-medium ' >Easiest way to find your dream home</h1>

          <div className='relative left-3'><input className='rounded-full bg-white text-black outline-none border-none w-[400px] p-[12px]'


            placeholder='Your ZIP code or City e.g. Dharan'></input>

            <Button className='ml-2 bg-teal-900 rounded-full'
              size='lg'

            >Search</Button>
          </div>
        </div>
      </div>


      <Slider {...settings} className="w-[100%] md:h-[100vh] h-[100vh] overflow-hidden ">
        <div className="slider__item-01 h-[100vh]">
        </div>

        <div className="slider__item-02  md:h-[100vh] h-[100vh]">
        </div>

        <div className="slider__item-03   md:h-[100vh] h-[100vh]">

        </div>

      </Slider>

      <div>
        <p>hi</p>
      </div>

    </>
  )
}
export default Homepage