import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#1a2238] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/b11d39d2-33b2-46ca-be41-10e43ecd3e38" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#ff6a3d] text-[#ff6a3d]'>Contact</p>
                <p className='text-[#9daaf2] py-4'> Reach out to me through the following form</p>
            </div>
            <input className='bg-[#fff] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#fff]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#fff] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-[#ff6a3d] hover:border-[#ff6a3d] px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact