import React from 'react'
import photo from '../assets/my_photo.jpg'
import { FaGithub } from "react-icons/fa";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { RiTwitterXLine } from "react-icons/ri";

function About() {
  return (
    <div className='px-10 py-20 max-w-7xl mx-auto'>
        <div className='mb-16 text-center'>
        <h2 className='text-4xl font-bold text-gray-800 mb-4'>About Me</h2>
        <div className='w-20 h-1 bg-green-600 mx-auto'></div>
      </div>
      <div className='flex flex-col lg:flex-row items-center justify-between gap-10'>
        {/* introduction */}
        <div className='w-full lg:w-1/2 flex flex-col gap-12'>
          {/* tagline */}
          <div className='text-xl font-extrabold'>
            <h1 className='flex flex-col leading-tight'>
              <span className='text-gray-800'>Turning Ideas</span>
              <span className='text-gray-700'>into Interactive</span>
              <span className='text-gray-900'>Web Realities</span>
            </h1>
          </div>

          {/* intro */}
          <div className='space-y-6'>
            <p className='text-lg sm:text-xl text-gray-700'>
              Hello, I'm <u>Mrityunjay Maharana</u> , a passionate Computer Science student at Lovely Professional University, specializing in:
            </p>
            <div className='space-y-4'>
              <span className='inline-block bg-green-100 px-6 py-2 rounded-full text-gray-800'>Full-Stack Development</span>&nbsp;
              <span className='inline-block bg-green-100 px-6 py-2 rounded-full text-gray-800'>IOS Development</span>
              <span className='inline-block bg-green-100 px-6 py-2 rounded-full text-gray-800'>Cloud Computing</span>
            </div>
            <p className='text-lg sm:text-xl text-gray-700'>
              I'm deeply committed to building innovative and scalable applications that tackle real-world problems through technology.
            </p>
          </div>

          {/* action button */}
          <div className='flex gap-4'>
            <button className='bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition'>
              <a href="">Resume</a>
            </button>
            <button className='border border-gray-800 px-6 py-2 rounded-lg hover:bg-gray-100 transition'>
              <a href="">Projects</a>
            </button>
          </div>
        </div>
        {/* profile card */}
        <div className='w-full lg:w-1/2 flex flex-col items-center gap-8 p-8'>
          <div>
            <img 
              className='w-90 h-90 object-cover rounded-full border-4 border-gray-300 shadow-md'
              src={photo} 
              alt="Mrityunjay Maharana" 
            />
          </div>
          <div className='text-center space-y-2'>
            <h1 className='text-2xl font-bold text-green-700'>Mrityunjay Maharana</h1>
            <div className='flex flex-wrap justify-center gap-2'>
              <span className='text-gray-700'>Ambitious Fullstack Developer</span>
              <span className='text-gray-700'>•</span>
              <span className='text-gray-700'>UX/UI Designer</span>
              <span className='text-gray-700'>•</span>
              <span className='text-gray-700'>IOS Developer</span>
            </div>
          </div>
          <div className='flex gap-6 text-3xl text-gray-700'>
            <a target='_blank' href="https://github.com/MrityunjayMaharana" className='hover:text-gray-900 transition'>
              <FaGithub />
            </a>
            <a target='_blank' href="https://www.linkedin.com/in/mrityunjay-maharana/" className='hover:text-blue-600 transition'>
              <TbBrandLinkedinFilled />
            </a>
            <a target='_blank' href="https://x.com/Mrityunjay1608?s=09" className='hover:text-gray-900 transition'>
              <RiTwitterXLine />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About