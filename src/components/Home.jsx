import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#1A2238]' >
      {/* container1 */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full' >
           <p className='text-[#ff6a3d]' >Hi, My name is</p> 
           <h1 className='text-4xl sm:text-7xl font-bold text-[#9daaf2]' >Diana Auma</h1> <br />
           <h2 className='text-2xl sm:text-5xl font-bold text-[#9daaf2]' >Front end developer </h2> <br />
           <h2 className='py-4 max-w-[700px] text-[#fff]' >I'am seeking an entry-level front end developer role with Minerva Technology Solutions where I can utilise my BSc degree in computer science and my strong analytical skills to be a valuable asset to the company. </h2> <br />
           <div>
            <button className='text-[#FF6A3D] group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#9daaf2] hover:border-[#ff6a3d]' >View Projects
             <span className='group-hover:rotate-90 duration-300' ><HiArrowNarrowRight className='ml-3'/></span></button>
           </div>
      </div>
    </div>
  )
}

export default Home