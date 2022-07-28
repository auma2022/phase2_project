import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#1a2238] text-[#ff6a3d]' >
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8' >
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#f4db7d]' >About Me</p>
          </div>
          <div></div>  </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-6'>
            <div className='sm:text-right text-4xl font-bold text-[#f4db7d]'>
              <p>Diana is fueled by her passion for understanding the foundation of frontend development. </p> 
            </div>
            <div>
              <p className= 'text-[#9daaf2]' >
                Diana's hunger for knowledge and determination to turn information into action has contributed to her most recent success at Rockwell Group. There, she led international award-winning campaigns for heavy-hitting brands such as Puma, Gucci, and Rolex. She considers herself a `forever student`, eager to both build on her academic foundations.

                Meanwhile, she vastly improved the productivity of her department by implementing strategic project management methods and ensuring a work-life balance for her team. Madison believes mindfulness in the workplace is key to success, a tenet she lives out through her interests in yoga, meditation, gardening, and painting. 
              </p>
            </div>
            </div>
         </div>
    </div>
  )
}

export default About