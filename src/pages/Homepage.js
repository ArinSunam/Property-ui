import React from 'react'
import Header from '../components/Header'
import {
  Carousel,
  Button
} from '@material-tailwind/react'

const Homepage = () => {
  return (
    <div>
      <Carousel >


        <div>

          <img
            src="../images/property2.avif"
            alt="image 1"
            className="h-[100vh] w-[100vw] object-cover"
          />

          <div className="absolute inset-0 h-full w-full bg-black/0">
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
        </div>


        <div>

          <img
            src="../images/property3.avif"
            alt="image 2"
            className="h-[100vh] w-[100vw] object-cover"
          />

          <div className="absolute inset-0 h-full w-full bg-black/40">
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
        </div>


        <div>
          <img
            src="../images/property1.jpg"
            alt="image 3"
            className="h-[100vh] w-[100vw] object-cover"
          />

          <div className="absolute inset-0 h-full w-full bg-black/50">
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
        </div>
      </Carousel>


    </div>
  )
}

export default Homepage
