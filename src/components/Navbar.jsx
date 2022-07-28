import React, {useState} from 'react';
import {FaBars, FaTimes, FaGithub,FaLinkedin,FaFacebook} from 'react-icons/fa'
import Logo from '../assets/logos.png'
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import {Link} from 'react-scroll';

const Navbar = () => {
      const [nav, setNav] = useState(false)
      const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[100px] flex justify-between items-center px-4 bg-[#1A2238] text-[#FF6A3D]'>
      <div>
        <img src={Logo} alt="My Logo" style={{width: '80px'}} />
      </div>
      {/* menu */}
      <div className='hidden md:flex' >
        <ul className='hidden md:flex'>
          <li>
            <Link to='home' smooth={true} duration={500} >Home</Link>
          </li>
          <li>
            <Link to='about' smooth={true} duration={500} >About</Link>
          </li>
          <li>
            <Link to='skills' smooth={true} duration={500} >Skills</Link>
          </li>
          <li>
            <Link to='projects' smooth={true} duration={500} >Projects</Link>
          </li>
          <li>
            <Link to='contact' smooth={true} duration={500} >Contact Me</Link>
          </li>
        </ul>
      </div>
      {/* bars */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* another menu */}
      <div>
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#1A2238] flex flex-col justify-center items-center'}>
          <li className='py-6 text-4xl'> <Link onClick={handleClick} to='home' smooth={true} duration={500} >Home</Link></li>
          <li className='py-6 text-4xl'> <Link onClick={handleClick} to='about' smooth={true} duration={500} >About</Link></li>
          <li className='py-6 text-4xl'> <Link onClick={handleClick} to='skills' smooth={true} duration={500} >Skills</Link></li>
          <li className='py-6 text-4xl'> <Link onClick={handleClick} to='projects' smooth={true} duration={500} >Projects</Link></li>
          <li className='py-6 text-4xl'> <Link onClick={handleClick} to='contact' smooth={true} duration={500} >Contact Me</Link></li>
        </ul>
      </div>
      {/* icons */}
      <div className={'hidden lg:flex fixed flex-col top-[35%] left-3'}>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[9DAAF2]' >
            <a className='flex justify-between items-center w-full text-[#FF6A3D]' href="/">Linkedin <FaLinkedin size={30} /></a></li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[9DAAF2]' >
            <a className='flex justify-between items-center w-full text-[#FF6A3D]' href="/">Facebook <FaFacebook size={30} /></a></li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[9DAAF2]' >
            <a className='flex justify-between items-center w-full text-[#FF6A3D]' href="/">GitHub <FaGithub size={30} /></a></li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[9DAAF2]' >
            <a className='flex justify-between items-center w-full text-[#FF6A3D]' href="/">Email <HiOutlineMail size={30} /></a></li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[9DAAF2]' >
            <a className='flex justify-between items-center w-full text-[#FF6A3D]' href="/">Resume <BsFillPersonLinesFill size={30} /></a></li>
        
       </ul>
      </div>
    </div>
  )
}

export default Navbar
